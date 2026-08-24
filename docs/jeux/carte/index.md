<link rel="stylesheet" href="style.css">

<div class="mur-nsi">

    <!-- =====================================================
         CONFIGURATION
         ===================================================== -->

    <section id="configuration" class="jeu-ecran">

        <div class="jeu-header">

            <h1>La Conquête NSI</h1>

            <p>
                Préparez votre partie
            </p>

        </div>

        <div class="jeu-contenu">

            <div class="jeu-configuration">

                <!-- =================================================
                     NOMBRE D'ÉQUIPES
                     ================================================= -->

                <h2>Nombre d'équipes</h2>

                <div class="jeu-compteur">

                    <button
                        id="moins"
                        class="jeu-bouton-compteur"
                        type="button">
                        −
                    </button>

                    <span id="nombre-equipes">
                        4
                    </span>

                    <button
                        id="plus"
                        class="jeu-bouton-compteur"
                        type="button">
                        +
                    </button>

                </div>


                <!-- =================================================
                     TAILLE DU PLATEAU
                     ================================================= -->

                <div class="jeu-selection-plateau">

                    <h2>Taille du plateau</h2>

                    <p class="jeu-description-themes">
                        Choisissez la taille du territoire.
                    </p>

                    <div
                        id="tailles-plateau"
                        class="jeu-tailles-plateau">

                        <button
                            type="button"
                            class="jeu-taille-plateau"
                            data-taille="6">
                            6 × 6
                        </button>

                        <button
                            type="button"
                            class="jeu-taille-plateau"
                            data-taille="8">
                            8 × 8
                        </button>

                        <button
                            type="button"
                            class="jeu-taille-plateau jeu-taille-selectionnee"
                            data-taille="10">
                            10 × 10
                        </button>

                        <button
                            type="button"
                            class="jeu-taille-plateau"
                            data-taille="12">
                            12 × 12
                        </button>

                        <button
                            type="button"
                            class="jeu-taille-plateau"
                            data-taille="15">
                            15 × 15
                        </button>

                    </div>

                </div>


                <!-- =================================================
                     THÈMES
                     ================================================= -->

                <div class="jeu-selection-themes">

                    <h2>Choisissez les thèmes</h2>

                    <p class="jeu-description-themes">
                        Sélectionnez les thèmes que vous souhaitez
                        utiliser pendant la partie.
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

          

            <h1>
                La Conquête NSI
            </h1>

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

            <h1>
                La partie est prête !
            </h1>

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

            <h1>
                La Conquête NSI
            </h1>

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
                 PLATEAU + LÉGENDE
                 ================================================= -->

            <div class="jeu-zone-plateau">

                <!-- PLATEAU -->

                <div
                    id="grille-jeu"
                    class="jeu-plateau">
                </div>


                <!-- LÉGENDE -->

                <aside class="jeu-legende">

                    <h3>
                        Légende
                    </h3>

                    <div
                        id="legende-themes"
                        class="jeu-legende-themes">
                    </div>


                    <!-- SWITCH -->

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

                </aside>

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


                <!-- =================================================
                     RÉPONSE
                     ================================================= -->

                <div
                    id="reponse-cachee"
                    class="jeu-reponse-cachee">

                    <button
                        id="afficher-reponse"
                        class="jeu-bouton-reponse"
                        type="button">
                        Afficher la réponse
                    </button>

                    <div
                        id="reponse-attendue"
                        class="jeu-reponse-attendue jeu-cache">
                    </div>

                </div>


                <!-- =================================================
                     ACTIONS
                     ================================================= -->

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