/* =========================================================
   CONQUÊTE NSI
   ========================================================= */


/* =========================================================
   THÈMES
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
   VARIABLES
   ========================================================= */

let nombreEquipes = 4;

let equipeActuelle = 1;

let equipes = [];

let specialites = [];

let themesDuJeu = [];

let scores = [];

let territoires = [];

let territoireActuel = null;

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
   ÉLÉMENTS HTML
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

const carteConquete =
    document.getElementById("carte-conquete");

const messageJeu =
    document.getElementById("message-jeu");

const equipeQuiJoueElement =
    document.getElementById("equipe-qui-joue");

const scoresEquipes =
    document.getElementById("scores-equipes");

const questionPanel =
    document.getElementById("question-panel");

const questionTheme =
    document.getElementById("question-theme");

const questionTerritoire =
    document.getElementById("question-territoire");

const questionTexte =
    document.getElementById("question-texte");

const legendeTerritoires =
    document.getElementById("legende-territoires");

const fermerQuestion =
    document.getElementById("fermer-question");

const terminerPartie =
    document.getElementById("terminer-partie");

const compteurThemes =
    document.getElementById("compteur-themes");

const listeThemesConfiguration =
    document.getElementById(
        "liste-themes-configuration"
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
   THÈMES
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

                    if (
                        themesDuJeu.includes(index)
                    ) {

                        themesDuJeu =
                            themesDuJeu.filter(
                                i => i !== index
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

                }
            );

            listeThemesConfiguration.appendChild(
                bouton
            );

        }
    );

}


function mettreAJourCompteurThemes() {

    const nombre =
        themesDuJeu.length;

    compteurThemes.textContent =
        `${nombre} thème${nombre > 1 ? "s" : ""} sélectionné${nombre > 1 ? "s" : ""}`;

    commencerNoms.disabled =
        nombre < nombreEquipes;

}


/* =========================================================
   NOMS DES ÉQUIPES
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

                <label>
                    Équipe ${i}
                </label>

                <input
                    id="equipe-${i}"
                    maxlength="25"
                    type="text"
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
);


/* =========================================================
   VALIDATION DES NOMS
   ========================================================= */

