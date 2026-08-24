/* =========================================================
   LA CONQUÊTE NSI — JEU DE CONQUÊTE
   ========================================================= */


/* =========================================================
   THÈMES DISPONIBLES
   ========================================================= */

   const themes = [

    {
        nom: "Python",
        emoji: "🐍",
        couleur: "#16a34a"
    },

    {
        nom: "Algorithmique",
        emoji: "🧮",
        couleur: "#2563eb"
    },

    {
        nom: "Bases de données",
        emoji: "🗄️",
        couleur: "#9333ea"
    },

    {
        nom: "Réseaux",
        emoji: "🌐",
        couleur: "#ea580c"
    },

    {
        nom: "Cryptographie",
        emoji: "🔐",
        couleur: "#dc2626"
    },

    {
        nom: "Intelligence artificielle",
        emoji: "🧠",
        couleur: "#db2777"
    },

    {
        nom: "Structures de données",
        emoji: "🌳",
        couleur: "#92400e"
    },

    {
        nom: "POO",
        emoji: "🧩",
        couleur: "#ca8a04"
    },

    {
        nom: "Architecture",
        emoji: "💻",
        couleur: "#0891b2"
    },

    {
        nom: "Données",
        emoji: "📊",
        couleur: "#0d9488"
    },

    {
        nom: "Recherche",
        emoji: "🔎",
        couleur: "#64748b"
    },

    {
        nom: "Systèmes",
        emoji: "⚙️",
        couleur: "#475569"
    },

    {
        nom: "Web",
        emoji: "🌍",
        couleur: "#7c3aed"
    },

    {
        nom: "Graphes",
        emoji: "🕸️",
        couleur: "#be123c"
    },

    {
        nom: "Récursivité",
        emoji: "🔁",
        couleur: "#15803d"
    }

];


/* =========================================================
   VARIABLES DU JEU
   ========================================================= */

let nombreEquipes = 4;

let taillePlateau = 10;

let equipeQuiJoue = 1;

let equipes = [];

let themesDuJeu = [];

let scores = [];

let plateau = [];

let caseActuelle = null;

let partieTerminee = false;


/* =========================================================
   COULEURS DES ÉQUIPES
   ========================================================= */

const couleursEquipes = [

    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#9333ea",
    "#ea580c",
    "#0891b2",
    "#db2777",
    "#ca8a04"

];


/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS HTML
   ========================================================= */

const configuration =
    document.getElementById("configuration");

const nomsEquipes =
    document.getElementById("noms-equipes");

const recapitulatif =
    document.getElementById("recapitulatif");

const jeu =
    document.getElementById("jeu");

const nombreEquipesElement =
    document.getElementById("nombre-equipes");

const moins =
    document.getElementById("moins");

const plus =
    document.getElementById("plus");

const commencerNoms =
    document.getElementById("commencer-noms");

const formulaireEquipes =
    document.getElementById("formulaire-equipes");

const validerNoms =
    document.getElementById("valider-noms");

const listeEquipes =
    document.getElementById("liste-equipes");

const modifier =
    document.getElementById("modifier");

const lancer =
    document.getElementById("lancer");

const grilleJeu =
    document.getElementById("grille-jeu");

const messageJeu =
    document.getElementById("message-jeu");

const questionPanel =
    document.getElementById("question-panel");

const questionTheme =
    document.getElementById("question-theme");

const questionNumero =
    document.getElementById("question-numero");

const questionTexte =
    document.getElementById("question-texte");

const reponseCorrecte =
    document.getElementById("reponse-correcte");

const reponseIncorrecte =
    document.getElementById("reponse-incorrecte");

const listeThemesConfiguration =
    document.getElementById(
        "liste-themes-configuration"
    );

const compteurThemes =
    document.getElementById(
        "compteur-themes"
    );

const equipeQuiJoueElement =
    document.getElementById(
        "equipe-qui-joue"
    );

const scoresEquipes =
    document.getElementById(
        "scores-equipes"
    );

