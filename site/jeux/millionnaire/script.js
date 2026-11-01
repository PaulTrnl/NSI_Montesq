/* =========================================================
   LE MUR NSI
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
   QUESTIONS
   ========================================================= */

/*
   ==========================================================
   GARDE ICI TON TABLEAU DE QUESTIONS ACTUEL
   ==========================================================

   Exemple de structure :

const questions = [

    {
        theme: "Python",
        question: "Que renvoie len([1, 2, 3]) ?"
    },

    {
        theme: "Algorithmique",
        question: "Quelle est la complexité du tri par sélection ?"
    }

];

   ==========================================================
*/




/* =========================================================
   VARIABLES
   ========================================================= */

let nombreEquipes = 4;

let equipeQuiJoue = 1;

let equipeActuelle = 1;

let equipes = [];

let specialites = [];

let themesDuJeu = [];

let scores = [];

let plateau = [];

let caseActuelle = null;

let partieTerminee = false;


/* =========================================================
   RÉCUPÉRATION DES ÉLÉMENTS
   ========================================================= */

const configuration =
    document.getElementById("configuration");

const nomsEquipes =
    document.getElementById("noms-equipes");

const selection =
    document.getElementById("selection");

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

const grilleThemes =
    document.getElementById("grille-themes");

const instructionSelection =
    document.getElementById("instruction-selection");

const texteProgression =
    document.getElementById("texte-progression");

const progression =
    document.getElementById("progression");

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

const legendeThemes =
    document.getElementById(
        "legende-themes"
    );


/* =========================================================
   INITIALISATION
   ========================================================= */

afficherThemesConfiguration();

mettreAJourCompteurThemes();


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

            mettreAJourCompteurThemes();

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

            mettreAJourCompteurThemes();

        }

    }
);


/* =========================================================
   AFFICHAGE DES THÈMES
   ========================================================= */

