<link rel="stylesheet" href="style.css">

<div class="mur-nsi">

    <!-- =====================================================
         CONFIGURATION
         ===================================================== -->

    <section id="configuration" class="jeu-ecran">

        <div class="jeu-header">

            <h1>La Conquête NSI</h1>
            <p>Préparez votre partie</p>
        </div>

        <div class="jeu-contenu">

            <div class="jeu-configuration">

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


                <!-- =================================================
                     NOMBRE DE THÈMES
                     ================================================= -->

                <div class="jeu-selection-themes">

                    <h2>Choisissez les thèmes</h2>

                    <p class="jeu-description-themes">
                        Sélectionnez au moins autant de thèmes
                        qu'il y a d'équipes.
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

            <div class="jeu-logo">🏰</div>

            <h1>La Conquête NSI</h1>

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
                    Préparer le plateau
                </button>

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
                Les équipes vont maintenant conquérir
                le territoire.
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

    

            <h1>La Conquête NSI</h1>

            <p id="message-jeu">
                Choisissez une case à conquérir
            </p>

        </div>


        <div class="jeu-contenu">


            <!-- =================================================
                 ÉQUIPE ACTUELLE
                 ================================================= -->

            <div
                id="equipe-qui-joue"
                class="jeu-tour">
            </div>


            <!-- =================================================
                 SCORES
                 ================================================= -->

            <div
                id="scores-equipes"
                class="jeu-scores">
            </div>


            <!-- =================================================
                 LÉGENDE / OPTIONS
                 ================================================= -->

            <div class="jeu-options-plateau">

                <div class="jeu-legende">

                    <strong>Légende :</strong>

                    <div
                        id="legende-themes"
                        class="jeu-legende-themes">
                    </div>

                </div>


                <label class="jeu-switch">

                    <input
                        type="checkbox"
                        id="afficher-couleurs"
                        checked>

                    <span class="jeu-slider"></span>

                    <span class="jeu-switch-texte">
                        Afficher les thèmes
                    </span>

                </label>

            </div>


            <!-- =================================================
                 PLATEAU
                 ================================================= -->

            <div
                id="grille-jeu"
                class="jeu-plateau">
            </div>


            <!-- =================================================
                 QUESTION
                 ================================================= -->

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


                <!-- RÉPONSE CACHÉE -->

                <div
                    id="reponse-cachee"
                    class="jeu-reponse-cachee">

                    <button
                        id="afficher-reponse"
                        class="jeu-bouton-reponse"
                        type="button">
                        👁️ Afficher la réponse
                    </button>

                    <div
                        id="reponse-attendue"
                        class="jeu-reponse-attendue jeu-cache">
                    </div>

                </div>


                <!-- ACTIONS -->

                <div class="jeu-question-actions">

                    <button
                        id="reponse-correcte"
                        class="jeu-bouton-correct"
                        type="button">
                        ✅ Bonne réponse
                    </button>

                    <button
                        id="reponse-incorrecte"
                        class="jeu-bouton-incorrect"
                        type="button">
                        ❌ Mauvaise réponse
                    </button>

                </div>

            </div>


            <!-- =================================================
                 TERMINER
                 ================================================= -->

            <div class="jeu-fin">

                <button
                    id="terminer-partie"
                    class="jeu-bouton-fin"
                    type="button">
                    🏁 Terminer la partie
                </button>

            </div>


            <!-- =================================================
                 CLASSEMENT FINAL
                 ================================================= -->

            <div
                id="classement-final"
                class="jeu-classement jeu-cache">
            </div>

        </div>

    </section>

</div>


<script src="questions.js"></script>
<script src="script.js"></script>