const afficherCouleurs =
    document.getElementById(
        "afficher-couleurs"
    );

const terminerPartie =
    document.getElementById(
        "terminer-partie"
    );

const afficherReponse =
    document.getElementById(
        "afficher-reponse"
    );

const reponseAttendue =
    document.getElementById(
        "reponse-attendue"
    );

const legendeThemes =
    document.getElementById(
        "legende-themes"
    );

const taillesPlateau =
    document.querySelectorAll(
        ".jeu-taille-plateau"
    );


/* =========================================================
   INITIALISATION
   ========================================================= */

afficherThemesConfiguration();

mettreAJourCompteurThemes();

afficherLegendeThemes();

initialiserTaillesPlateau();


/* =========================================================
   NOMBRE D'ÉQUIPES
   ========================================================= */

moins.addEventListener(
    "click",
    () => {

        if (nombreEquipes > 2) {

            nombreEquipes--;

            nombreEquipesElement.textContent =
                nombreEquipes;

        }

    }
);


plus.addEventListener(
    "click",
    () => {

        if (nombreEquipes < 8) {

            nombreEquipes++;

            nombreEquipesElement.textContent =
                nombreEquipes;

        }

    }
);


/* =========================================================
   TAILLE DU PLATEAU
   ========================================================= */

function initialiserTaillesPlateau() {

    taillesPlateau.forEach(
        bouton => {

            bouton.addEventListener(
                "click",
                () => {

                    taillePlateau =
                        Number(
                            bouton.dataset.taille
                        );


                    taillesPlateau.forEach(
                        autre => {

                            autre.classList.remove(
                                "jeu-taille-selectionnee"
                            );

                        }
                    );


                    bouton.classList.add(
                        "jeu-taille-selectionnee"
                    );

                }
            );

        }
    );

}


/* =========================================================
   AFFICHAGE DES THÈMES
   ========================================================= */

function afficherThemesConfiguration() {

    listeThemesConfiguration.innerHTML = "";


    themes.forEach(
        (theme, index) => {

            const bouton =
                document.createElement("button");


            bouton.type =
                "button";


            bouton.className =
                "jeu-theme-configuration";


            bouton.style.setProperty(
                "--couleur-theme",
                theme.couleur
            );


            if (
                themesDuJeu.includes(index)
            ) {

                bouton.classList.add(
                    "jeu-theme-selectionne"
                );

            }


            bouton.innerHTML = `

                <span class="jeu-theme-check">
                    ✓
                </span>

                <span>
                    ${theme.emoji}
                    ${theme.nom}
                </span>

            `;


            bouton.addEventListener(
                "click",
                () => {

                    selectionnerThemeConfiguration(
                        index,
                        bouton
                    );

                }
            );


            listeThemesConfiguration.appendChild(
                bouton
            );

        }
    );


    mettreAJourCompteurThemes();

}


/* =========================================================
   SÉLECTION D'UN THÈME
   ========================================================= */

function selectionnerThemeConfiguration(
    index,
    bouton
) {

    const dejaSelectionne =
        themesDuJeu.includes(index);


    if (dejaSelectionne) {

        themesDuJeu =
            themesDuJeu.filter(
                themeIndex =>
                    themeIndex !== index
            );

        bouton.classList.remove(
            "jeu-theme-selectionne"
        );

    }

    else {

        themesDuJeu.push(index);

        bouton.classList.add(
            "jeu-theme-selectionne"
        );

    }


    mettreAJourCompteurThemes();

    afficherLegendeThemes();

}


/* =========================================================
   COMPTEUR DES THÈMES
   ========================================================= */

function mettreAJourCompteurThemes() {

    const nombre =
        themesDuJeu.length;


    compteurThemes.textContent =
        `${nombre} thème${nombre > 1 ? "s" : ""} sélectionné${nombre > 1 ? "s" : ""}`;


    /*
     * Il suffit d'avoir au moins un thème.
     *
     * Le nombre de thèmes n'est PAS lié
     * au nombre d'équipes.
     */

    commencerNoms.disabled =
        nombre === 0;

}


