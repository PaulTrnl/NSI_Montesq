<link rel="stylesheet" href="style.css">

<div class="mur-nsi">

    <!-- =====================================================
         CONFIGURATION
         ===================================================== -->

    <section id="configuration" class="jeu-ecran">

        <div class="jeu-header">

            <h1>Le Mur NSI</h1>

            <p>
                Préparez votre partie de révision
            </p>

        </div>

        <div class="jeu-contenu">

            <div class="jeu-configuration">

                <!-- =========================
                     NOMBRE D'ÉQUIPES
                     ========================= -->

                <h2>Nombre d'équipes</h2>

                <div class="jeu-compteur">

                    <button
                        id="moins"
                        class="jeu-bouton-compteur"
                        type="button">
                        −
                    </button>

                    <span id="nombre-equipes">4</span>

                    <button
                        id="plus"
                        class="jeu-bouton-compteur"
                        type="button">
                        +
                    </button>

                </div>


                <!-- =========================
                     THÈMES
                     ========================= -->

                <div class="jeu-selection-themes">

                    <h2>Choisissez les thèmes</h2>

                    <p>
                        Sélectionnez au moins autant de thèmes
                        que d'équipes.
                    </p>

                    <p
                        id="compteur-themes"
                        class="jeu-compteur-themes">
                        0 thème sélectionné
                    </p>

                    <div
                        id="liste-themes-configuration"
                        class="jeu-themes-configuration">
                    </div>

                </div>


                <button
                    id="commencer-noms"
                    class="jeu-bouton-principal"
                    type="button"
                    disabled>

                    Continuer

                </button>

            </div>

        </div>

    </section>


    <!-- =====================================================
         NOMS DES ÉQUIPES
         ===================================================== -->

    <section
        id="noms-equipes"
        class="jeu-ecran jeu-cache">

        <div class="jeu-header">

     

            <h1>Le Mur NSI</h1>

            <p>
                Donnez un nom à chaque équipe
            </p>

        </div>

        <div class="jeu-contenu">

            <div
                id="formulaire-equipes"
                class="jeu-formulaire-equipes">
            </div>

            <div class="jeu-actions">

                <button
                    id="valider-noms"
                    class="jeu-bouton-principal"
                    type="button">

                    Choisir les spécialités

                </button>

            </div>

        </div>

    </section>


    <!-- =====================================================
         CHOIX DES SPÉCIALITÉS
         ===================================================== -->

    <section
        id="selection"
        class="jeu-ecran jeu-cache">

        <div class="jeu-header">

      

            <h1>Le Mur NSI</h1>

            <p id="instruction-selection">
                Choisissez votre spécialité
            </p>

        </div>

        <div class="jeu-contenu">

            <div
                id="grille-themes"
                class="jeu-grille">
            </div>

            <div class="jeu-progression">

                <div id="texte-progression">
                    Équipe 1 sur 4
                </div>

                <div class="jeu-barre">

                    <div
                        id="progression"
                        class="jeu-progression-interne">
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- =====================================================
         RÉCAPITULATIF
         ===================================================== -->

    <section
        id="recapitulatif"
        class="jeu-ecran jeu-cache">

        <div class="jeu-header">

            <h1>La partie est prête !</h1>

            <p>
                Les équipes sont prêtes à jouer
            </p>

        </div>

        <div class="jeu-contenu">

            <div
                id="liste-equipes"
                class="jeu-liste-equipes">
            </div>

            <div class="jeu-actions">

                <button
                    id="modifier"
                    class="jeu-bouton-secondaire"
                    type="button">

                    Modifier

                </button>

                <button
                    id="lancer"
                    class="jeu-bouton-principal"
                    type="button">

                    🚀 Lancer la partie

                </button>

            </div>

        </div>

    </section>


    <!-- =====================================================
         JEU
         ===================================================== -->

    <section
        id="jeu"
        class="jeu-ecran jeu-cache">

        <div class="jeu-header">

            <h1>Le Mur NSI</h1>

            <p id="message-jeu">
                Choisissez une case
            </p>

        </div>

        <div class="jeu-contenu">


            <!-- =========================
                 TOUR
                 ========================= -->

            <div
                id="equipe-qui-joue"
                class="jeu-tour">
            </div>


            <!-- =========================
                 SCORES
                 ========================= -->

            <div
                id="scores-equipes"
                class="jeu-scores">
            </div>


            <!-- =========================
                 OPTIONS DU PLATEAU
                 ========================= -->

            <div class="jeu-options-plateau">

                <label class="jeu-switch">

                    <input
                        type="checkbox"
                        id="afficher-couleurs"
                        checked>

                    <span class="jeu-slider"></span>

                    <span class="jeu-switch-texte">
                        Afficher les couleurs des thèmes
                    </span>

                </label>

            </div>


            <!-- =========================
                 LÉGENDE DES THÈMES
                 ========================= -->

            <div
                id="legende-themes"
                class="jeu-legende">
            </div>


            <!-- =========================
                 PLATEAU
                 ========================= -->

            <div
                id="grille-jeu"
                class="jeu-plateau">
            </div>


            <!-- =========================
                 TERMINER
                 ========================= -->

            <div class="jeu-fin">

                <button
                    id="terminer-partie"
                    class="jeu-bouton-fin"
                    type="button">

                    🏁 Terminer la partie

                </button>

            </div>


            <!-- =========================
                 QUESTION
                 ========================= -->

            <div
                id="question-panel"
                class="jeu-question-panel jeu-cache">

                <div
                    id="question-theme"
                    class="jeu-question-theme">
                </div>

                <div
                    id="question-numero"
                    class="jeu-question-numero">
                </div>

                <h2 id="question-texte">
                    Question
                </h2>


                <!-- =========================
                     RÉPONSE
                     ========================= -->

                <div class="jeu-reponse-zone">

                    <button
                        id="afficher-reponse"
                        class="jeu-bouton-reponse"
                        type="button">

                        Afficher la réponse

                    </button>

                    <div
                        id="reponse"
                        class="jeu-reponse-jeu jeu-cache">
                    </div>

                </div>


                <!-- =========================
                     VALIDATION
                     ========================= -->

                <div class="jeu-question-actions">

                    <button
                        id="reponse-correcte"
                        class="jeu-bouton-correct"
                        type="button">

                        ✅ Réponse correcte

                    </button>

                    <button
                        id="reponse-incorrecte"
                        class="jeu-bouton-incorrect"
                        type="button">

                        ❌ Réponse incorrecte

                    </button>

                </div>

            </div>


            <!-- =========================
                 CLASSEMENT
                 ========================= -->

            <div
                id="classement-final"
                class="jeu-classement jeu-cache">
            </div>

        </div>

    </section>

</div>


<script src="../carte/questions.js"></script>
<script src="script.js"></script>