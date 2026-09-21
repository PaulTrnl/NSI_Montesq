/*
    ============================================
    MONTESQUÉRIA 2050
    Prototype d'itinéraire

    Principe :
    - chaque bâtiment correspond à un point
    - les rues sont représentées par des connexions
    - Dijkstra cherche le chemin le plus court
    ============================================
*/


// ============================================
// 1. LES BÂTIMENTS
// ============================================

const batiments = {

    gare: {
        nom: "Gare de Montesquéria",
        x: 950,
        y: 145
    },

    mairie: {
        nom: "Mairie",
        x: 345,
        y: 275
    },

    lycee: {
        nom: "Lycée Montesquieu",
        x: 480,
        y: 575
    },

    hopital: {
        nom: "Hôpital Saint-Martin",
        x: 930,
        y: 395
    },

    mediatheque: {
        nom: "Médiathèque Jules Verne",
        x: 195,
        y: 450
    },

    stade: {
        nom: "Stade Montesquéria FC",
        x: 880,
        y: 640
    },

    theatre: {
        nom: "Théâtre municipal",
        x: 155,
        y: 285
    },

    piscine: {
        nom: "Piscine Aquapolis",
        x: 1065,
        y: 540
    }
};


// ============================================
// 2. LE GRAPHE DE LA VILLE
// ============================================

/*
    Chaque bâtiment est relié à certains autres.

    Le poids représente approximativement
    la distance entre les deux points.
*/

const graphe = {

    gare: {
        mairie: 620,
        hopital: 430
    },

    mairie: {
        gare: 620,
        lycee: 330,
        mediatheque: 230,
        theatre: 190
    },

    lycee: {
        mairie: 330,
        hopital: 480,
        stade: 410
    },

    hopital: {
        gare: 430,
        lycee: 480,
        stade: 270,
        piscine: 260
    },

    mediatheque: {
        mairie: 230,
        theatre: 180
    },

    theatre: {
        mairie: 190,
        mediatheque: 180
    },

    stade: {
        lycee: 410,
        hopital: 270,
        piscine: 250
    },

    piscine: {
        hopital: 260,
        stade: 250
    }
};


// ============================================
// 3. VARIABLES
// ============================================

let depart = null;
let arrivee = null;


// ============================================
// 4. RÉCUPÉRATION DES ÉLÉMENTS HTML
// ============================================

const instruction =
    document.getElementById("instruction");

const departureElement =
    document.getElementById("departure");

const arrivalElement =
    document.getElementById("arrival");

const routeInfo =
    document.getElementById("routeInfo");

const routeLine =
    document.getElementById("routeLine");

const result =
    document.getElementById("result");

const distanceElement =
    document.getElementById("distance");


// ============================================
// 5. CLIC SUR UN BÂTIMENT
// ============================================

document.querySelectorAll(".building").forEach(
    building => {

        building.addEventListener("click", () => {

            const id = building.dataset.id;

            choisirBatiment(id, building);
        });
    }
);


// ============================================
// 6. CHOIX DU BÂTIMENT
// ============================================

function choisirBatiment(id, element) {

    // Premier clic : départ
    if (depart === null) {

        depart = id;

        element.classList.add("selected");

        departureElement.textContent =
            batiments[id].nom;

        instruction.textContent =
            "Cliquez sur un bâtiment pour choisir l'arrivée.";

        return;
    }


    // Deuxième clic : arrivée
    if (arrivee === null && id !== depart) {

        arrivee = id;

        element.classList.add("selected");

        arrivalElement.textContent =
            batiments[id].nom;

        instruction.textContent =
            "Calcul de l'itinéraire...";

        calculerItineraire();

        return;
    }
}


// ============================================
// 7. DIJKSTRA
// ============================================

function dijkstra(depart, arrivee) {

    const distances = {};
    const precedents = {};
    const nonVisites = [];

    // Initialisation
    for (const sommet in graphe) {

        distances[sommet] = Infinity;
        precedents[sommet] = null;

        nonVisites.push(sommet);
    }

    distances[depart] = 0;


    // Recherche
    while (nonVisites.length > 0) {

        // Cherche le sommet avec la plus petite distance
        let actuel = nonVisites[0];

        for (const sommet of nonVisites) {

            if (distances[sommet] <
                distances[actuel]) {

                actuel = sommet;
            }
        }


        // Si on atteint l'arrivée
        if (actuel === arrivee) {
            break;
        }


        // Retire le sommet de la liste
        const index =
            nonVisites.indexOf(actuel);

        nonVisites.splice(index, 1);


        // Examine les voisins
        for (const voisin in graphe[actuel]) {

            const distance =
                distances[actuel]
                + graphe[actuel][voisin];


            if (distance < distances[voisin]) {

                distances[voisin] = distance;

                precedents[voisin] = actuel;
            }
        }
    }


    // ========================================
    // Reconstruction du chemin
    // ========================================

    const chemin = [];

    let actuel = arrivee;

    while (actuel !== null) {

        chemin.unshift(actuel);

        actuel = precedents[actuel];
    }

    return {
        chemin: chemin,
        distance: distances[arrivee]
    };
}


// ============================================
// 8. CALCUL DE L'ITINÉRAIRE
// ============================================

function calculerItineraire() {

    const resultat =
        dijkstra(depart, arrivee);


    // Affichage
    dessinerItineraire(resultat.chemin);


    const distance =
        Math.round(resultat.distance);


    distanceElement.textContent =
        `${distance} m • environ ${Math.ceil(distance / 80)} min à pied`;

    routeInfo.textContent =
        `${distance} m`;


    result.classList.remove("hidden");

    instruction.textContent =
        "Itinéraire calculé !";
}


// ============================================
// 9. DESSIN DE L'ITINÉRAIRE
// ============================================

function dessinerItineraire(chemin) {

    const points = chemin.map(id => {

        return `${batiments[id].x},${batiments[id].y}`;

    });


    routeLine.setAttribute(
        "points",
        points.join(" ")
    );
}


// ============================================
// 10. RÉINITIALISATION
// ============================================

function reinitialiser() {

    depart = null;
    arrivee = null;

    routeLine.setAttribute(
        "points",
        ""
    );

    document
        .querySelectorAll(".building")
        .forEach(element => {

            element.classList.remove("selected");
        });


    departureElement.textContent = "—";
    arrivalElement.textContent = "—";

    routeInfo.textContent = "";

    result.classList.add("hidden");

    instruction.textContent =
        "Cliquez sur un bâtiment pour choisir le départ.";
}


document
    .getElementById("resetBtn")
    .addEventListener("click", reinitialiser);

document
    .getElementById("clearBtn")
    .addEventListener("click", reinitialiser);


// ============================================
// 11. AFFICHAGE DU RÉSEAU
// ============================================

document
    .getElementById("networkBtn")
    .addEventListener("click", () => {

        const network =
            document.getElementById("networkLayer");

        network.classList.toggle("visible");

    });