/* =========================================================
   LÉGENDE DES THÈMES
   ========================================================= */

function afficherLegendeThemes() {

    if (!legendeThemes) {

        return;

    }


    legendeThemes.innerHTML = "";


    themes.forEach(
        (theme, index) => {

            if (
                !themesDuJeu.includes(index)
            ) {

                return;

            }


            const element =
                document.createElement("div");


            element.className =
                "jeu-legende-item";


            element.innerHTML = `

                <span
                    class="jeu-legende-couleur"
                    style="
                        background: ${theme.couleur};
                    "
                ></span>

                <span>
                    ${theme.emoji}
                    ${theme.nom}
                </span>

            `;


            legendeThemes.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   PASSAGE AUX NOMS
   ========================================================= */

commencerNoms.addEventListener(
    "click",
    () => {

        if (
            themesDuJeu.length === 0
        ) {

            return;

        }

        afficherFormulaireNoms();

    }
);


/* =========================================================
   FORMULAIRE DES NOMS
   ========================================================= */

function afficherFormulaireNoms() {

    formulaireEquipes.innerHTML = "";


    for (
        let i = 1;
        i <= nombreEquipes;
        i++
    ) {

        const ligne =
            document.createElement("div");


        ligne.className =
            "jeu-champ-equipe";


        ligne.innerHTML = `

            <label for="equipe-${i}">
                Équipe ${i}
            </label>

            <input
                id="equipe-${i}"
                type="text"
                maxlength="25"
                placeholder="Nom de l'équipe"
            >

        `;


        formulaireEquipes.appendChild(
            ligne
        );

    }


    afficherEcran(
        nomsEquipes
    );

}


/* =========================================================
   VALIDATION DES NOMS
   ========================================================= */

validerNoms.addEventListener(
    "click",
    enregistrerNoms
);


function enregistrerNoms() {

    equipes = [];


    for (
        let i = 1;
        i <= nombreEquipes;
        i++
    ) {

        const input =
            document.getElementById(
                `equipe-${i}`
            );


        const nom =
            input.value.trim();


        if (
            nom === ""
        ) {

            input.focus();

            return;

        }


        equipes.push({

            numero: i,

            nom: nom

        });

    }


    scores =
        new Array(
            nombreEquipes
        ).fill(0);


    equipeQuiJoue = 1;

    afficherRecapitulatif();

    afficherEcran(
        recapitulatif
    );

}


/* =========================================================
   RÉCAPITULATIF
   ========================================================= */

function afficherRecapitulatif() {

    listeEquipes.innerHTML = "";


    equipes.forEach(
        equipe => {

            const element =
                document.createElement("div");


            element.className =
                "jeu-equipe";


            const couleur =
                couleursEquipes[
                    (equipe.numero - 1) %
                    couleursEquipes.length
                ];


            element.innerHTML = `

                <div
                    class="jeu-numero-equipe"
                    style="
                        background: ${couleur};
                    "
                >
                    ${equipe.numero}
                </div>

                <div>

                    <strong>
                        ${equipe.nom}
                    </strong>

                    <div class="jeu-specialite">

                        ${themesDuJeu.length}
                        thème${themesDuJeu.length > 1 ? "s" : ""}
                        disponible${themesDuJeu.length > 1 ? "s" : ""}

                    </div>

                </div>

            `;


            listeEquipes.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   MODIFICATION
   ========================================================= */

modifier.addEventListener(
    "click",
    () => {

        afficherThemesConfiguration();

        afficherLegendeThemes();

        afficherEcran(
            configuration
        );

    }
);


/* =========================================================
   LANCEMENT
   ========================================================= */

lancer.addEventListener(
    "click",
    lancerPartie
);


function lancerPartie() {

    if (
        equipes.length !==
        nombreEquipes
    ) {

        return;

    }


    if (
        themesDuJeu.length === 0
    ) {

        return;

    }


    equipeQuiJoue = 1;

    scores =
        new Array(
            nombreEquipes
        ).fill(0);


    caseActuelle = null;

    partieTerminee = false;


    questionPanel.classList.add(
        "jeu-cache"
    );


    if (terminerPartie) {

        terminerPartie.disabled =
            false;

    }


    if (afficherCouleurs) {

        afficherCouleurs.checked =
            true;

    }


    if (grilleJeu) {

        grilleJeu.classList.remove(
            "jeu-sans-couleurs"
        );

    }


    afficherLegendeThemes();

    creerPlateau();


    afficherEcran(
        jeu
    );


    afficherEquipeQuiJoue();

    afficherScores();

}


/* =========================================================
   AFFICHAGE / MASQUAGE DES COULEURS
   ========================================================= */

if (afficherCouleurs) {

    afficherCouleurs.addEventListener(
        "change",
        () => {

            mettreAJourCouleursPlateau();

        }
    );

}


/* =========================================================
   CRÉATION DU PLATEAU
   ========================================================= */

function creerPlateau() {

    grilleJeu.innerHTML = "";

    plateau = [];


    const taille =
        taillePlateau;


    /*
     * Les colonnes prennent exactement la place disponible.
     *
     * minmax(0, 1fr) est important pour le 15 × 15 :
     * les nombres 100 à 225 ne peuvent plus imposer
     * une largeur minimale à leur colonne.
     */

    grilleJeu.style.gridTemplateColumns =
        `repeat(${taille}, minmax(0, 1fr))`;


    /*
     * Permet au CSS d'identifier le plateau.
     * Exemple :
     * .jeu-plateau[data-taille="15"]
     */

    grilleJeu.dataset.taille =
        taille;


    for (
        let ligne = 0;
        ligne < taille;
        ligne++
    ) {

        for (
            let colonne = 0;
            colonne < taille;
            colonne++
        ) {

            const index =
                ligne * taille +
                colonne;


            const indexTheme =
                themesDuJeu[
                    Math.floor(
                        Math.random() *
                        themesDuJeu.length
                    )
                ];


            const theme =
                themes[indexTheme];


            const questionsTheme =
                questions.filter(
                    question =>
                        question.theme ===
                        theme.nom
                );


            let question;


            if (
                questionsTheme.length > 0
            ) {

                question =
                    questionsTheme[
                        Math.floor(
                            Math.random() *
                            questionsTheme.length
                        )
                    ];

            }

            else {

                question = {

                    question:
                        "Aucune question disponible pour ce thème.",

                    reponse:
                        "Aucune réponse disponible."

                };

            }


            const caseJeu = {

                index: index,

                ligne: ligne,

                colonne: colonne,

                numero: index + 1,

                theme: theme,

                indexTheme: indexTheme,

                question: question.question,

                reponse: question.reponse,

                proprietaire: null

            };


            plateau.push(
                caseJeu
            );


            const bouton =
                document.createElement("button");


            bouton.type =
                "button";


            bouton.className =
                "jeu-case-plateau";


            bouton.textContent =
                index + 1;


            bouton.dataset.index =
                index;


            bouton.style.setProperty(
                "--couleur-theme",
                theme.couleur
            );


            bouton.addEventListener(
                "click",
                () => {

                    ouvrirQuestion(
                        caseJeu,
                        bouton
                    );

                }
            );


            grilleJeu.appendChild(
                bouton
            );

        }

    }


    mettreAJourCouleursPlateau();

}


/* =========================================================
   VOISINS D'UNE CASE
   ========================================================= */

function obtenirVoisins(caseJeu) {

    const voisins = [];

    const ligne =
        caseJeu.ligne;

    const colonne =
        caseJeu.colonne;

    const taille =
        taillePlateau;


    if (ligne > 0) {

        voisins.push(
            plateau[
                (ligne - 1) * taille +
                colonne
            ]
        );

    }


    if (colonne < taille - 1) {

        voisins.push(
            plateau[
                ligne * taille +
                (colonne + 1)
            ]
        );

    }


    if (ligne < taille - 1) {

        voisins.push(
            plateau[
                (ligne + 1) * taille +
                colonne
            ]
        );

    }


    if (colonne > 0) {

        voisins.push(
            plateau[
                ligne * taille +
                (colonne - 1)
            ]
        );

    }


    return voisins;

}


/* =========================================================
   CONQUÊTE D'UNE CASE
   ========================================================= */

function conquerirCase(
    caseJeu,
    equipe
) {

    caseJeu.proprietaire =
        equipe.numero;


    mettreAJourAffichageCase(
        caseJeu
    );

}


/* =========================================================
   CONQUÊTE D'UNE ZONE
   ========================================================= */

function conquerirZone(caseJeu) {

    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];


    conquerirCase(
        caseJeu,
        equipe
    );


    const voisins =
        obtenirVoisins(
            caseJeu
        );


    voisins.forEach(
        voisin => {

            if (
                voisin.proprietaire === null
            ) {

                conquerirCase(
                    voisin,
                    equipe
                );

            }

        }
    );


    mettreAJourPlateau();

}


/* =========================================================
   AFFICHAGE D'UNE CASE CONQUISE
   ========================================================= */

function mettreAJourAffichageCase(
    caseJeu
) {

    const bouton =
        grilleJeu.querySelector(
            `[data-index="${caseJeu.index}"]`
        );


    if (!bouton) {

        return;

    }


    bouton.classList.remove(
        "jeu-case-equipe-1",
        "jeu-case-equipe-2",
        "jeu-case-equipe-3",
        "jeu-case-equipe-4",
        "jeu-case-equipe-5",
        "jeu-case-equipe-6",
        "jeu-case-equipe-7",
        "jeu-case-equipe-8"
    );


    if (
        caseJeu.proprietaire === null
    ) {

        bouton.style.removeProperty(
            "--couleur-equipe"
        );

        bouton.classList.remove(
            "jeu-case-conquise"
        );

        return;

    }


    const equipe =
        equipes[
            caseJeu.proprietaire - 1
        ];


    if (!equipe) {

        return;

    }


    const couleur =
        couleursEquipes[
            (equipe.numero - 1) %
            couleursEquipes.length
        ];


    bouton.style.setProperty(
        "--couleur-equipe",
        couleur
    );


    bouton.classList.add(
        `jeu-case-equipe-${equipe.numero}`
    );


    bouton.classList.add(
        "jeu-case-conquise"
    );

}


/* =========================================================
   MISE À JOUR DE TOUT LE PLATEAU
   ========================================================= */

function mettreAJourPlateau() {

    plateau.forEach(
        caseJeu => {

            mettreAJourAffichageCase(
                caseJeu
            );

        }
    );

}


/* =========================================================
   COULEURS DES THÈMES
   ========================================================= */

function mettreAJourCouleursPlateau() {

    if (!afficherCouleurs) {

        return;

    }


    if (
        afficherCouleurs.checked
    ) {

        grilleJeu.classList.remove(
            "jeu-sans-couleurs"
        );

    }

    else {

        grilleJeu.classList.add(
            "jeu-sans-couleurs"
        );

    }


    mettreAJourPlateau();

}


/* =========================================================
   OUVERTURE D'UNE QUESTION
   ========================================================= */

function ouvrirQuestion(
    caseJeu,
    bouton
) {

    if (
        partieTerminee
    ) {

        return;

    }


    if (
        caseJeu.proprietaire !== null
    ) {

        return;

    }


    caseActuelle = {

        donnees:
            caseJeu,

        bouton:
            bouton

    };


    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];


    questionTheme.textContent =
        `${caseJeu.theme.emoji} ${caseJeu.theme.nom}`;


    questionTheme.style.background =
        caseJeu.theme.couleur;


    questionNumero.textContent =
        `Case ${caseJeu.numero} / ${taillePlateau * taillePlateau}`;


    questionTexte.textContent =
        caseJeu.question;


    reponseAttendue.textContent =
        caseJeu.reponse ||
        "Aucune réponse disponible.";


    reponseAttendue.classList.add(
        "jeu-cache"
    );


    afficherReponse.textContent =
        "👁️ Afficher la réponse";


    messageJeu.textContent =
        `🎯 ${equipe.nom} doit répondre`;


    questionPanel.classList.remove(
        "jeu-cache"
    );


    questionPanel.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}


/* =========================================================
   AFFICHER / MASQUER LA RÉPONSE
   ========================================================= */

afficherReponse.addEventListener(
    "click",
    () => {

        if (!caseActuelle) {

            return;

        }


        const reponseVisible =
            !reponseAttendue.classList.contains(
                "jeu-cache"
            );


        if (reponseVisible) {

            reponseAttendue.classList.add(
                "jeu-cache"
            );


            afficherReponse.textContent =
                "👁️ Afficher la réponse";

        }

        else {

            reponseAttendue.classList.remove(
                "jeu-cache"
            );


            afficherReponse.textContent =
                "🙈 Masquer la réponse";

        }

    }
);


/* =========================================================
   RÉPONSE CORRECTE
   ========================================================= */

reponseCorrecte.addEventListener(
    "click",
    () => {

        traiterReponse(true);

    }
);


/* =========================================================
   RÉPONSE INCORRECTE
   ========================================================= */

reponseIncorrecte.addEventListener(
    "click",
    () => {

        traiterReponse(false);

    }
);


/* =========================================================
   TRAITEMENT DE LA RÉPONSE
   ========================================================= */

function traiterReponse(correcte) {

    if (!caseActuelle) {

        return;

    }


    const caseJeu =
        caseActuelle.donnees;


    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];


    if (correcte) {

        conquerirZone(
            caseJeu
        );


        messageJeu.textContent =
            `✅ ${equipe.nom} conquiert la case et ses voisines !`;

    }

    else {

        messageJeu.textContent =
            `❌ Mauvaise réponse pour ${equipe.nom}`;

    }


    questionPanel.classList.add(
        "jeu-cache"
    );


    caseActuelle =
        null;


    afficherScores();


    if (
        verifierFinTerritoire()
    ) {

        return;

    }


    equipeQuiJoue++;


    if (
        equipeQuiJoue >
        nombreEquipes
    ) {

        equipeQuiJoue =
            1;

    }


    afficherEquipeQuiJoue();

    afficherScores();

}


/* =========================================================
   ÉQUIPE QUI JOUE
   ========================================================= */

function afficherEquipeQuiJoue() {

    if (
        partieTerminee
    ) {

        return;

    }


    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];


    if (!equipe) {

        return;

    }


    const couleur =
        couleursEquipes[
            (equipe.numero - 1) %
            couleursEquipes.length
        ];


    equipeQuiJoueElement.innerHTML = `

        🎯 Au tour de

        <strong>
            ${equipe.nom}
        </strong>

    `;


    equipeQuiJoueElement.style.border =
        `3px solid ${couleur}`;


    afficherScores();

}


/* =========================================================
   CALCUL DES TERRITOIRES
   ========================================================= */

function calculerTerritoires() {

    const territoires =
        new Array(
            nombreEquipes
        ).fill(0);


    plateau.forEach(
        caseJeu => {

            if (
                caseJeu.proprietaire !== null
            ) {

                territoires[
                    caseJeu.proprietaire - 1
                ]++;

            }

        }
    );


    return territoires;

}


/* =========================================================
   AFFICHAGE DES SCORES
   ========================================================= */

function afficherScores() {

    if (!scoresEquipes) {

        return;

    }


    const territoires =
        calculerTerritoires();


    scoresEquipes.innerHTML = "";


    equipes.forEach(
        (equipe, index) => {

            const element =
                document.createElement("div");


            element.className =
                "jeu-score-equipe";


            if (
                equipe.numero ===
                equipeQuiJoue
            ) {

                element.classList.add(
                    "jeu-equipe-active"
                );

            }


            const couleur =
                couleursEquipes[
                    (equipe.numero - 1) %
                    couleursEquipes.length
                ];


            element.style.setProperty(
                "--couleur-equipe",
                couleur
            );


            element.innerHTML = `

                <div class="jeu-score-nom">

                    <strong>
                        ${equipe.nom}
                    </strong>

                    <span>
                        Équipe ${equipe.numero}
                    </span>

                </div>

                <div class="jeu-score-points">

                    ${territoires[index]}

                    <small>
                        cases
                    </small>

                </div>

            `;


            scoresEquipes.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   VÉRIFICATION DE FIN
   ========================================================= */

function verifierFinTerritoire() {

    const nombreCasesConquises =
        plateau.filter(
            caseJeu =>
                caseJeu.proprietaire !== null
        ).length;


    if (
        nombreCasesConquises >=
        plateau.length
    ) {

        afficherResultatsFinaux();

        return true;

    }


    return false;

}


/* =========================================================
   BOUTON TERMINER LA PARTIE
   ========================================================= */

if (terminerPartie) {

    terminerPartie.addEventListener(
        "click",
        () => {

            if (
                partieTerminee
            ) {

                return;

            }


            if (
                caseActuelle
            ) {

                questionPanel.classList.add(
                    "jeu-cache"
                );

                caseActuelle =
                    null;

            }


            afficherResultatsFinaux();

        }
    );

}


/* =========================================================
   RÉSULTATS FINAUX
   ========================================================= */

function afficherResultatsFinaux() {

    partieTerminee =
        true;


    questionPanel.classList.add(
        "jeu-cache"
    );


    const territoires =
        calculerTerritoires();


    const classement =
        equipes
            .map(
                (equipe, index) => ({

                    equipe:
                        equipe,

                    territoire:
                        territoires[index]

                })
            )
            .sort(
                (a, b) =>
                    b.territoire -
                    a.territoire
            );


    grilleJeu
        .querySelectorAll(
            ".jeu-case-plateau"
        )
        .forEach(
            bouton => {

                bouton.disabled =
                    true;

            }
        );


    messageJeu.textContent =
        "🏆 Partie terminée !";


    equipeQuiJoueElement.innerHTML = `

        🏁

        <strong>
            Partie terminée
        </strong>

    `;


    scoresEquipes.innerHTML = "";


    classement.forEach(
        (element, index) => {

            const ligne =
                document.createElement("div");


            ligne.className =
                "jeu-classement-ligne";


            let medaille = "";


            if (
                index === 0
            ) {

                medaille = "🥇";

            }

            else if (
                index === 1
            ) {

                medaille = "🥈";

            }

            else if (
                index === 2
            ) {

                medaille = "🥉";

            }


            ligne.innerHTML = `

                <span>

                    ${medaille}

                    <strong>
                        ${index + 1}.
                        ${element.equipe.nom}
                    </strong>

                </span>

                <strong>
                    ${element.territoire}
                    case${element.territoire > 1 ? "s" : ""}
                </strong>

            `;


            scoresEquipes.appendChild(
                ligne
            );

        }
    );


    if (
        terminerPartie
    ) {

        terminerPartie.disabled =
            true;

    }

}


/* =========================================================
   CHANGEMENT D'ÉCRAN
   ========================================================= */

function afficherEcran(ecran) {

    const ecrans = [

        configuration,

        nomsEquipes,

        recapitulatif,

        jeu

    ];


    ecrans.forEach(
        element => {

            if (
                element
            ) {

                element.classList.add(
                    "jeu-cache"
                );

            }

        }
    );


    if (
        ecran
    ) {

        ecran.classList.remove(
            "jeu-cache"
        );

    }


    const mur =
        document.querySelector(
            ".mur-nsi"
        );


    if (
        mur
    ) {

        mur.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }

}