function afficherThemesConfiguration() {

    listeThemesConfiguration.innerHTML = "";

    themes.forEach(
        (theme, index) => {

            const bouton =
                document.createElement("button");

            bouton.type = "button";

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


    /*
     * Désélection
     *
     * On interdit de descendre sous
     * le nombre d'équipes.
     */

    if (dejaSelectionne) {

        if (
            themesDuJeu.length <= nombreEquipes
        ) {

            return;

        }

        themesDuJeu =
            themesDuJeu.filter(
                themeIndex =>
                    themeIndex !== index
            );

        bouton.classList.remove(
            "jeu-theme-selectionne"
        );

    }


    /*
     * Sélection
     */

    else {

        themesDuJeu.push(index);

        bouton.classList.add(
            "jeu-theme-selectionne"
        );

    }

    mettreAJourCompteurThemes();
}


/* =========================================================
   COMPTEUR DES THÈMES
   ========================================================= */

function mettreAJourCompteurThemes() {

    const nombre =
        themesDuJeu.length;

    compteurThemes.textContent =
        `${nombre} thème${nombre > 1 ? "s" : ""} sélectionné${nombre > 1 ? "s" : ""}`;

    if (
        nombre < nombreEquipes
    ) {

        compteurThemes.textContent +=
            ` — encore ${nombreEquipes - nombre} à sélectionner`;

    }
    else {

        compteurThemes.textContent +=
            " ✓";

    }

    commencerNoms.disabled =
        nombre < nombreEquipes;
}


/* =========================================================
   PASSAGE AUX NOMS
   ========================================================= */

commencerNoms.addEventListener(
    "click",
    () => {

        if (
            themesDuJeu.length <
            nombreEquipes
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
        new Array(nombreEquipes).fill(0);

    equipeActuelle = 1;

    specialites = [];

    afficherSelection();

    afficherEcran(
        selection
    );
}


/* =========================================================
   CHOIX DES SPÉCIALITÉS
   ========================================================= */

function afficherSelection() {

    grilleThemes.innerHTML = "";

    const equipe =
        equipes[
            equipeActuelle - 1
        ];

    instructionSelection.textContent =
        `${equipe.nom} : choisissez votre spécialité`;

    texteProgression.textContent =
        `Équipe ${equipeActuelle} sur ${nombreEquipes}`;

    progression.style.width =
        `${((equipeActuelle - 1) / nombreEquipes) * 100}%`;

    themesDuJeu.forEach(
        index => {

            const theme =
                themes[index];

            const bouton =
                creerCaseTheme(
                    theme,
                    index
                );

            grilleThemes.appendChild(
                bouton
            );

        }
    );
}


/* =========================================================
   CASE DE SPÉCIALITÉ
   ========================================================= */

function creerCaseTheme(
    theme,
    index
) {

    const bouton =
        document.createElement("button");

    bouton.type = "button";

    bouton.className =
        "jeu-case-theme";

    bouton.style.setProperty(
        "--couleur-theme",
        theme.couleur
    );

    const dejaPris =
        specialites.some(
            specialite =>
                specialite.index === index
        );

    if (
        dejaPris
    ) {

        bouton.disabled = true;

        bouton.classList.add(
            "jeu-pris"
        );

    }

    bouton.innerHTML = `

        <span>
            ${theme.emoji}
        </span>

        <span>
            ${theme.nom}
        </span>

    `;

    if (
        !dejaPris
    ) {

        bouton.addEventListener(
            "click",
            () => {

                choisirTheme(index);

            }
        );

    }

    return bouton;
}


/* =========================================================
   CHOIX D'UNE SPÉCIALITÉ
   ========================================================= */

function choisirTheme(index) {

    const theme =
        themes[index];

    const equipe =
        equipes[
            equipeActuelle - 1
        ];

    specialites.push({

        equipe:
            equipe.numero,

        nomEquipe:
            equipe.nom,

        index:
            index,

        nom:
            theme.nom,

        emoji:
            theme.emoji,

        couleur:
            theme.couleur

    });

    if (
        equipeActuelle >=
        nombreEquipes
    ) {

        afficherRecapitulatif();

        afficherEcran(
            recapitulatif
        );

        return;

    }

    equipeActuelle++;

    afficherSelection();
}


/* =========================================================
   RÉCAPITULATIF
   ========================================================= */

function afficherRecapitulatif() {

    listeEquipes.innerHTML = "";

    specialites.forEach(
        specialite => {

            const element =
                document.createElement("div");

            element.className =
                "jeu-equipe";

            element.innerHTML = `

                <div
                    class="jeu-numero-equipe"
                    style="background:${specialite.couleur}">
                    ${specialite.equipe}
                </div>

                <div>

                    <strong>
                        ${specialite.nomEquipe}
                    </strong>

                    <div class="jeu-specialite">

                        ${specialite.emoji}
                        ${specialite.nom}

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

        equipeActuelle = 1;

        specialites = [];

        scores =
            new Array(nombreEquipes).fill(0);

        afficherSelection();

        afficherEcran(
            selection
        );

    }
);


/* =========================================================
   LANCEMENT DE LA PARTIE
   ========================================================= */

lancer.addEventListener(
    "click",
    lancerPartie
);


function lancerPartie() {

    /*
     * Sécurité
     */

    if (
        equipes.length !== nombreEquipes
    ) {

        return;

    }

    if (
        specialites.length !== nombreEquipes
    ) {

        return;

    }


    equipeQuiJoue = 1;

    scores =
        new Array(nombreEquipes).fill(0);

    caseActuelle = null;

    partieTerminee = false;

    questionPanel.classList.add(
        "jeu-cache"
    );

    terminerPartie.disabled =
        false;

    afficherCouleurs.checked =
        true;

    grilleJeu.classList.remove(
        "jeu-sans-couleurs"
    );

    afficherLegendeThemes();

    creerPlateau();

    afficherEcran(
        jeu
    );

    afficherEquipeQuiJoue();

    afficherScores();

    messageJeu.textContent =
        "Choisissez une case";

}


/* =========================================================
   SLIDER DES COULEURS
   ========================================================= */

afficherCouleurs.addEventListener(
    "change",
    () => {

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

    }
);


/* =========================================================
   CRÉATION DU PLATEAU
   ========================================================= */

function creerPlateau() {

    grilleJeu.innerHTML = "";

    plateau = [];

    for (
        let i = 0;
        i < 100;
        i++
    ) {

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
                    "Aucune question n'est disponible pour ce thème."

            };

        }

        const caseJeu = {

            numero:
                i + 1,

            theme:
                theme,

            indexTheme:
                indexTheme,

            question:
                question.question,

            jouee:
                false

        };

        plateau.push(
            caseJeu
        );


        const bouton =
            document.createElement("button");

        bouton.type = "button";

        bouton.className =
            "jeu-case-plateau";

        bouton.style.setProperty(
            "--couleur-theme",
            theme.couleur
        );

        bouton.dataset.numero =
            caseJeu.numero;

        bouton.textContent =
            caseJeu.numero;

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


/* =========================================================
   ÉQUIPE ASSOCIÉE À UNE SPÉCIALITÉ
   ========================================================= */

function trouverEquipeSpecialite(
    indexTheme
) {

    const specialite =
        specialites.find(
            specialite =>
                specialite.index ===
                indexTheme
        );

    if (
        !specialite
    ) {

        return null;

    }

    return specialite.equipe;
}


/* =========================================================
   CALCUL DES POINTS
   ========================================================= */

function calculerPoints(
    indexTheme
) {

    const equipeSpecialite =
        trouverEquipeSpecialite(
            indexTheme
        );


    if (
        equipeSpecialite ===
        equipeQuiJoue
    ) {

        return 2;

    }


    if (
        equipeSpecialite !== null
    ) {

        return 3;

    }


    return 1;
}


/* =========================================================
   OUVERTURE D'UNE QUESTION
   ========================================================= */

function ouvrirQuestion(
    caseJeu,
    bouton
) {

    if (
        caseJeu.jouee ||
        partieTerminee
    ) {

        return;

    }

    caseActuelle = {

        donnees:
            caseJeu,

        bouton:
            bouton

    };

    const points =
        calculerPoints(
            caseJeu.indexTheme
        );

    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];

    questionTheme.textContent =
        `${caseJeu.theme.emoji} ${caseJeu.theme.nom}`;

    questionTheme.style.background =
        caseJeu.theme.couleur;

    questionNumero.textContent =
        `Case ${caseJeu.numero} / 100`;

    questionTexte.textContent =
        caseJeu.question;

    messageJeu.textContent =
        `🎯 ${equipe.nom} — Bonne réponse : +${points} point${points > 1 ? "s" : ""}`;

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
   TRAITEMENT
   ========================================================= */

function traiterReponse(
    correcte
) {

    if (
        !caseActuelle ||
        partieTerminee
    ) {

        return;

    }

    const caseJeu =
        caseActuelle.donnees;

    const bouton =
        caseActuelle.bouton;

    caseJeu.jouee =
        true;


    if (
        correcte
    ) {

        const points =
            calculerPoints(
                caseJeu.indexTheme
            );

        scores[
            equipeQuiJoue - 1
        ] += points;

        /*
         * IMPORTANT :
         * classes correspondant au CSS
         */

        bouton.classList.add(
            "jeu-case-correcte"
        );

        messageJeu.textContent =
            `✅ Bonne réponse ! +${points} point${points > 1 ? "s" : ""} pour ${equipes[equipeQuiJoue - 1].nom}`;

    }
    else {

        bouton.classList.add(
            "jeu-case-incorrecte"
        );

        messageJeu.textContent =
            `❌ Mauvaise réponse. Aucun point pour ${equipes[equipeQuiJoue - 1].nom}`;

    }


    bouton.classList.add(
        "jeu-case-jouee"
    );

    questionPanel.classList.add(
        "jeu-cache"
    );

    caseActuelle =
        null;

    afficherScores();


    if (
        verifierFinPartie()
    ) {

        return;

    }


    equipeQuiJoue++;

    if (
        equipeQuiJoue >
        nombreEquipes
    ) {

        equipeQuiJoue = 1;

    }

    afficherEquipeQuiJoue();
}


/* =========================================================
   ÉQUIPE QUI JOUE
   ========================================================= */

function afficherEquipeQuiJoue() {

    const equipe =
        equipes[
            equipeQuiJoue - 1
        ];

    const specialite =
        specialites.find(
            specialite =>
                specialite.equipe ===
                equipeQuiJoue
        );

    equipeQuiJoueElement.innerHTML = `

        🎯 Au tour de

        <strong>
            ${equipe.nom}
        </strong>

        <span class="jeu-tour-specialite">

            ${specialite.emoji}
            ${specialite.nom}

        </span>

    `;

    afficherScores();
}


/* =========================================================
   SCORES
   ========================================================= */

function afficherScores() {

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

            const specialite =
                specialites.find(
                    specialite =>
                        specialite.equipe ===
                        equipe.numero
                );

            element.innerHTML = `

                <div class="jeu-score-nom">

                    <strong>
                        ${equipe.nom}
                    </strong>

                    <span>

                        ${specialite.emoji}
                        ${specialite.nom}

                    </span>

                </div>

                <div class="jeu-score-points">

                    ${scores[index]}

                    <small>
                        pts
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
   FIN AUTOMATIQUE
   ========================================================= */

function verifierFinPartie() {

    const nombreCasesJouees =
        plateau.filter(
            caseJeu =>
                caseJeu.jouee
        ).length;

    if (
        nombreCasesJouees ===
        plateau.length
    ) {

        afficherResultatsFinaux();

        return true;

    }

    return false;
}


/* =========================================================
   TERMINER MANUELLEMENT
   ========================================================= */

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


/* =========================================================
   CLASSEMENT FINAL
   ========================================================= */

function afficherResultatsFinaux() {

    partieTerminee = true;

    const classement =
        equipes
            .map(
                (equipe, index) => ({

                    equipe:
                        equipe,

                    score:
                        scores[index]

                })
            )
            .sort(
                (a, b) =>
                    b.score - a.score
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


    questionPanel.classList.add(
        "jeu-cache"
    );


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
                    ${element.score} pts
                </strong>

            `;

            scoresEquipes.appendChild(
                ligne
            );

        }
    );


    messageJeu.textContent =
        "🏆 Partie terminée !";


    terminerPartie.disabled =
        true;
}


/* =========================================================
   CHANGEMENT D'ÉCRAN
   ========================================================= */

function afficherEcran(
    ecran
) {

    const ecrans = [

        configuration,
        nomsEquipes,
        selection,
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


/* =========================================================
   LÉGENDE DES THÈMES
   ========================================================= */

   function afficherLegendeThemes() {

    legendeThemes.innerHTML = "";

    const titre =
        document.createElement("div");

    titre.className =
        "jeu-legende-titre";

    titre.textContent =
        "Code couleur des thèmes";

    legendeThemes.appendChild(
        titre
    );


    const liste =
        document.createElement("div");

    liste.className =
        "jeu-legende-liste";


    themesDuJeu.forEach(
        indexTheme => {

            const theme =
                themes[indexTheme];

            const element =
                document.createElement("div");

            element.className =
                "jeu-legende-element";

            element.innerHTML = `

                <span
                    class="jeu-legende-couleur"
                    style="
                        background-color:
                        ${theme.couleur};
                    "
                ></span>

                <span>
                    ${theme.nom}
                </span>

            `;

            liste.appendChild(
                element
            );

        }
    );


    legendeThemes.appendChild(
        liste
    );
}