validerNoms.addEventListener(
    "click",
    () => {

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

            if (!nom) {

                input.focus();

                return;

            }

            equipes.push({

                numero: i,

                nom: nom,

                couleur:
                    couleursEquipes[i - 1]

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
);


/* =========================================================
   SPÉCIALITÉS
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
                document.createElement("button");

            bouton.type = "button";

            bouton.className =
                "jeu-case-theme";

            bouton.style.setProperty(
                "--couleur-theme",
                theme.couleur
            );

            const pris =
                specialites.some(
                    s => s.index === index
                );

            if (pris) {

                bouton.classList.add(
                    "jeu-pris"
                );

                bouton.disabled = true;

            }

            bouton.innerHTML = `

                <span>
                    ${theme.emoji}
                </span>

                <strong>
                    ${theme.nom}
                </strong>

            `;

            if (!pris) {

                bouton.addEventListener(
                    "click",
                    () => {

                        choisirSpecialite(
                            index
                        );

                    }
                );

            }

            grilleThemes.appendChild(
                bouton
            );

        }
    );

}


function choisirSpecialite(index) {

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
        equipeActuelle ===
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
                    style="
                        background:
                        ${equipes[
                            specialite.equipe - 1
                        ].couleur};
                    "
                >
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
   MODIFIER
   ========================================================= */

modifier.addEventListener(
    "click",
    () => {

        equipeActuelle = 1;

        specialites = [];

        afficherSelection();

        afficherEcran(
            selection
        );

    }
);


/* =========================================================
   LANCER
   ========================================================= */

lancer.addEventListener(
    "click",
    lancerPartie
);


function lancerPartie() {

    scores =
        new Array(nombreEquipes).fill(0);

    equipeActuelle = 1;

    territoireActuel = null;

    partieTerminee = false;

    questionPanel.classList.add(
        "jeu-cache"
    );

    terminerPartie.disabled = false;

    creerTerritoires();

    afficherLegende();

    afficherScores();

    afficherEquipe();

    afficherEcran(
        jeu
    );

}


/* =========================================================
   CRÉATION DES TERRITOIRES
   ========================================================= */

function creerTerritoires() {

    carteConquete.innerHTML = "";

    territoires = [];


    /*
     * Première carte :
     * 36 territoires.
     *
     * Les coordonnées sont volontairement
     * irrégulières pour donner un aspect
     * plateau de jeu.
     */

    const formes = [

        [40,40, 150,30, 270,55, 250,145, 120,150],

        [270,55, 390,25, 500,65, 470,155, 250,145],

        [500,65, 630,35, 750,75, 720,160, 470,155],

        [750,75, 900,45, 965,130, 910,220, 720,160],

        [25,165, 120,150, 250,145, 225,250, 105,265],

        [250,145, 470,155, 450,250, 225,250],

        [470,155, 720,160, 700,255, 450,250],

        [720,160, 910,220, 875,305, 700,255],

        [105,265, 225,250, 210,360, 85,380, 30,320],

        [225,250, 450,250, 430,360, 210,360],

        [450,250, 700,255, 675,365, 430,360],

        [700,255, 875,305, 900,390, 675,365],

        [85,380, 210,360, 220,470, 100,500, 40,440],

        [210,360, 430,360, 445,475, 220,470],

        [430,360, 675,365, 660,480, 445,475],

        [675,365, 900,390, 950,475, 850,530, 660,480],

        [100,500, 220,470, 250,590, 120,635, 50,565],

        [220,470, 445,475, 460,590, 250,590],

        [445,475, 660,480, 650,600, 460,590],

        [660,480, 850,530, 900,625, 650,600],

        [120,635, 250,590, 300,675, 170,690],

        [250,590, 460,590, 470,680, 300,675],

        [460,590, 650,600, 620,685, 470,680],

        [650,600, 900,625, 850,685, 620,685],

        [40,40, 120,150, 25,165, 20,90],

        [120,150, 250,145, 225,250, 105,265],

        [25,165, 105,265, 30,320, 10,220],

        [30,320, 85,380, 40,440, 5,365],

        [40,440, 100,500, 50,565, 10,500],

        [50,565, 120,635, 170,690, 70,680],

        [900,45, 965,130, 910,220, 900,150],

        [910,220, 875,305, 900,390, 980,330],

        [900,390, 950,475, 850,530, 900,625, 980,560],

        [900,625, 850,685, 950,680, 980,640],

        [170,690, 300,675, 470,680, 500,700, 150,700],

        [620,685, 850,685, 950,680, 900,700, 600,700]

    ];


    formes.forEach(
        (points, index) => {

            const polygon =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "polygon"
                );

            const coordonnees = [];

            for (
                let i = 0;
                i < points.length;
                i += 2
            ) {

                coordonnees.push(
                    `${points[i]},${points[i + 1]}`
                );

            }

            polygon.setAttribute(
                "points",
                coordonnees.join(" ")
            );

            polygon.classList.add(
                "territoire"
            );

            polygon.dataset.id =
                index;

            polygon.addEventListener(
                "click",
                () => {

                    cliquerTerritoire(
                        index,
                        polygon
                    );

                }
            );

            carteConquete.appendChild(
                polygon
            );


            territoires.push({

                id:
                    index,

                equipe:
                    null,

                element:
                    polygon,

                question:
                    choisirQuestion()

            });

        }
    );

}


/* =========================================================
   QUESTION ALÉATOIRE
   ========================================================= */

function choisirQuestion() {

    const disponibles =
        questions.filter(
            question =>
                themesDuJeu.some(
                    index =>
                        themes[index].nom ===
                        question.theme
                )
        );

    if (
        disponibles.length === 0
    ) {

        return {

            theme: "NSI",

            question:
                "Question indisponible.",

            reponses: [
                "A",
                "B",
                "C",
                "D"
            ],

            bonneReponse: 0

        };

    }

    return disponibles[
        Math.floor(
            Math.random() *
            disponibles.length
        )
    ];

}


/* =========================================================
   TERRITOIRE CLIQUÉ
   ========================================================= */

function cliquerTerritoire(
    id,
    element
) {

    if (partieTerminee) {
        return;
    }

    if (territoireActuel !== null) {
        return;
    }

    const territoire =
        territoires[id];


    /*
     * Territoire déjà conquis :
     * pour cette première version,
     * on ne peut pas l'attaquer.
     */

    if (
        territoire.equipe !== null
    ) {

        return;

    }


    /*
     * Premier territoire :
     * libre.
     */

    if (
        !aTerritoireEquipe(
            equipeActuelle
        )
    ) {

        ouvrirQuestion(
            territoire
        );

        return;

    }


    /*
     * Ensuite :
     * il faut être adjacent.
     */

    if (
        !estAdjacent(
            id,
            equipeActuelle
        )
    ) {

        messageJeu.textContent =
            "⚠️ Vous devez choisir un territoire adjacent à votre territoire.";

        element.classList.add(
            "territoire-refus"
        );

        setTimeout(
            () => {

                element.classList.remove(
                    "territoire-refus"
                );

            },
            500
        );

        return;

    }


    ouvrirQuestion(
        territoire
    );

}


/* =========================================================
   OUVRIR QUESTION
   ========================================================= */

function ouvrirQuestion(
    territoire
) {

    territoireActuel =
        territoire;

    const question =
        territoire.question;

    questionTheme.textContent =
        question.theme;

    const theme =
        themes.find(
            t =>
                t.nom ===
                question.theme
        );

    if (theme) {

        questionTheme.style.background =
            theme.couleur;

    }

    questionTerritoire.textContent =
        `Territoire ${territoire.id + 1}`;

    questionTexte.textContent =
        question.question;


    const boutons = [

        document.getElementById(
            "reponse-a"
        ),

        document.getElementById(
            "reponse-b"
        ),

        document.getElementById(
            "reponse-c"
        ),

        document.getElementById(
            "reponse-d"
        )

    ];


    boutons.forEach(
        (bouton, index) => {

            bouton.textContent =
                `${String.fromCharCode(65 + index)}. ${
                    question.reponses[index]
                }`;

            bouton.disabled = false;

            bouton.classList.remove(
                "bonne",
                "mauvaise"
            );

            bouton.onclick = () => {

                traiterReponse(
                    index
                );

            };

        }
    );


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
   RÉPONSE
   ========================================================= */

function traiterReponse(
    index
) {

    if (
        !territoireActuel
    ) {

        return;

    }

    const question =
        territoireActuel.question;

    const boutons = [

        document.getElementById("reponse-a"),
        document.getElementById("reponse-b"),
        document.getElementById("reponse-c"),
        document.getElementById("reponse-d")

    ];

    boutons.forEach(
        bouton => {
            bouton.disabled = true;
        }
    );


    const correcte =
        index ===
        question.bonneReponse;


    if (correcte) {

        conquérirTerritoire();

    }

    else {

        boutons[index].classList.add(
            "mauvaise"
        );

        boutons[
            question.bonneReponse
        ].classList.add(
            "bonne"
        );

        messageJeu.textContent =
            `❌ Mauvaise réponse. Le territoire reste neutre.`;

        setTimeout(
            fermerQuestionEtContinuer,
            1400
        );

    }

}


/* =========================================================
   CONQUÊTE
   ========================================================= */

function conquérirTerritoire() {

    const territoire =
        territoireActuel;

    territoire.equipe =
        equipeActuelle;


    territoire.element.style.setProperty(
        "--couleur-equipe",
        equipes[
            equipeActuelle - 1
        ].couleur
    );

    territoire.element.classList.add(
        "territoire-conquis"
    );


    scores[
        equipeActuelle - 1
    ]++;


    messageJeu.textContent =
        `🏆 ${equipes[equipeActuelle - 1].nom} conquiert le territoire !`;


    afficherScores();


    setTimeout(
        () => {

            fermerQuestionEtContinuer();

        },
        1000
    );

}


/* =========================================================
   FERMER QUESTION
   ========================================================= */

fermerQuestion.addEventListener(
    "click",
    () => {

        if (
            territoireActuel
        ) {

            territoireActuel =
                null;

        }

        questionPanel.classList.add(
            "jeu-cache"
        );

    }
);


function fermerQuestionEtContinuer() {

    questionPanel.classList.add(
        "jeu-cache"
    );

    territoireActuel =
        null;


    if (
        verifierFinPartie()
    ) {

        return;

    }


    equipeActuelle++;

    if (
        equipeActuelle >
        nombreEquipes
    ) {

        equipeActuelle = 1;

    }


    afficherEquipe();

}


/* =========================================================
   ADJACENCE
   ========================================================= */

function estAdjacent(
    id,
    equipe
) {

    /*
     * Première approximation :
     * les territoires sont voisins
     * lorsque leur numéro est proche.
     *
     * Cette fonction sera remplacée
     * par une vraie définition des
     * frontières dans la prochaine version.
     */

    const possedes =
        territoires.filter(
            t =>
                t.equipe === equipe
        );

    return possedes.some(
        territoire =>
            Math.abs(
                territoire.id - id
            ) <= 5
    );

}


/* =========================================================
   L'ÉQUIPE POSSÈDE-T-ELLE UN TERRITOIRE ?
   ========================================================= */

function aTerritoireEquipe(
    equipe
) {

    return territoires.some(
        territoire =>
            territoire.equipe === equipe
    );

}


/* =========================================================
   ÉQUIPE ACTUELLE
   ========================================================= */

function afficherEquipe() {

    const equipe =
        equipes[
            equipeActuelle - 1
        ];

    const specialite =
        specialites.find(
            s =>
                s.equipe ===
                equipeActuelle
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
                equipeActuelle
            ) {

                element.classList.add(
                    "jeu-equipe-active"
                );

            }


            element.style.setProperty(
                "--couleur-equipe",
                equipe.couleur
            );


            element.innerHTML = `

                <div class="jeu-score-nom">

                    <strong>
                        ${equipe.nom}
                    </strong>

                </div>

                <div class="jeu-score-points">

                    ${scores[index]}

                    <small>
                        territoires
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
   LÉGENDE
   ========================================================= */

function afficherLegende() {

    legendeTerritoires.innerHTML = "";

    equipes.forEach(
        equipe => {

            const element =
                document.createElement("div");

            element.className =
                "jeu-legende-equipe";

            element.innerHTML = `

                <span
                    class="jeu-legende-couleur"
                    style="
                        background:
                        ${equipe.couleur};
                    ">
                </span>

                <span>
                    ${equipe.nom}
                </span>

            `;

            legendeTerritoires.appendChild(
                element
            );

        }
    );


    const neutre =
        document.createElement("div");

    neutre.className =
        "jeu-legende-equipe";

    neutre.innerHTML = `

        <span
            class="jeu-legende-couleur
                   jeu-legende-neutre">
        </span>

        <span>
            Territoire neutre
        </span>

    `;

    legendeTerritoires.appendChild(
        neutre
    );

}


/* =========================================================
   FIN AUTOMATIQUE
   ========================================================= */

function verifierFinPartie() {

    const restants =
        territoires.filter(
            territoire =>
                territoire.equipe === null
        );


    if (
        restants.length === 0
    ) {

        afficherResultatsFinaux();

        return true;

    }

    return false;

}


/* =========================================================
   TERMINER
   ========================================================= */

terminerPartie.addEventListener(
    "click",
    afficherResultatsFinaux
);


function afficherResultatsFinaux() {

    partieTerminee = true;

    questionPanel.classList.add(
        "jeu-cache"
    );

    territoires.forEach(
        territoire => {

            territoire.element.style.cursor =
                "default";

        }
    );


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


    scoresEquipes.innerHTML = "";


    classement.forEach(
        (element, index) => {

            const ligne =
                document.createElement("div");

            ligne.className =
                "jeu-classement-ligne";


            let medaille = "";

            if (index === 0)
                medaille = "🥇";

            else if (index === 1)
                medaille = "🥈";

            else if (index === 2)
                medaille = "🥉";


            ligne.innerHTML = `

                <span>

                    ${medaille}

                    <strong>
                        ${index + 1}.
                        ${element.equipe.nom}
                    </strong>

                </span>

                <strong>

                    ${element.score}

                    territoire${
                        element.score > 1
                        ? "s"
                        : ""
                    }

                </strong>

            `;


            scoresEquipes.appendChild(
                ligne
            );

        }
    );


    equipeQuiJoueElement.innerHTML = `

        🏁

        <strong>
            Partie terminée
        </strong>

    `;


    messageJeu.textContent =
        "🏆 La conquête est terminée !";

    terminerPartie.disabled =
        true;

}


/* =========================================================
   CHANGEMENT D'ÉCRAN
   ========================================================= */

function afficherEcran(
    ecran
) {

    [

        configuration,
        nomsEquipes,
        selection,
        recapitulatif,
        jeu

    ].forEach(
        element => {

            element.classList.add(
                "jeu-cache"
            );

        }
    );


    ecran.classList.remove(
        "jeu-cache"
    );


    document
        .querySelector(".mur-nsi")
        .scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

}