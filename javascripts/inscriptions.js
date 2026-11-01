(() => {
  "use strict";

  // Clé publique Supabase : elle peut être utilisée dans le navigateur.
  // Ne jamais placer ici une clé sb_secret_ ou service_role.
  const SUPABASE_URL = "https://vqrsqayfltaycicidoxf.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ul2DC51IHC42UIR91f5URQ_Pdr5RR4L";

  const CLASSES = [
    "2nde 1 - P1", "2nde 1 - P2",
    "2nde 2 - P1", "2nde 2 - P2",
    "2nde 4 - P1", "2nde 4 - P2",
    "2nde 7 - P1", "2nde 7 - P2",
    "2nde 10 - P1", "2nde 10 - P2",
    "2nde 11 - P1", "2nde 11 - P2",
    "2nde 12 - P1", "2nde 12 - P2"
  ];

  const SUBJECTS = [
    "Les réseaux pair-à-pair : intérêts et utilisations illicites",
    "Internet : quel impact écologique sur la planète ?",
    "Internet : les enjeux et les coûts des câbles sous-marins",
    "Internet : les conséquences sur les activités humaines",
    "Métier : administrateur réseau",
    "Métier : technicien télécoms et réseaux",
    "Les attaques informatiques : déni de service et hameçonnage",
    "Les attaques informatiques : rançongiciel et bombardement de mails",
    "Les attaques informatiques : Man in the Middle et logiciels malveillants",
    "Internet en 2050 : évolutions et nouveaux usages",
    "La naissance d'Internet : d'ARPANET au réseau mondial"
  ];

  let client;
  let currentClass = "";
  let availabilityRequest = 0;
  let adminRecords = [];

  const byId = (id) => document.getElementById(id);
  const setMessage = (id, message) => {
    const el = byId(id);
    if (el) el.textContent = message || "";
  };

  function addOption(select, value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  }

  function initPage() {
    const root = byId("exposes-app");
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";

    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      setMessage("exposes-public-message", "La bibliothèque Supabase n'a pas été chargée. Vérifiez mkdocs.yml.");
      return;
    }

    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

    const classSelect = byId("exposes-class");
    classSelect.innerHTML = "";
    addOption(classSelect, "", "Choisir une classe…");
    CLASSES.forEach((name) => addOption(classSelect, name, name));

    const adminFilter = byId("exposes-admin-filter");
    CLASSES.forEach((name) => addOption(adminFilter, name, name));

    classSelect.addEventListener("change", () => {
      currentClass = classSelect.value;
      loadAvailability();
    });

    byId("exposes-login-form").addEventListener("submit", loginTeacher);
    byId("exposes-logout").addEventListener("click", logoutTeacher);
    adminFilter.addEventListener("change", loadAdminRegistrations);
    byId("exposes-export-csv").addEventListener("click", exportAdminCsv);

    client.auth.getSession().then(({ data, error }) => {
      if (error) setMessage("exposes-login-message", error.message);
      updateTeacherView(data?.session || null);
    });

    client.auth.onAuthStateChange((_event, session) => {
      updateTeacherView(session);
    });
  }

  async function loadAvailability() {
    const container = byId("exposes-subjects");
    container.replaceChildren();
    setMessage("exposes-counter", "");

    if (!currentClass) {
      setMessage("exposes-public-message", "Choisissez votre classe et votre demi-groupe.");
      return;
    }

    const requestNumber = ++availabilityRequest;
    setMessage("exposes-public-message", "Chargement des sujets…");

    const { data, error } = await client.rpc("subject_availability", {
      p_class_code: currentClass
    });

    if (requestNumber !== availabilityRequest) return;
    if (error) {
      setMessage("exposes-public-message", "Impossible de charger les sujets : " + error.message);
      return;
    }

    const subjects = data || [];
    const reservedCount = subjects.filter((subject) => subject.reserved).length;
    const availableCount = subjects.length - reservedCount;
    setMessage("exposes-counter", availableCount + " sujet(s) disponible(s) sur " + subjects.length + " — " + reservedCount + " réservé(s).");
    setMessage("exposes-public-message", "Sélection : " + currentClass + ". Les noms des élèves ne sont pas affichés.");
    subjects.forEach((subject) => {
      const card = document.createElement("article");
      card.className = "exposes-subject";

      const title = document.createElement("h3");
      title.textContent = subject.subject_id + ". " + subject.title;

      const right = document.createElement("div");
      const status = document.createElement("span");
      status.className = "exposes-status " + (subject.reserved ? "reserved" : "available");
      status.textContent = subject.reserved ? "Réservé" : "Disponible";
      right.appendChild(status);

      if (!subject.reserved) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Inscrire mon groupe";
        button.addEventListener("click", () => showRegistrationForm(card, subject));
        right.appendChild(button);
      }

      card.append(title, right);
      container.appendChild(card);
    });
  }

  function showRegistrationForm(card, subject) {
    if (card.querySelector(".exposes-register-form")) return;

    const form = document.createElement("form");
    form.className = "exposes-register-form";
    const heading = document.createElement("p");
    heading.textContent = "Inscription — " + subject.title;
    form.appendChild(heading);

    for (let i = 1; i <= 3; i++) {
      const label = document.createElement("label");
      label.textContent = "Nom et prénom de l'élève " + i + (i < 3 ? " (obligatoire)" : " (facultatif)");
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 100;
      input.autocomplete = "off";
      input.required = i <= 2;
      input.dataset.student = "true";
      input.placeholder = "Nom Prénom";
      form.append(label, input);
    }

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Valider l'inscription";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "exposes-secondary";
    cancel.textContent = "Annuler";
    cancel.addEventListener("click", () => form.remove());

    const message = document.createElement("p");
    message.className = "exposes-message";
    message.setAttribute("aria-live", "polite");
    form.append(submit, cancel, message);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const names = Array.from(form.querySelectorAll("[data-student]"))
        .map((input) => input.value.trim())
        .filter(Boolean);

      if (names.length < 2 || names.length > 3) {
        message.textContent = "Un groupe doit comporter 2 ou 3 élèves.";
        return;
      }

      submit.disabled = true;
      message.textContent = "Enregistrement…";

      const { error } = await client.rpc("register_group", {
        p_class_code: currentClass,
        p_subject_id: subject.subject_id,
        p_student_names: names
      });

      if (error) {
        message.textContent = error.message.includes("duplicate")
          ? "Ce sujet vient d'être réservé par un autre groupe. Actualisez la liste."
          : "Inscription impossible : " + error.message;
        submit.disabled = false;
        return;
      }

      message.textContent = "Inscription enregistrée.";
      await loadAvailability();
    });

    card.appendChild(form);
  }

  async function loginTeacher(event) {
    event.preventDefault();
    const button = event.submitter;
    if (button) button.disabled = true;
    setMessage("exposes-login-message", "Connexion…");

    const email = byId("exposes-email").value.trim();
    const password = byId("exposes-password").value;
    const { error } = await client.auth.signInWithPassword({ email, password });

    if (error) setMessage("exposes-login-message", "Connexion impossible : " + error.message);
    else {
      byId("exposes-password").value = "";
      setMessage("exposes-login-message", "");
    }
    if (button) button.disabled = false;
  }

  async function logoutTeacher() {
    const { error } = await client.auth.signOut();
    if (error) setMessage("exposes-admin-message", error.message);
  }

  async function updateTeacherView(session) {
    const isLoggedIn = Boolean(session);
    byId("exposes-login-area").hidden = isLoggedIn;
    byId("exposes-admin-area").hidden = !isLoggedIn;
    if (isLoggedIn) await loadAdminRegistrations();
    else {
      adminRecords = [];
      byId("exposes-admin-list").replaceChildren();
    }
  }

  async function loadAdminRegistrations() {
    const list = byId("exposes-admin-list");
    list.replaceChildren();
    adminRecords = [];
    setMessage("exposes-admin-message", "Chargement des inscriptions…");

    const filter = byId("exposes-admin-filter").value;
    let query = client.from("registrations")
      .select("id, class_code, subject_id, student_names, created_at")
      .order("class_code")
      .order("subject_id");

    if (filter) query = query.eq("class_code", filter);

    const { data, error } = await query;
    if (error) {
      setMessage("exposes-admin-message", "Impossible de charger les inscriptions : " + error.message);
      return;
    }

    adminRecords = data || [];
    if (adminRecords.length === 0) {
      setMessage("exposes-admin-message", "Aucune inscription pour cette sélection.");
      return;
    }

    setMessage("exposes-admin-message", adminRecords.length + " groupe(s) inscrit(s).");

    adminRecords.forEach((record) => {
      const article = document.createElement("article");
      article.className = "exposes-admin-record";

      const heading = document.createElement("h4");
      heading.textContent = record.class_code + " — Sujet " + record.subject_id + " : " + SUBJECTS[record.subject_id - 1];

      const names = document.createElement("div");
      const inputs = [];
      (record.student_names || []).forEach((name, index) => {
        const label = document.createElement("label");
        label.textContent = "Élève " + (index + 1);
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 100;
        input.value = name;
        inputs.push(input);
        names.append(label, input);
      });

      const actions = document.createElement("div");
      actions.className = "exposes-actions";

      const save = document.createElement("button");
      save.type = "button";
      save.textContent = "Enregistrer les noms";
      save.addEventListener("click", async () => {
        const updatedNames = inputs.map((input) => input.value.trim());
        if (updatedNames.some((name) => !name)) {
          setMessage("exposes-admin-message", "Tous les noms doivent être renseignés.");
          return;
        }
        if (updatedNames.every((name, index) => name === (record.student_names || [])[index])) {
          setMessage("exposes-admin-message", "Aucune modification détectée.");
          return;
        }
        if (!window.confirm("Confirmer la modification des noms de ce groupe ?")) return;
        save.disabled = true;
        const { error: updateError } = await client.from("registrations")
          .update({ student_names: updatedNames })
          .eq("id", record.id);
        save.disabled = false;
        setMessage("exposes-admin-message", updateError
          ? "Modification impossible : " + updateError.message
          : "Noms mis à jour.");
        if (!updateError) await loadAdminRegistrations();
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "exposes-secondary";
      remove.textContent = "Supprimer l'inscription";
      remove.addEventListener("click", async () => {
        if (!window.confirm("Supprimer cette inscription ?")) return;
        const { error: deleteError } = await client.from("registrations")
          .delete()
          .eq("id", record.id);
        setMessage("exposes-admin-message", deleteError
          ? "Suppression impossible : " + deleteError.message
          : "Inscription supprimée.");
        if (!deleteError) {
          await loadAdminRegistrations();
          await loadAvailability();
        }
      });

      actions.append(save, remove);
      article.append(heading, names, actions);
      list.appendChild(article);
    });
  }

  function exportAdminCsv() {
    if (!adminRecords.length) {
      setMessage("exposes-admin-message", "Aucune inscription à exporter pour cette sélection.");
      return;
    }

    const headers = ["Classe", "Sujet n°", "Sujet", "Élève 1", "Élève 2", "Élève 3", "Date d'inscription"];
    const rows = adminRecords.map((record) => {
      const names = record.student_names || [];
      return [
        record.class_code,
        record.subject_id,
        SUBJECTS[record.subject_id - 1] || "Sujet " + record.subject_id,
        names[0] || "",
        names[1] || "",
        names[2] || "",
        record.created_at ? new Date(record.created_at).toLocaleString("fr-FR") : ""
      ];
    });

    const escapeCsv = (value) => '"' + String(value ?? "").replace(/"/g, '""') + '"';
    const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(escapeCsv).join(";")).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    const filter = byId("exposes-admin-filter").value;
    link.href = url;
    link.download = "inscriptions_exposes_" + (filter ? filter.replace(/[^a-z0-9]+/gi, "_") + "_" : "toutes_") + date + ".csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("exposes-admin-message", "Export CSV préparé (" + adminRecords.length + " inscription(s)).");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }

  // Compatibilité avec la navigation instantanée de MkDocs Material.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initPage);
  }
})();
