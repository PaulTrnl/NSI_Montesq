# Inscriptions aux exposés et projets

Cette page permet de choisir une campagne, puis une classe et un demi-groupe pour consulter les sujets disponibles et inscrire un groupe de 2 ou 3 élèves.

<div id="campaign-app">
  <section class="campaign-panel">
    <h2>Inscription des élèves</h2>
    <label for="campaign-select"><strong>Campagne</strong></label>
    <select id="campaign-select"><option value="">Chargement…</option></select>
    <label for="campaign-class"><strong>Classe et demi-groupe</strong></label>
    <select id="campaign-class"><option value="">Choisir une campagne d'abord…</option></select>
    <p id="campaign-public-message" class="campaign-message" aria-live="polite"></p>
    <p id="campaign-counter" class="campaign-counter" aria-live="polite"></p>
    <div id="campaign-subjects" class="campaign-subjects"></div>
  </section>

  <details class="campaign-teacher">
    <summary><strong>Espace enseignant</strong></summary>
    <div id="campaign-login-area">
      <p>Connectez-vous avec votre compte enseignant.</p>
      <form id="campaign-login-form">
        <label for="campaign-email">Adresse e-mail</label>
        <input id="campaign-email" type="email" autocomplete="username" required>
        <label for="campaign-password">Mot de passe</label>
        <input id="campaign-password" type="password" autocomplete="current-password" required>
        <button type="submit">Se connecter</button>
      </form>
      <p id="campaign-login-message" class="campaign-message" aria-live="polite"></p>
    </div>

    <div id="campaign-admin-area" hidden>
      <div class="campaign-admin-heading">
        <p>Les noms des élèves sont visibles uniquement dans cet espace enseignant.</p>
        <button id="campaign-logout" type="button" class="campaign-secondary">Se déconnecter</button>
      </div>

      <details class="campaign-create">
        <summary><strong>Créer une campagne</strong></summary>
        <form id="campaign-create-form">
          <label for="new-campaign-title">Titre de la campagne</label>
          <input id="new-campaign-title" type="text" maxlength="160" placeholder="Ex. : Exposés sur l'intelligence artificielle" required>
          <label for="new-campaign-subject">Matière</label>
          <input id="new-campaign-subject" type="text" maxlength="80" placeholder="Ex. : SNT, NSI…">
          <label for="new-campaign-level">Niveau</label>
          <input id="new-campaign-level" type="text" maxlength="80" placeholder="Ex. : Seconde, Première…">
          <label for="new-campaign-year">Année scolaire</label>
          <input id="new-campaign-year" type="text" maxlength="20" placeholder="Ex. : 2026-2027">
          <fieldset>
            <legend><strong>Classes et demi-groupes concernés</strong></legend>
            <div class="campaign-class-grid">
              <label><input type="checkbox" data-campaign-class value="2nde 1 - P1"> 2nde 1 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 1 - P2"> 2nde 1 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 2 - P1"> 2nde 2 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 2 - P2"> 2nde 2 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 4 - P1"> 2nde 4 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 4 - P2"> 2nde 4 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 7 - P1"> 2nde 7 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 7 - P2"> 2nde 7 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 10 - P1"> 2nde 10 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 10 - P2"> 2nde 10 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 11 - P1"> 2nde 11 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 11 - P2"> 2nde 11 - P2</label>
              <label><input type="checkbox" data-campaign-class value="2nde 12 - P1"> 2nde 12 - P1</label>
              <label><input type="checkbox" data-campaign-class value="2nde 12 - P2"> 2nde 12 - P2</label>
            </div>
          </fieldset>
          <label for="new-campaign-topics">Sujets (un sujet par ligne)</label>
          <textarea id="new-campaign-topics" rows="8" placeholder="Sujet 1&#10;Sujet 2&#10;Sujet 3" required></textarea>
          <button id="campaign-create-submit" type="submit">Créer la campagne</button>
          <p id="campaign-create-message" class="campaign-message" aria-live="polite"></p>
        </form>
      </details>

      <h3>Campagnes existantes</h3>
      <div id="campaign-admin-campaigns"></div>

      <h3>Inscriptions</h3>
      <label for="campaign-admin-filter"><strong>Filtrer par campagne</strong></label>
      <select id="campaign-admin-filter"><option value="">Toutes les campagnes</option></select>
      <label for="campaign-admin-class-filter"><strong>Filtrer par classe / demi-groupe</strong></label>
      <select id="campaign-admin-class-filter"><option value="">Toutes les classes / demi-groupes</option></select>
      <button id="campaign-export" type="button">Exporter les inscriptions affichées (CSV)</button>
      <div id="campaign-admin-list"></div>
      <p id="campaign-admin-message" class="campaign-message" aria-live="polite"></p>
    </div>
  </details>
