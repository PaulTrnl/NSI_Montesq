(() => {
  "use strict";

  const SUPABASE_URL = "https://vqrsqayfltaycicidoxf.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ul2DC51IHC42UIR91f5URQ_Pdr5RR4L";
  const CLASSES = [
    "2nde 1 - P1", "2nde 1 - P2", "2nde 2 - P1", "2nde 2 - P2",
    "2nde 4 - P1", "2nde 4 - P2", "2nde 7 - P1", "2nde 7 - P2",
    "2nde 10 - P1", "2nde 10 - P2", "2nde 11 - P1", "2nde 11 - P2",
    "2nde 12 - P1", "2nde 12 - P2"
  ];

  let db;
  let campaigns = [];
  let currentCampaign = "";
  let currentClass = "";
  let adminRecords = [];
  let adminCampaigns = [];
  let adminSubjects = [];
  let subjectTitles = new Map();
  let campaignTitles = new Map();
  let availabilityRequest = 0;

  const $ = (id) => document.getElementById(id);
  const message = (id, value) => { const el = $(id); if (el) el.textContent = value || ""; };
  const el = (tag, attrs = {}, text = "") => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === "className") node.className = value;
      else if (key === "hidden") node.hidden = value;
      else node.setAttribute(key, value);
    });
    if (text !== "") node.textContent = text;
    return node;
  };
  const addOption = (select, value, label) => select.appendChild(el("option", { value }, label));

  function init() {
    const root = $("campaign-app");
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";
    if (!window.supabase?.createClient) {
      message("campaign-public-message", "La bibliothèque Supabase n'a pas été chargée. Vérifiez mkdocs.yml.");
      return;
    }
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    $("campaign-select").addEventListener("change", async () => {
      currentCampaign = $("campaign-select").value;
      populateClassSelect();
      await loadAvailability();
    });
    $("campaign-class").addEventListener("change", () => {
      currentClass = $("campaign-class").value;
      loadAvailability();
    });
    $("campaign-login-form").addEventListener("submit", login);
    $("campaign-logout").addEventListener("click", logout);
    $("campaign-admin-filter").addEventListener("change", loadAdminRegistrations);
    $("campaign-admin-class-filter").addEventListener("change", loadAdminRegistrations);
    $("campaign-export").addEventListener("click", exportCsv);
    $("campaign-create-form").addEventListener("submit", createCampaign);
    db.auth.getSession().then(({ data, error }) => {
      if (error) message("campaign-login-message", error.message);
      updateTeacherView(data?.session || null);
    });
    db.auth.onAuthStateChange((_event, session) => updateTeacherView(session));
    loadPublicCampaigns();
  }

  async function loadPublicCampaigns() {
    message("campaign-public-message", "Chargement des campagnes…");
    const { data, error } = await db.rpc("list_public_campaigns");
    if (error) {
      message("campaign-public-message", "Impossible de charger les campagnes : " + error.message);
      return;
    }
    const byId = new Map();
    (data || []).forEach((row) => {
      if (!byId.has(row.campaign_id)) byId.set(row.campaign_id, { id: row.campaign_id, title: row.campaign_title, subject: row.campaign_subject, level: row.campaign_level, year: row.campaign_year, classes: [] });
      byId.get(row.campaign_id).classes.push(row.class_code);
    });
    campaigns = Array.from(byId.values());
    const select = $("campaign-select");
    select.replaceChildren();
    addOption(select, "", "Choisir une campagne…");
    campaigns.forEach((campaign) => addOption(select, campaign.id, `${campaign.title} — ${campaign.subject} ${campaign.level} (${campaign.year})`));
    if (campaigns.length) message("campaign-public-message", "Choisissez une campagne, puis votre classe et votre demi-groupe.");
    else message("campaign-public-message", "Aucune campagne ouverte aux inscriptions pour le moment.");
  }

  function populateClassSelect() {
    const select = $("campaign-class");
    select.replaceChildren();
    addOption(select, "", "Choisir une classe…");
    const campaign = campaigns.find((item) => item.id === currentCampaign);
    (campaign?.classes || []).forEach((name) => addOption(select, name, name));
    currentClass = "";
    $("campaign-subjects").replaceChildren();
    message("campaign-counter", "");
  }

  async function loadAvailability() {
    const container = $("campaign-subjects");
    container.replaceChildren();
    message("campaign-counter", "");
    if (!currentCampaign || !currentClass) {
      message("campaign-public-message", "Choisissez une campagne et votre classe / demi-groupe.");
      return;
    }
    const request = ++availabilityRequest;
    message("campaign-public-message", "Chargement des sujets…");
    const { data, error } = await db.rpc("campaign_availability", { p_campaign_id: currentCampaign, p_class_code: currentClass });
    if (request !== availabilityRequest) return;
    if (error) { message("campaign-public-message", "Impossible de charger les sujets : " + error.message); return; }
    const subjects = data || [];
    const reserved = subjects.filter((s) => s.reserved).length;
    message("campaign-counter", `${subjects.length - reserved} sujet(s) disponible(s) sur ${subjects.length} — ${reserved} réservé(s).`);
    message("campaign-public-message", `Sélection : ${currentClass}. Les noms des élèves ne sont pas affichés.`);
    subjects.forEach((subject) => {
      const card = el("article", { className: "campaign-subject-card" });
      const title = el("h3", {}, subject.title);
      const actions = el("div", { className: "campaign-subject-actions" });
      actions.appendChild(el("span", { className: "campaign-status " + (subject.reserved ? "reserved" : "available") }, subject.reserved ? "Réservé" : "Disponible"));
      if (!subject.reserved) {
        const button = el("button", { type: "button" }, "Inscrire mon groupe");
        button.addEventListener("click", () => showRegistrationForm(card, subject));
        actions.appendChild(button);
      }
      card.append(title, actions);
      container.appendChild(card);
    });
  }

  function showRegistrationForm(card, subject) {
    if (card.querySelector(".campaign-register-form")) return;
    const form = el("form", { className: "campaign-register-form" });
    form.appendChild(el("p", {}, "Inscription — " + subject.title));
    for (let i = 1; i <= 3; i++) {
      const label = el("label", {}, `Nom et prénom de l'élève ${i}${i < 3 ? " (obligatoire)" : " (facultatif)"}`);
      const input = el("input", { type: "text", maxlength: "100", autocomplete: "off", required: i <= 2, placeholder: "Nom Prénom" });
      input.dataset.student = "true";
      label.appendChild(input);
      form.appendChild(label);
    }
    const submit = el("button", { type: "submit" }, "Valider l'inscription");
    const cancel = el("button", { type: "button", className: "campaign-secondary" }, "Annuler");
    const status = el("p", { className: "campaign-message", "aria-live": "polite" });
    cancel.addEventListener("click", () => form.remove());
    form.append(submit, cancel, status);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const names = Array.from(form.querySelectorAll("[data-student]" )).map((input) => input.value.trim()).filter(Boolean);
      if (names.length < 2 || names.length > 3) { status.textContent = "Un groupe doit comporter 2 ou 3 élèves."; return; }
      submit.disabled = true;
      status.textContent = "Enregistrement…";
      const { error } = await db.rpc("register_campaign_group", { p_campaign_id: currentCampaign, p_class_code: currentClass, p_subject_id: subject.subject_id, p_student_names: names });
      if (error) {
        status.textContent = error.message.includes("unique") || error.message.includes("duplicate")
          ? "Ce sujet vient d'être réservé par un autre groupe. Actualisez la liste."
          : "Inscription impossible : " + error.message;
        submit.disabled = false;
        return;
      }
      status.textContent = "Inscription enregistrée.";
      await loadAvailability();
    });
    card.appendChild(form);
  }

  async function login(event) {
    event.preventDefault();
    const button = event.submitter;
    if (button) button.disabled = true;
    message("campaign-login-message", "Connexion…");
    const { error } = await db.auth.signInWithPassword({ email: $("campaign-email").value.trim(), password: $("campaign-password").value });
    if (error) message("campaign-login-message", "Connexion impossible : " + error.message);
    else { $("campaign-password").value = ""; message("campaign-login-message", ""); }
    if (button) button.disabled = false;
  }

  async function logout() {
    const { error } = await db.auth.signOut();
    if (error) message("campaign-admin-message", error.message);
  }

  async function updateTeacherView(session) {
    const logged = Boolean(session);
    $("campaign-login-area").hidden = logged;
    $("campaign-admin-area").hidden = !logged;
    if (logged) await loadAdminData();
    else {
      adminRecords = [];
      adminCampaigns = [];
      $("campaign-admin-campaigns").replaceChildren();
      $("campaign-admin-list").replaceChildren();
    }
  }

  async function loadAdminData() {
    message("campaign-admin-message", "Chargement de l'espace enseignant…");
    const [c, s, r] = await Promise.all([
      db.from("campaigns").select("id,title,subject,level,school_year,is_active,created_at").order("created_at", { ascending: false }),
      db.from("campaign_subjects").select("id,campaign_id,title,position").order("position"),
      db.from("campaign_registrations").select("id,campaign_id,class_code,subject_id,student_names,created_at").order("class_code").order("subject_id")
    ]);
    const error = c.error || s.error || r.error;
    if (error) { message("campaign-admin-message", "Chargement impossible : " + error.message); return; }
    adminCampaigns = c.data || [];
    adminSubjects = s.data || [];
    adminRecords = r.data || [];
    subjectTitles = new Map(adminSubjects.map((item) => [String(item.id), item.title]));
    campaignTitles = new Map(adminCampaigns.map((item) => [item.id, item.title]));
    renderAdminCampaigns();
    populateAdminFilter();
    await loadAdminRegistrations();
    message("campaign-admin-message", `${adminCampaigns.length} campagne(s), ${adminRecords.length} groupe(s) inscrit(s).`);
  }

  function renderAdminCampaigns() {
    const container = $("campaign-admin-campaigns");
    container.replaceChildren();
    adminCampaigns.forEach((campaign) => {
      const row = el("div", { className: "campaign-admin-campaign" });
      const info = el("div");
      info.appendChild(el("strong", {}, campaign.title));
      info.appendChild(el("p", {}, `${campaign.subject} · ${campaign.level} · ${campaign.school_year} · ${campaign.is_active ? "Inscriptions ouvertes" : "Archivée"}`));
      const actions = el("div", { className: "campaign-admin-actions" });
      const manage = el("button", { type: "button", className: "campaign-secondary" }, "Gérer les sujets");
      const toggle = el("button", { type: "button", className: campaign.is_active ? "campaign-secondary" : "" }, campaign.is_active ? "Archiver" : "Réactiver");
      manage.addEventListener("click", () => {
        const existing = row.nextElementSibling?.classList.contains("campaign-subject-manager") ? row.nextElementSibling : null;
        if (existing) { existing.remove(); manage.textContent = "Gérer les sujets"; return; }
        manage.textContent = "Masquer les sujets";
        row.after(buildSubjectManager(campaign));
      });
      toggle.addEventListener("click", async () => {
        const verb = campaign.is_active ? "archiver" : "réactiver";
        if (!window.confirm(`Confirmer : ${verb} la campagne « ${campaign.title} » ?`)) return;
        const { error } = await db.from("campaigns").update({ is_active: !campaign.is_active }).eq("id", campaign.id);
        if (error) message("campaign-admin-message", "Modification impossible : " + error.message);
        else await loadAdminData();
      });
      actions.append(manage, toggle);
      row.append(info, actions);
      container.appendChild(row);
    });
  }

  function buildSubjectManager(campaign) {
    const panel = el("section", { className: "campaign-subject-manager" });
    panel.appendChild(el("h4", {}, "Sujets de la campagne"));
    panel.appendChild(el("p", {}, "Modifie plusieurs intitulés puis applique-les en une seule fois. Les inscriptions existantes restent associées à leur sujet. Un sujet réservé ne peut pas être supprimé."));

    const addForm = el("form", { className: "campaign-add-subject" });
    const addInput = el("input", { type: "text", maxlength: "300", placeholder: "Intitulé du nouveau sujet", required: true });
    const addButton = el("button", { type: "submit" }, "Ajouter le sujet");
    addForm.append(addInput, addButton);
    addForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = addInput.value.trim();
      if (title.length < 2) { message("campaign-admin-message", "Le sujet doit contenir au moins 2 caractères."); return; }
      addButton.disabled = true;
      const positions = adminSubjects.filter((s) => s.campaign_id === campaign.id).map((s) => s.position || 0);
      const position = Math.max(0, ...positions) + 1;
      const { error } = await db.from("campaign_subjects").insert({ campaign_id: campaign.id, title, position });
      addButton.disabled = false;
      if (error) { message("campaign-admin-message", "Ajout impossible : " + error.message); return; }
      message("campaign-admin-message", "Sujet ajouté.");
      await loadAdminData();
    });
    panel.appendChild(addForm);

    const list = el("div", { className: "campaign-subject-manager-list" });
    const subjects = adminSubjects.filter((s) => s.campaign_id === campaign.id).sort((a, b) => a.position - b.position || a.id - b.id);
    const inputs = new Map();
    if (!subjects.length) list.appendChild(el("p", {}, "Aucun sujet dans cette campagne."));
    subjects.forEach((subject, index) => {
      const item = el("div", { className: "campaign-managed-subject" });
      const input = el("input", { type: "text", maxlength: "300", value: subject.title, "aria-label": "Intitulé du sujet" });
      inputs.set(String(subject.id), { input, subject });
      input.addEventListener("input", () => {
        input.classList.toggle("campaign-subject-modified", input.value.trim() !== subject.title);
      });

      const up = el("button", { type: "button", className: "campaign-secondary" }, "↑");
      up.title = "Monter le sujet";
      up.disabled = index === 0;
      up.addEventListener("click", () => {
        if (hasPendingSubjectEdits(inputs)) {
          message("campaign-admin-message", "Applique d'abord les modifications des intitulés avant de changer l'ordre.");
          return;
        }
        moveCampaignSubject(campaign, subject, subjects[index - 1]);
      });
      const down = el("button", { type: "button", className: "campaign-secondary" }, "↓");
      down.title = "Descendre le sujet";
      down.disabled = index === subjects.length - 1;
      down.addEventListener("click", () => {
        if (hasPendingSubjectEdits(inputs)) {
          message("campaign-admin-message", "Applique d'abord les modifications des intitulés avant de changer l'ordre.");
          return;
        }
        moveCampaignSubject(campaign, subject, subjects[index + 1]);
      });
      const remove = el("button", { type: "button", className: "campaign-secondary" }, "Supprimer");
      const used = adminRecords.some((r) => r.campaign_id === campaign.id && String(r.subject_id) === String(subject.id));
      remove.disabled = used;
      remove.title = used ? "Impossible : ce sujet possède déjà une inscription" : "Supprimer ce sujet";
      remove.addEventListener("click", async () => {
        if (hasPendingSubjectEdits(inputs)) {
          message("campaign-admin-message", "Applique d'abord les modifications des intitulés avant de supprimer un sujet.");
          return;
        }
        if (adminRecords.some((r) => r.campaign_id === campaign.id && String(r.subject_id) === String(subject.id))) {
          message("campaign-admin-message", "Suppression impossible : ce sujet est déjà réservé. Tu peux modifier son intitulé à la place."); return;
        }
        if (!window.confirm(`Supprimer le sujet « ${subject.title} » ?`)) return;
        const { error } = await db.from("campaign_subjects").delete().eq("id", subject.id).eq("campaign_id", campaign.id);
        if (error) message("campaign-admin-message", "Suppression impossible : " + error.message);
        else { message("campaign-admin-message", "Sujet supprimé."); await loadAdminData(); }
      });
      item.append(input, up, down, remove);
      list.appendChild(item);
    });
    panel.appendChild(list);

    const apply = el("button", { type: "button" }, "Appliquer les modifications");
    apply.addEventListener("click", async () => {
      const changes = [...inputs.values()]
        .map(({ input, subject }) => ({ input, subject, title: input.value.trim() }))
        .filter(({ title, subject }) => title !== subject.title);

      if (!changes.length) {
        message("campaign-admin-message", "Aucune modification à appliquer.");
        return;
      }
      const invalid = changes.find(({ title }) => title.length < 2);
      if (invalid) {
        invalid.input.focus();
        message("campaign-admin-message", "Chaque intitulé modifié doit contenir au moins 2 caractères.");
        return;
      }
      if (!window.confirm(`Appliquer les ${changes.length} modification(s) d'intitulé ? Les inscriptions existantes seront conservées.`)) return;

      apply.disabled = true;
      const results = await Promise.all(changes.map(({ subject, title }) =>
        db.from("campaign_subjects")
          .update({ title })
          .eq("id", subject.id)
          .eq("campaign_id", campaign.id)
      ));
      const errors = results.filter((result) => result.error);
      await loadAdminData();
      if (errors.length) {
        message("campaign-admin-message", `${changes.length - errors.length} modification(s) enregistrée(s), ${errors.length} échec(s). Détail : ${errors[0].error.message}`);
      } else {
        message("campaign-admin-message", `${changes.length} intitulé(s) modifié(s).`);
      }
    });
    panel.appendChild(apply);
    return panel;
  }

  function hasPendingSubjectEdits(inputs) {
    return [...inputs.values()].some(({ input, subject }) => input.value.trim() !== subject.title);
  }

  async function moveCampaignSubject(campaign, subject, neighbor) {
    if (!neighbor) return;
    const temporary = Math.min(0, ...adminSubjects.filter((s) => s.campaign_id === campaign.id).map((s) => s.position || 0)) - 1;
    const first = await db.from("campaign_subjects").update({ position: temporary }).eq("id", subject.id).eq("campaign_id", campaign.id);
    if (first.error) { message("campaign-admin-message", "Déplacement impossible : " + first.error.message); return; }
    const second = await db.from("campaign_subjects").update({ position: subject.position }).eq("id", neighbor.id).eq("campaign_id", campaign.id);
    if (second.error) {
      await db.from("campaign_subjects").update({ position: subject.position }).eq("id", subject.id);
      message("campaign-admin-message", "Déplacement incomplet : " + second.error.message); return;
    }
    const third = await db.from("campaign_subjects").update({ position: neighbor.position }).eq("id", subject.id).eq("campaign_id", campaign.id);
    if (third.error) { message("campaign-admin-message", "Déplacement incomplet : " + third.error.message); }
    else message("campaign-admin-message", "Ordre des sujets modifié.");
    await loadAdminData();
  }

  function populateAdminFilter() {
    const select = $("campaign-admin-filter");
    const previous = select.value;
    select.replaceChildren();
    addOption(select, "", "Toutes les campagnes");
    adminCampaigns.forEach((c) => addOption(select, c.id, c.title));
    if (adminCampaigns.some((c) => c.id === previous)) select.value = previous;
    const classSelect = $("campaign-admin-class-filter");
    const previousClass = classSelect.value;
    classSelect.replaceChildren();
    addOption(classSelect, "", "Toutes les classes / demi-groupes");
    CLASSES.forEach((name) => addOption(classSelect, name, name));
    if (CLASSES.includes(previousClass)) classSelect.value = previousClass;
  }

  async function loadAdminRegistrations() {
    const selectedCampaign = $("campaign-admin-filter").value;
    const list = $("campaign-admin-list");
    list.replaceChildren();
    let records = adminRecords.filter((r) => !selectedCampaign || r.campaign_id === selectedCampaign);
    const selectedClass = $("campaign-admin-class-filter").value;
    if (selectedClass) records = records.filter((r) => r.class_code === selectedClass);
    if (!records.length) { message("campaign-admin-message", "Aucune inscription pour cette sélection."); return; }
    message("campaign-admin-message", `${records.length} groupe(s) affiché(s).`);
    records.forEach((record) => {
      const article = el("article", { className: "campaign-admin-record" });
      article.appendChild(el("h4", {}, `${campaignTitles.get(record.campaign_id) || "Campagne"} — ${record.class_code} — ${subjectTitles.get(String(record.subject_id)) || "Sujet"}`));
      const fields = el("div");
      const inputs = [];
      (record.student_names || []).forEach((name, index) => {
        const label = el("label", {}, `Élève ${index + 1}`);
        const input = el("input", { type: "text", maxlength: "100", value: name });
        inputs.push(input);
        label.appendChild(input);
        fields.appendChild(label);
      });
      const actions = el("div", { className: "campaign-admin-actions" });
      const save = el("button", { type: "button" }, "Enregistrer les noms");
      save.addEventListener("click", async () => {
        const names = inputs.map((input) => input.value.trim());
        if (names.some((name) => !name)) { message("campaign-admin-message", "Tous les noms doivent être renseignés."); return; }
        if (names.every((name, i) => name === record.student_names[i])) { message("campaign-admin-message", "Aucune modification détectée."); return; }
        if (!window.confirm("Confirmer la modification des noms de ce groupe ?")) return;
        save.disabled = true;
        const { error } = await db.from("campaign_registrations").update({ student_names: names }).eq("id", record.id);
        save.disabled = false;
        if (error) message("campaign-admin-message", "Modification impossible : " + error.message);
        else await loadAdminData();
      });
      const remove = el("button", { type: "button", className: "campaign-secondary" }, "Supprimer");
      remove.addEventListener("click", async () => {
        if (!window.confirm("Supprimer cette inscription ?")) return;
        const { error } = await db.from("campaign_registrations").delete().eq("id", record.id);
        if (error) message("campaign-admin-message", "Suppression impossible : " + error.message);
        else await loadAdminData();
      });
      actions.append(save, remove);
      article.append(fields, actions);
      list.appendChild(article);
    });
  }

  async function createCampaign(event) {
    event.preventDefault();
    const submit = $("campaign-create-submit");
    const title = $("new-campaign-title").value.trim();
    const subject = $("new-campaign-subject").value.trim();
    const level = $("new-campaign-level").value.trim();
    const year = $("new-campaign-year").value.trim();
    const classes = Array.from(document.querySelectorAll("[data-campaign-class]:checked")).map((input) => input.value);
    const subjects = $("new-campaign-topics").value.split("\n").map((line) => line.trim()).filter(Boolean);
    if (title.length < 3 || !classes.length || !subjects.length) {
      message("campaign-create-message", "Renseigne un titre, au moins une classe et au moins un sujet."); return;
    }
    if (subjects.length > 100) { message("campaign-create-message", "Limite : 100 sujets par campagne."); return; }
    submit.disabled = true;
    message("campaign-create-message", "Création de la campagne…");
    const { data: campaign, error } = await db.from("campaigns").insert({ title, subject, level, school_year: year }).select("id").single();
    if (error) {
      message("campaign-create-message", "Création impossible : " + error.message);
      submit.disabled = false; return;
    }
    const classRows = classes.map((class_code) => ({ campaign_id: campaign.id, class_code }));
    const topicRows = subjects.map((topic, index) => ({ campaign_id: campaign.id, title: topic, position: index + 1 }));
    const classResult = await db.from("campaign_classes").insert(classRows);
    const topicResult = classResult.error ? { error: classResult.error } : await db.from("campaign_subjects").insert(topicRows);
    if (topicResult.error) {
      await db.from("campaigns").delete().eq("id", campaign.id);
      message("campaign-create-message", "La campagne n'a pas pu être entièrement créée : " + topicResult.error.message + ". Aucune campagne incomplète n'a été conservée.");
    } else {
      $("campaign-create-form").reset();
      message("campaign-create-message", "Campagne créée. Elle est maintenant accessible aux élèves.");
      await loadAdminData();
      await loadPublicCampaigns();
    }
    submit.disabled = false;
  }

  function exportCsv() {
    const campaign = $("campaign-admin-filter").value;
    const classCode = $("campaign-admin-class-filter").value;
    const records = adminRecords.filter((r) => (!campaign || r.campaign_id === campaign) && (!classCode || r.class_code === classCode));
    if (!records.length) { message("campaign-admin-message", "Aucune inscription à exporter pour cette sélection."); return; }
    const headers = ["Campagne", "Matière", "Niveau", "Année", "Classe", "Sujet", "Élève 1", "Élève 2", "Élève 3", "Date d'inscription"];
    const rows = records.map((r) => {
      const c = adminCampaigns.find((item) => item.id === r.campaign_id) || {};
      const names = r.student_names || [];
      return [c.title || "", c.subject || "", c.level || "", c.school_year || "", r.class_code, subjectTitles.get(String(r.subject_id)) || "", names[0] || "", names[1] || "", names[2] || "", r.created_at ? new Date(r.created_at).toLocaleString("fr-FR") : ""];
    });
    const quote = (v) => '"' + String(v ?? "").replace(/"/g, '""') + '"';
    const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(quote).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = el("a", { href: url, download: "inscriptions_campagnes_" + new Date().toISOString().slice(0, 10) + ".csv" });
    document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    message("campaign-admin-message", `${records.length} inscription(s) exportée(s).`);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (window.document$?.subscribe) window.document$.subscribe(init);
})();
