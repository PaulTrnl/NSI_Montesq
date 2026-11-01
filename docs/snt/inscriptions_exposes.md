# Inscription aux exposés — Thème 1 : Internet

Choisissez votre classe et votre demi-groupe pour consulter les sujets disponibles et inscrire votre groupe.

<div id="exposes-app">
  <section class="exposes-panel">
    <label for="exposes-class"><strong>Classe et demi-groupe</strong></label>
    <select id="exposes-class">
      <option value="">Chargement…</option>
    </select>
    <p id="exposes-public-message" class="exposes-message" aria-live="polite"></p>
    <p id="exposes-counter" class="exposes-counter" aria-live="polite"></p>
    <div id="exposes-subjects" class="exposes-subjects"></div>
  </section>

  <details class="exposes-teacher">
    <summary><strong>Espace enseignant</strong></summary>
    <div id="exposes-login-area">
      <p>Connectez-vous avec votre compte enseignant.</p>
      <form id="exposes-login-form">
        <label for="exposes-email">Adresse e-mail</label>
        <input id="exposes-email" type="email" autocomplete="username" required>
        <label for="exposes-password">Mot de passe</label>
        <input id="exposes-password" type="password" autocomplete="current-password" required>
        <button type="submit">Se connecter</button>
      </form>
      <p id="exposes-login-message" class="exposes-message" aria-live="polite"></p>
    </div>

    <div id="exposes-admin-area" hidden>
      <div class="exposes-admin-heading">
        <p>Inscriptions enregistrées. Les noms ne sont visibles que dans cet espace connecté.</p>
        <button id="exposes-logout" type="button" class="exposes-secondary">Se déconnecter</button>
      </div>
      <label for="exposes-admin-filter"><strong>Filtrer par demi-groupe</strong></label>
      <select id="exposes-admin-filter">
        <option value="">Toutes les classes</option>
      </select>
      <button id="exposes-export-csv" type="button">Exporter les inscriptions affichées (CSV)</button>
      <div id="exposes-admin-list"></div>
      <p id="exposes-admin-message" class="exposes-message" aria-live="polite"></p>
    </div>
  </details>
</div>

<style>
#exposes-app { max-width: 950px; }
#exposes-app .exposes-panel, #exposes-app .exposes-teacher {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 10px; padding: 1rem; margin: 1rem 0;
}
#exposes-app label { display: block; margin: .7rem 0 .3rem; }
#exposes-app input, #exposes-app select {
  box-sizing: border-box; width: 100%; max-width: 100%;
  padding: .65rem; border: 1px solid var(--md-default-fg-color--light);
  border-radius: 6px; background: var(--md-default-bg-color);
  color: var(--md-default-fg-color);
}
#exposes-app button {
  border: 0; border-radius: 6px; padding: .6rem .9rem;
  background: var(--md-primary-fg-color); color: white;
  cursor: pointer; margin-top: .6rem;
}
#exposes-app button:disabled { opacity: .55; cursor: not-allowed; }
#exposes-app button.exposes-secondary {
  background: var(--md-default-fg-color--light);
  color: var(--md-default-bg-color);
}
#exposes-app .exposes-subjects { display: grid; gap: .7rem; margin-top: 1rem; }
#exposes-app .exposes-subject {
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 8px; padding: .8rem;
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
#exposes-app .exposes-subject h3 { font-size: 1rem; margin: 0; }
#exposes-app .exposes-status { font-size: .82rem; white-space: nowrap; }
#exposes-app .exposes-status.available { color: #16834a; }
#exposes-app .exposes-status.reserved { color: var(--md-default-fg-color--light); }
#exposes-app .exposes-register-form {
  margin-top: .8rem; padding: .8rem; border-radius: 8px;
  background: var(--md-code-bg-color);
}
#exposes-app .exposes-message { min-height: 1.2em; }
#exposes-app .exposes-counter { font-weight: 600; margin: .5rem 0; }
#exposes-app .exposes-admin-heading {
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
#exposes-app .exposes-admin-record {
  border-top: 1px solid var(--md-default-fg-color--lightest);
  padding: .8rem 0;
}
#exposes-app .exposes-admin-record h4 { margin: .2rem 0 .5rem; }
#exposes-app .exposes-admin-record .exposes-actions { display: flex; gap: .5rem; flex-wrap: wrap; }
#exposes-app [hidden] { display: none !important; }
@media (max-width: 600px) {
  #exposes-app .exposes-subject { align-items: flex-start; flex-direction: column; }
  #exposes-app .exposes-admin-heading { align-items: flex-start; flex-direction: column; }
}
</style>