</div>

<style>
#campaign-app { max-width: 950px; }
#campaign-app .campaign-panel, #campaign-app .campaign-teacher, #campaign-app .campaign-create {
  border: 1px solid var(--md-default-fg-color--lightest); border-radius: 10px;
  padding: 1rem; margin: 1rem 0;
}
#campaign-app label { display: block; margin: .65rem 0 .3rem; }
#campaign-app input:not([type="checkbox"]), #campaign-app select, #campaign-app textarea {
  box-sizing: border-box; width: 100%; max-width: 100%; padding: .65rem;
  border: 1px solid var(--md-default-fg-color--light); border-radius: 6px;
  background: var(--md-default-bg-color); color: var(--md-default-fg-color);
}
#campaign-app input[type="checkbox"] { width: auto; }
#campaign-app button {
  border: 0; border-radius: 6px; padding: .6rem .9rem;
  background: var(--md-primary-fg-color); color: white; cursor: pointer; margin: .6rem .35rem .2rem 0;
}
#campaign-app button:disabled { opacity: .55; cursor: not-allowed; }
#campaign-app button.campaign-secondary { background: var(--md-default-fg-color--light); color: var(--md-default-bg-color); }
#campaign-app .campaign-subjects {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: auto;
  gap: .7rem;
  margin-top: 1rem;
  align-items: start;
}
#campaign-app .campaign-subject-card, #campaign-app .campaign-admin-campaign, #campaign-app .campaign-admin-record {
  border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; padding: .8rem;
}
#campaign-app .campaign-subject-card {
  box-sizing: border-box;
  width: 100%;
  min-height: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: .65rem;
}
#campaign-app .campaign-subject-card h3 {
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  overflow-wrap: anywhere;
}
#campaign-app .campaign-subject-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: auto;
}
#campaign-app .campaign-status { font-size: .85rem; white-space: nowrap; }
#campaign-app .campaign-status.available { color: #16834a; }
#campaign-app .campaign-status.reserved { color: var(--md-default-fg-color--light); }
#campaign-app .campaign-register-form { flex-basis: 100%; margin-top: .8rem; padding: .8rem; border-radius: 8px; background: var(--md-code-bg-color); }
#campaign-app .campaign-message { min-height: 1.2em; }
#campaign-app .campaign-counter { font-weight: 600; margin: .5rem 0; }
#campaign-app .campaign-admin-heading, #campaign-app .campaign-admin-campaign { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
#campaign-app .campaign-admin-campaign { margin: .5rem 0; }
#campaign-app .campaign-admin-campaign p { margin: .2rem 0; }
#campaign-app .campaign-admin-record { margin: .7rem 0; }
#campaign-app .campaign-subject-manager { border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; padding: .8rem; margin: .3rem 0 1rem; }
#campaign-app .campaign-subject-manager h4 { margin-top: 0; }
#campaign-app .campaign-add-subject { display: flex; align-items: center; gap: .5rem; }
#campaign-app .campaign-add-subject input { flex: 1; }
#campaign-app .campaign-managed-subject { display: grid; grid-template-columns: minmax(150px, 1fr) auto auto auto auto; align-items: center; gap: .3rem; padding: .35rem 0; border-top: 1px solid var(--md-default-fg-color--lightest); }
#campaign-app .campaign-managed-subject button { margin: .2rem 0; }
#campaign-app .campaign-managed-subject button:disabled { opacity: .35; }
@media (max-width: 700px) { #campaign-app .campaign-add-subject, #campaign-app .campaign-managed-subject { display: flex; flex-wrap: wrap; } #campaign-app .campaign-managed-subject input { flex-basis: 100%; } }
#campaign-app .campaign-admin-record h4 { margin: .2rem 0 .7rem; }
#campaign-app .campaign-admin-actions { display: flex; gap: .4rem; flex-wrap: wrap; }
#campaign-app fieldset { border: 1px solid var(--md-default-fg-color--lightest); border-radius: 8px; margin: .8rem 0; }
#campaign-app .campaign-class-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .2rem 1rem; }
#campaign-app .campaign-class-grid label { margin: .2rem 0; }
#campaign-app [hidden] { display: none !important; }
@media (max-width: 600px) {
  #campaign-app .campaign-admin-heading, #campaign-app .campaign-admin-campaign { align-items: flex-start; flex-direction: column; }
  #campaign-app .campaign-class-grid { grid-template-columns: 1fr; }
}
</style>
