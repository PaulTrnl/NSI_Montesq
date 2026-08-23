<link rel="stylesheet" href="style.css">

<div class="mur-nsi">

    <!-- =====================================================
         CONFIGURATION
         ===================================================== -->

    <section id="configuration" class="jeu-ecran">

        <div class="jeu-header">
            <div class="jeu-logo">🏆</div>

            <h1>Conquête NSI</h1>

            <p>
                Préparez votre partie
            </p>
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


                <!-- ================================
                     THÈMES
                     ================================ -->

                <div class="jeu-selection-themes">

                    <h2>Choisissez les thèmes</h2>

                    <p id="compteur-themes"
                       class="jeu-compteur-themes">
                        0 thème sélectionné
                    </p>

                    <p class="jeu-info">
                        Sélectionnez au minimum autant
                        de thèmes qu'il y a d'équipes.
                    </p>

                    <div
                        id="liste-themes-configuration"
                        class="jeu-themes-configuration">
                    </div>

                </div>


                <button
                    id="commencer-noms"
                    class="jeu-bouton-principal"
                    type="button">
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

            <div class="jeu-logo">🏆</div>

            <h1>Conquête NSI</h1>

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

            <div class="jeu-logo">🧠</div>

            <h1>Choisissez votre spécialité</h1>

            <p id="instruction-selection">
            </p>

        </div>

        <div class="jeu-contenu">

            <div
                id="grille-themes"
                class="jeu-grille">
            </div>

            <div class="jeu-progression">

                <div id="texte-progression">
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

            <div class="jeu-logo">🗺️</div>

            <h1>La partie est prête !</h1>

            <p>
                Les équipes sont prêtes à conquérir
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
                    🗺️ Lancer la conquête
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

            <div class="jeu-logo">🗺️</div>

            <h1>Conquête NSI</h1>

            <p id="message-jeu">
                Choisissez un territoire
            </p>

        </div>


        <div class="jeu-contenu">


            <!-- =========================================
                 ÉQUIPE QUI JOUE
                 ========================================= -->

            <div
                id="equipe-qui-joue"
                class="jeu-tour">
            </div>


            <!-- =========================================
                 SCORES / ÉQUIPES
                 ========================================= -->

            <div
                id="scores-equipes"
                class="jeu-scores">
            </div>


            <!-- =========================================
                 LÉGENDE
                 ========================================= -->

            <div
                id="legende-territoires"
                class="jeu-legende">
            </div>


            <!-- =========================================
                 CARTE
                 ========================================= -->

            <div class="jeu-carte-container">

                <svg
                    id="carte-conquete"
                    class="jeu-carte"
                    viewBox="0 0 1000 700"
                    preserveAspectRatio="xMidYMid meet">

                    <!-- Les territoires sont générés
                         par JavaScript -->

                </svg>

            </div>


            <!-- =========================================
                 QUESTION
                 ========================================= -->

            <div
                id="question-panel"
                class="jeu-question-panel jeu-cache">

                <div
                    id="question-theme"
                    class="jeu-question-theme">
                </div>

                <div
                    id="question-territoire"
                    class="jeu-question-numero">
                </div>

                <h2 id="question-texte">
                    Question
                </h2>

                <div
                    class="jeu-reponses">

                    <button
                        id="reponse-a"
                        class="jeu-reponse-bouton"
                        type="button">
                    </button>

                    <button
                        id="reponse-b"
                        class="jeu-reponse-bouton"
                        type="button">
                    </button>

                    <button
                        id="reponse-c"
                        class="jeu-reponse-bouton"
                        type="button">
                    </button>

                    <button
                        id="reponse-d"
                        class="jeu-reponse-bouton"
                        type="button">
                    </button>

                </div>

                <div
                    class="jeu-question-actions">

                    <button
                        id="fermer-question"
                        class="jeu-bouton-secondaire"
                        type="button">
                        Annuler
                    </button>

                </div>

            </div>


            <!-- =========================================
                 TERMINER
                 ========================================= -->

            <div class="jeu-fin">

                <button
                    id="terminer-partie"
                    class="jeu-bouton-fin"
                    type="button">

                    🏁 Terminer la partie

                </button>

            </div>


            <!-- =========================================
                 CLASSEMENT
                 ========================================= -->

            <div
                id="classement-final"
                class="jeu-classement jeu-cache">
            </div>

        </div>

    </section>

</div>



<script src="questions.js"></script>
<script src="script.js"></script>