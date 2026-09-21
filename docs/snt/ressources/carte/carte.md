<style>

/* =========================================================
   MONTESQUÉRIA 2050
   ========================================================= */

.montesqueria-app {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    color: #263746;
    font-family: Arial, Helvetica, sans-serif;
}


/* =========================================================
   EN-TÊTE
   ========================================================= */

.montesqueria-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    padding: 22px 26px;

    background: #0f2a4d;
    color: white;

    border-radius: 12px;
    margin-bottom: 14px;
}

.montesqueria-header h1 {
    margin: 3px 0 2px;
    font-size: 1.9rem;
    color: white;
}

.montesqueria-header p {
    margin: 0;
    opacity: 0.78;
}

.montesqueria-kicker {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.7;
}

.montesqueria-status {
    padding: 8px 12px;
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 20px;
    font-size: 0.8rem;
}


/* =========================================================
   INFO
   ========================================================= */

.montesqueria-info {
    padding: 12px 16px;

    background: #f3f6f9;
    border: 1px solid #dbe3ea;

    border-radius: 8px;
    margin-bottom: 14px;

    font-size: 0.9rem;
}


/* =========================================================
   LAYOUT
   ========================================================= */

.montesqueria-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 14px;
    align-items: start;
}


/* =========================================================
   CARTE
   ========================================================= */

.montesqueria-map-card {
    min-width: 0;

    background: white;
    border: 1px solid #dbe3ea;

    border-radius: 12px;
    overflow: hidden;
}

.map-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    padding: 13px 16px;

    border-bottom: 1px solid #e2e8ed;
}

.map-toolbar strong {
    display: block;
}

#mapInstruction {
    display: block;
    margin-top: 3px;

    font-size: 0.78rem;
    color: #6a7885;
}

.map-button {
    border: 1px solid #c9d3dc;
    background: white;

    border-radius: 7px;

    padding: 8px 12px;

    cursor: pointer;
    font-size: 0.82rem;
}

.map-button:hover {
    background: #f3f6f9;
}

.map-container {
    width: 100%;
    background: #dce8df;
}

#cityMap {
    display: block;

    width: 100%;
    height: auto;
}


/* =========================================================
   FOND
   ========================================================= */

.city-background {
    fill: #eef2ef;
}

.park-area {
    fill: #d7e5d7;
    stroke: #c0d2c0;
    stroke-width: 2;
}

.water-area {
    fill: #dcebf3;
    stroke: #bdd3df;
    stroke-width: 2;
}


/* =========================================================
   ROUTES
   ========================================================= */

.road {
    fill: none;

    stroke: #ffffff;
    stroke-width: 20;

    stroke-linecap: round;
    stroke-linejoin: round;
}

.road-major {
    stroke: #c7cdd2;
    stroke-width: 22;
}

.road-minor {
    stroke: #d4d9dd;
    stroke-width: 15;
}

.road-edge {
    fill: none;

    stroke: #aeb8c0;
    stroke-width: 1.5;
}


/* =========================================================
   ITINÉRAIRES
   ========================================================= */

.route {
    fill: none;

    stroke-linecap: round;
    stroke-linejoin: round;

    pointer-events: none;
}

.route-active {
    stroke: #c93b32;
    stroke-width: 9;
}

.route-alternative {
    stroke: #d28b38;
    stroke-width: 6;

    stroke-dasharray: 14 10;
    opacity: 0.8;
}


/* =========================================================
   BÂTIMENTS
   ========================================================= */

.building {
    cursor: pointer;
}

.building-shape {
    filter: url(#buildingShadow);
}

.building:hover .building-shape {
    stroke: #315f88;
    stroke-width: 3;
}

.building.selected-departure .building-shape {
    stroke: #c93b32;
    stroke-width: 4;
}

.building.selected-arrival .building-shape {
    stroke: #315f88;
    stroke-width: 4;
}

.building-label {
    font-size: 15px;
    font-weight: 600;

    fill: #263746;

    paint-order: stroke;
    stroke: white;
    stroke-width: 5;
    stroke-linejoin: round;

    pointer-events: none;
}


/* =========================================================
   LÉGENDE
   ========================================================= */

.map-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    padding: 11px 15px;

    border-top: 1px solid #e1e7eb;

    font-size: 0.76rem;
    color: #64727e;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 7px;
}

.legend-line {
    width: 25px;
    height: 4px;
    border-radius: 4px;
}

.legend-line.road-major {
    background: #c7cdd2;
}

.legend-line.route-active {
    background: #c93b32;
}

.legend-zone {
    width: 24px;
    height: 15px;

    border: 2px dashed #557da1;
    border-radius: 4px;

    background: rgba(85,125,161,0.12);
}


/* =========================================================
   PANNEAU
   ========================================================= */

.montesqueria-panel {
    display: flex;
    flex-direction: column;
    gap: 14px;

    min-width: 0;
}

.panel-card {
    padding: 16px;

    background: white;

    border: 1px solid #dbe3ea;
    border-radius: 10px;
}

.panel-card-title {
    font-size: 0.82rem;

    text-transform: uppercase;
    letter-spacing: 0.08em;

    color: #55708a;

    font-weight: 700;

    margin-bottom: 14px;
}


/* =========================================================
   SÉLECTION
   ========================================================= */

.selection-block {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 8px;
}

.selection-item {
    min-width: 0;
}

.selection-label {
    display: block;

    font-size: 0.7rem;
    text-transform: uppercase;

    color: #84919c;

    margin-bottom: 3px;
}

.selection-item strong {
    display: block;

    font-size: 0.82rem;

    overflow-wrap: anywhere;
}

.selection-arrow {
    color: #84919c;
}

.route-result {
    margin-top: 15px;

    padding: 12px;

    background: #f4f7f9;
    border-radius: 7px;

    font-size: 0.82rem;
    line-height: 1.45;
}

.route-options {
    display: flex;
    flex-direction: column;
    gap: 7px;

    margin-top: 10px;
}

.route-option {
    width: 100%;

    text-align: left;

    border: 1px solid #dbe3ea;
    background: white;

    padding: 9px 10px;

    border-radius: 7px;

    cursor: pointer;

    font-size: 0.78rem;
}

.route-option:hover {
    background: #f4f7f9;
}

.route-option.active {
    border-color: #c93b32;
    background: #fff7f6;
}


/* =========================================================
   RÉSEAU
   ========================================================= */

.network-toggle {
    display: flex;
    align-items: center;
    gap: 9px;

    cursor: pointer;

    font-size: 0.86rem;
    font-weight: 600;
}

.network-toggle input {
    width: 17px;
    height: 17px;
}

.panel-description {
    margin: 12px 0 0;

    font-size: 0.78rem;
    line-height: 1.5;

    color: #6b7883;
}


/* =========================================================
   CONSIGNES
   ========================================================= */

.instruction-list {
    margin: 0;
    padding-left: 20px;

    font-size: 0.82rem;
    line-height: 1.65;

    color: #52616d;
}


/* =========================================================
   RÉSEAU SUR LA CARTE
   ========================================================= */

.network-layer {
    display: none;
}

.network-layer.visible {
    display: block;
}

.network-zone {
    fill: rgba(67, 107, 143, 0.10);

    stroke: #557da1;
    stroke-width: 2;

    stroke-dasharray: 9 7;

    cursor: pointer;
}

.network-zone:hover {
    fill: rgba(67, 107, 143, 0.20);
}

.network-zone-label {
    font-size: 13px;
    font-weight: 700;

    fill: #315875;

    pointer-events: none;
}

.network-router {
    fill: #315875;
    stroke: white;
    stroke-width: 2;
}

.network-switch {
    fill: white;

    stroke: #315875;
    stroke-width: 2;
}

.network-link {
    stroke: #557da1;
    stroke-width: 3;

    stroke-dasharray: 7 6;

    opacity: 0.75;
}


/* =========================================================
   FENÊTRE RÉSEAU LOCAL
   ========================================================= */

.network-modal {
    position: fixed;

    inset: 0;

    z-index: 1000;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 25px;

    background: rgba(18, 31, 43, 0.65);
}

.network-modal[hidden] {
    display: none;
}

.network-dialog {
    width: min(1200px, 100%);

    max-height: 94vh;

    background: white;

    border-radius: 14px;

    overflow: hidden;

    box-shadow: 0 20px 60px rgba(0,0,0,0.3);

    display: flex;
    flex-direction: column;
}

.network-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    padding: 18px 22px;

    background: #0f2a4d;

    color: white;
}

.network-dialog-kicker {
    font-size: 0.7rem;

    text-transform: uppercase;
    letter-spacing: 0.12em;

    opacity: 0.7;
}

.network-dialog-header h2 {
    margin: 3px 0;

    color: white;

    font-size: 1.45rem;
}

.network-dialog-header p {
    margin: 0;

    font-family: monospace;

    opacity: 0.8;
}

.close-network-button {
    flex-shrink: 0;

    border: 1px solid rgba(255,255,255,0.35);

    background: transparent;

    color: white;

    border-radius: 7px;

    padding: 8px 12px;

    cursor: pointer;
}

.close-network-button:hover {
    background: rgba(255,255,255,0.1);
}


/* =========================================================
   DÉTAIL RÉSEAU
   ========================================================= */

.network-dialog-body {
    display: grid;

    grid-template-columns: minmax(0, 1fr) 300px;

    min-height: 0;

    overflow: auto;
}

.network-detail-map {
    min-width: 0;

    padding: 18px;

    background: #f4f7f9;
}

#networkDetailMap {
    display: block;

    width: 100%;
    height: auto;

    background: white;

    border: 1px solid #dbe3ea;
    border-radius: 9px;
}


/* =========================================================
   TOPOLOGIE
   ========================================================= */

.detail-link {
    stroke: #7c8994;
    stroke-width: 4;
    stroke-linecap: round;
}

.detail-device {
    cursor: pointer;
}

.detail-device:hover .device-body {
    stroke: #c93b32;
    stroke-width: 3;
}

.device-body {
    fill: white;

    stroke: #315875;
    stroke-width: 2;
}

.device-router .device-body {
    fill: #315875;
}

.device-switch .device-body {
    fill: #eaf0f5;
}

.device-server .device-body {
    fill: #e6edf2;
}

.device-printer .device-body {
    fill: #f2f2f2;
}

.device-screen .device-body {
    fill: #eef2f5;
}

.device-label {
    font-size: 14px;
    font-weight: 600;

    fill: #263746;

    text-anchor: middle;

    pointer-events: none;
}

.device-ip {
    font-size: 11px;

    fill: #71808c;

    text-anchor: middle;

    pointer-events: none;
}


/* =========================================================
   SIDEBAR DETAIL
   ========================================================= */

.network-detail-sidebar {
    padding: 16px;

    border-left: 1px solid #dbe3ea;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 12px;
}

.detail-card {
    padding: 13px;

    border: 1px solid #dbe3ea;

    border-radius: 8px;

    background: white;
}

.detail-card h3 {
    margin: 0 0 11px;

    font-size: 0.84rem;

    color: #315875;
}

.network-dl {
    margin: 0;
}

.network-dl div {
    display: grid;

    grid-template-columns: 1fr auto;

    gap: 8px;

    padding: 6px 0;

    border-bottom: 1px solid #edf0f2;
}

.network-dl div:last-child {
    border-bottom: none;
}

.network-dl dt {
    color: #77848e;
    font-size: 0.75rem;
}

.network-dl dd {
    margin: 0;

    font-family: monospace;

    font-size: 0.75rem;
}


/* =========================================================
   ÉQUIPEMENTS
   ========================================================= */

.equipment-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.equipment-item {
    padding: 7px 8px;

    border-radius: 6px;

    background: #f4f7f9;

    font-size: 0.74rem;

    cursor: pointer;
}

.equipment-item:hover {
    background: #e9eef2;
}

.equipment-name {
    font-weight: 700;
}

.equipment-ip {
    margin-top: 2px;

    font-family: monospace;

    color: #71808c;
}

.selected-equipment {
    min-height: 60px;

    font-size: 0.77rem;

    line-height: 1.5;

    color: #5e6c77;
}

.selected-equipment strong {
    display: block;

    color: #263746;

    margin-bottom: 4px;
}

.observation-card {
    background: #f5f8fa;
}

.observation-card p {
    margin: 0;

    font-size: 0.77rem;

    line-height: 1.5;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1050px) {

    .montesqueria-layout {
        grid-template-columns: 1fr;
    }

    .montesqueria-panel {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .panel-card:last-child {
        grid-column: 1 / -1;
    }

    .network-dialog-body {
        grid-template-columns: 1fr;
    }

    .network-detail-sidebar {
        border-left: none;
        border-top: 1px solid #dbe3ea;

        display: grid;

        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .observation-card {
        grid-column: 1 / -1;
    }
}


@media (max-width: 700px) {

    .montesqueria-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .montesqueria-header h1 {
        font-size: 1.5rem;
    }

    .montesqueria-panel {
        grid-template-columns: 1fr;
    }

    .panel-card:last-child {
        grid-column: auto;
    }

    .network-dialog {
        max-height: 96vh;
    }

    .network-modal {
        padding: 10px;
    }

    .network-dialog-header {
        padding: 14px;
    }

    .network-dialog-body {
        display: block;
    }

    .network-detail-sidebar {
        display: block;
    }

    .detail-card {
        margin-bottom: 10px;
    }

    .map-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .selection-block {
        grid-template-columns: 1fr;
    }

    .selection-arrow {
        display: none;
    }
}

</style>


<div class="montesqueria-app">

<header class="montesqueria-header">

    <div>
        <div class="montesqueria-kicker">Projet SNT</div>

        <h1>Montesquéria 2050</h1>

        <p>Carte interactive de la ville</p>
    </div>

    <div class="montesqueria-status">
        Carte interactive
    </div>

</header>


<div class="montesqueria-info">

    <strong>Itinéraire :</strong>
    cliquez sur deux bâtiments pour calculer un trajet.
    Activez ensuite le réseau informatique pour explorer les réseaux locaux.

</div>


<main class="montesqueria-layout">


<section class="montesqueria-map-card">


<div class="map-toolbar">

    <div>

        <strong>Carte de Montesquéria</strong>

        <span id="mapInstruction">
            Sélectionnez un bâtiment de départ.
        </span>

    </div>

    <button id="resetMap" class="map-button">
        Réinitialiser
    </button>

</div>


<div class="map-container">

<svg
    id="cityMap"
    viewBox="0 0 1200 760"
    role="img"
    aria-label="Carte interactive de Montesquéria"
>

<defs>

    <filter
        id="buildingShadow"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
    >

        <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            flood-opacity="0.18"
        />

    </filter>

</defs>


<rect
    x="0"
    y="0"
    width="1200"
    height="760"
    class="city-background"
/>


<path
    class="park-area"
    d="M40 90
       C150 40 250 70 310 115
       C350 145 335 210 280 230
       C190 265 90 235 45 185 Z"
/>


<path
    class="park-area"
    d="M720 520
       C790 470 900 480 970 520
       C1030 555 1025 625 960 665
       C875 715 760 690 715 630 Z"
/>


<path
    class="water-area"
    d="M1030 30
       C1120 60 1170 130 1190 220
       L1190 30 Z"
/>


<g id="roadLayer"></g>

<g id="routeLayer"></g>

<g
    id="networkLayer"
    class="network-layer"
></g>

<g id="buildingLayer"></g>

</svg>

</div>


<div class="map-legend">

    <div class="legend-item">
        <span class="legend-line road-major"></span>
        Route principale
    </div>

    <div class="legend-item">
        <span class="legend-line route-active"></span>
        Itinéraire sélectionné
    </div>

    <div class="legend-item">
        <span class="legend-zone"></span>
        Réseau local
    </div>

</div>

</section>


<aside class="montesqueria-panel">


<section class="panel-card">

    <div class="panel-card-title">
        Itinéraire
    </div>


    <div class="selection-block">

        <div class="selection-item">

            <span class="selection-label">
                Départ
            </span>

            <strong id="departure">
                Non sélectionné
            </strong>

        </div>


        <div class="selection-arrow">
            →
        </div>


        <div class="selection-item">

            <span class="selection-label">
                Arrivée
            </span>

            <strong id="arrival">
                Non sélectionnée
            </strong>

        </div>

    </div>


    <div id="routeResult" class="route-result">

        Sélectionnez deux bâtiments sur la carte.

    </div>


    <div id="routeOptions" class="route-options"></div>

</section>


<section class="panel-card">

    <div class="panel-card-title">
        Réseau informatique
    </div>


    <label class="network-toggle">

        <input
            type="checkbox"
            id="networkToggle"
        >

        <span>
            Afficher le réseau informatique
        </span>

    </label>


    <p class="panel-description">

        Les réseaux informatiques sont indépendants
        du réseau routier.

        Cliquez sur une zone réseau pour afficher
        sa topologie détaillée.

    </p>

</section>


<section class="panel-card">

    <div class="panel-card-title">
        Consigne
    </div>


    <ol class="instruction-list">

        <li>
            Cliquez sur un bâtiment.
        </li>

        <li>
            Cliquez sur un second bâtiment.
        </li>

        <li>
            Observez les différents itinéraires.
        </li>

        <li>
            Activez le réseau informatique.
        </li>

        <li>
            Cliquez sur une zone réseau.
        </li>

    </ol>

</section>


</aside>

</main>


<!-- =========================================================
     FENÊTRE RÉSEAU LOCAL
     ========================================================= -->

<div
    id="networkModal"
    class="network-modal"
    hidden
>


<div class="network-dialog">


<header class="network-dialog-header">

    <div>

        <div class="network-dialog-kicker">
            Réseau local
        </div>

        <h2 id="networkTitle">
            Réseau local
        </h2>

        <p id="networkSubtitle">
            192.168.0.0/24
        </p>

    </div>


    <button
        id="closeNetworkModal"
        class="close-network-button"
    >
        Fermer
    </button>

</header>


<div class="network-dialog-body">


<div class="network-detail-map">

    <svg
        id="networkDetailMap"
        viewBox="0 0 1200 650"
        aria-label="Topologie du réseau local"
    ></svg>

</div>


<aside class="network-detail-sidebar">


<section class="detail-card">

    <h3>
        Informations réseau
    </h3>


    <dl class="network-dl">

        <div>

            <dt>
                Adresse réseau
            </dt>

            <dd id="detailNetworkAddress">
                -
            </dd>

        </div>


        <div>

            <dt>
                Masque
            </dt>

            <dd id="detailNetworkMask">
                -
            </dd>

        </div>


        <div>

            <dt>
                Passerelle
            </dt>

            <dd id="detailGateway">
                -
            </dd>

        </div>

    </dl>

</section>


<section class="detail-card">

    <h3>
        Équipements
    </h3>

    <div
        id="detailEquipmentList"
        class="equipment-list"
    ></div>

</section>


<section class="detail-card">

    <h3>
        Équipement sélectionné
    </h3>

    <div
        id="selectedEquipment"
        class="selected-equipment"
    >
        Cliquez sur un équipement dans le schéma.
    </div>

</section>


<section class="detail-card observation-card">

    <h3>
        À observer
    </h3>

    <p id="networkObservation">
        Le routeur permet de relier le réseau local
        au reste du réseau de la ville.
    </p>

</section>


</aside>

</div>

</div>

</div>

</div>


<script>

/* =========================================================
   MONTESQUÉRIA 2050
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const roadLayer =
    document.getElementById("roadLayer");

const routeLayer =
    document.getElementById("routeLayer");

const buildingLayer =
    document.getElementById("buildingLayer");

const networkLayer =
    document.getElementById("networkLayer");

const departureElement =
    document.getElementById("departure");

const arrivalElement =
    document.getElementById("arrival");

const routeResult =
    document.getElementById("routeResult");

const routeOptions =
    document.getElementById("routeOptions");

const mapInstruction =
    document.getElementById("mapInstruction");

const resetButton =
    document.getElementById("resetMap");

const networkToggle =
    document.getElementById("networkToggle");

const networkModal =
    document.getElementById("networkModal");

const closeNetworkModal =
    document.getElementById("closeNetworkModal");

const networkTitle =
    document.getElementById("networkTitle");

const networkSubtitle =
    document.getElementById("networkSubtitle");

const networkDetailMap =
    document.getElementById("networkDetailMap");

const detailNetworkAddress =
    document.getElementById("detailNetworkAddress");

const detailNetworkMask =
    document.getElementById("detailNetworkMask");

const detailGateway =
    document.getElementById("detailGateway");

const detailEquipmentList =
    document.getElementById("detailEquipmentList");

const selectedEquipment =
    document.getElementById("selectedEquipment");

const networkObservation =
    document.getElementById("networkObservation");


/* =========================================================
   NOEUDS ROUTIERS
   ========================================================= */

const roadNodes = {

    gare:       { x: 980, y: 135 },
    nord1:      { x: 800, y: 180 },
    nord2:      { x: 610, y: 180 },
    pompiers:   { x: 650, y: 230 },
    centre:     { x: 390, y: 300 },
    theatre:    { x: 180, y: 300 },
    ecole:      { x: 300, y: 150 },
    mediatheque:{ x: 220, y: 470 },
    sud:        { x: 500, y: 590 },
    marche:     { x: 650, y: 480 },
    est:        { x: 800, y: 320 },
    hopital:    { x: 930, y: 410 },
    police:     { x: 1080, y: 280 },
    stade:      { x: 900, y: 650 },
    sport:      { x: 1060, y: 650 },
    piscine:    { x: 1080, y: 550 }

};


/* =========================================================
   ROUTES
   ========================================================= */

const roadEdges = [

    {
        a:"gare",
        b:"nord1",
        points:[[980,135],[900,145],[800,180]],
        major:true
    },

    {
        a:"nord1",
        b:"nord2",
        points:[[800,180],[710,180],[610,180]],
        major:true
    },

    {
        a:"nord2",
        b:"pompiers",
        points:[[610,180],[630,205],[650,230]],
        major:false
    },

    {
        a:"pompiers",
        b:"centre",
        points:[[650,230],[560,245],[470,270],[390,300]],
        major:true
    },

    {
        a:"centre",
        b:"theatre",
        points:[[390,300],[300,300],[180,300]],
        major:true
    },

    {
        a:"theatre",
        b:"ecole",
        points:[[180,300],[225,240],[300,150]],
        major:false
    },

    {
        a:"ecole",
        b:"nord2",
        points:[[300,150],[420,155],[520,165],[610,180]],
        major:false
    },

    {
        a:"centre",
        b:"mediatheque",
        points:[[390,300],[310,350],[220,470]],
        major:true
    },

    {
        a:"mediatheque",
        b:"sud",
        points:[[220,470],[320,520],[500,590]],
        major:true
    },

    {
        a:"centre",
        b:"sud",
        points:[[390,300],[420,390],[455,500],[500,590]],
        major:true
    },

    {
        a:"sud",
        b:"marche",
        points:[[500,590],[560,535],[650,480]],
        major:false
    },

    {
        a:"marche",
        b:"est",
        points:[[650,480],[700,415],[800,320]],
        major:true
    },

    {
        a:"pompiers",
        b:"est",
        points:[[650,230],[720,260],[800,320]],
        major:true
    },

    {
        a:"centre",
        b:"est",
        points:[[390,300],[500,315],[650,320],[800,320]],
        major:true
    },

    {
        a:"nord1",
        b:"police",
        points:[[800,180],[930,215],[1080,280]],
        major:false
    },

    {
        a:"est",
        b:"hopital",
        points:[[800,320],[865,360],[930,410]],
        major:true
    },

    {
        a:"hopital",
        b:"police",
        points:[[930,410],[1010,350],[1080,280]],
        major:false
    },

    {
        a:"hopital",
        b:"stade",
        points:[[930,410],[925,500],[900,650]],
        major:true
    },

    {
        a:"sud",
        b:"stade",
        points:[[500,590],[620,610],[760,635],[900,650]],
        major:true
    },

    {
        a:"stade",
        b:"sport",
        points:[[900,650],[980,650],[1060,650]],
        major:false
    },

    {
        a:"sport",
        b:"piscine",
        points:[[1060,650],[1075,600],[1080,550]],
        major:false
    },

    {
        a:"hopital",
        b:"piscine",
        points:[[930,410],[1010,460],[1080,550]],
        major:true
    }

];


/* =========================================================
   BÂTIMENTS
   ========================================================= */

const buildings = {

    gare: {
        name:"Gare de Montesquéria",
        access:"gare",
        type:"gare",
        labelDx:0,
        labelDy:-55
    },

    ecole: {
        name:"École municipale",
        access:"ecole",
        type:"ecole",
        labelDx:0,
        labelDy:-48
    },

    theatre: {
        name:"Théâtre municipal",
        access:"theatre",
        type:"theatre",
        labelDx:0,
        labelDy:-47
    },

    mairie: {
        name:"Hôtel de Ville",
        access:"centre",
        type:"mairie",
        labelDx:0,
        labelDy:-58
    },

    mediatheque: {
        name:"Médiathèque",
        access:"mediatheque",
        type:"mediatheque",
        labelDx:-10,
        labelDy:-47
    },

    lycee: {
        name:"Lycée Montesquieu",
        access:"sud",
        type:"lycee",
        labelDx:0,
        labelDy:62
    },

    marche: {
        name:"Marché couvert",
        access:"marche",
        type:"marche",
        labelDx:0,
        labelDy:-50
    },

    pompiers: {
        name:"Caserne des pompiers",
        access:"pompiers",
        type:"pompiers",
        labelDx:0,
        labelDy:-48
    },

    hopital: {
        name:"Hôpital",
        access:"hopital",
        type:"hopital",
        labelDx:0,
        labelDy:-53
    },

    police: {
        name:"Commissariat",
        access:"police",
        type:"police",
        labelDx:0,
        labelDy:-48
    },

    stade: {
        name:"Stade Montesquéria FC",
        access:"stade",
        type:"stade",
        labelDx:0,
        labelDy:70
    },

    sport: {
        name:"Centre sportif",
        access:"sport",
        type:"sport",
        labelDx:0,
        labelDy:52
    },

    piscine: {
        name:"Piscine municipale",
        access:"piscine",
        type:"piscine",
        labelDx:0,
        labelDy:-48
    }

};


/* =========================================================
   RÉSEAUX LOCAUX
   ========================================================= */

const localNetworks = {

    mairie: {

        name:"Réseau de la mairie",
        building:"mairie",

        subnet:"192.168.10.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.10.1",

        observation:
            "Le routeur de la mairie permet de relier le réseau local au reste du réseau de Montesquéria.",

        bounds:{
            x:285,
            y:205,
            width:210,
            height:170
        },

        overview:{
            router:[390,275],
            switches:[[350,330],[430,330]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-MAIRIE",
                ip:"192.168.10.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch administratif",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"PC accueil",
                ip:"192.168.10.10",
                x:300,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"PC secrétariat",
                ip:"192.168.10.11",
                x:500,
                y:450
            },

            {
                id:"printer",
                type:"printer",
                name:"Imprimante",
                ip:"192.168.10.20",
                x:700,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur municipal",
                ip:"192.168.10.100",
                x:900,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","printer"],
            ["sw1","server"]
        ]

    },


    mediatheque: {

        name:"Réseau de la médiathèque",
        building:"mediatheque",

        subnet:"192.168.20.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.20.1",

        observation:
            "Les ordinateurs publics et le serveur de la médiathèque appartiennent au même réseau local.",

        bounds:{
            x:120,
            y:385,
            width:205,
            height:170
        },

        overview:{
            router:[220,440],
            switches:[[175,500],[265,500]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-MEDIA",
                ip:"192.168.20.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch public",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"sw2",
                type:"switch",
                name:"Switch administration",
                ip:"—",
                x:900,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Poste 1",
                ip:"192.168.20.10",
                x:300,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Poste 2",
                ip:"192.168.20.11",
                x:500,
                y:450
            },

            {
                id:"pc3",
                type:"pc",
                name:"Poste 3",
                ip:"192.168.20.12",
                x:700,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur documentaire",
                ip:"192.168.20.100",
                x:900,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["r1","sw2"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","pc3"],
            ["sw2","server"]
        ]

    },


    lycee: {

        name:"Réseau du lycée Montesquieu",
        building:"lycee",

        subnet:"192.168.30.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.30.1",

        observation:
            "Le lycée possède plusieurs switches reliés à un routeur. Les postes et les serveurs utilisent des adresses IP appartenant au même réseau local.",

        bounds:{
            x:395,
            y:525,
            width:215,
            height:150
        },

        overview:{
            router:[500,585],
            switches:[[450,640],[550,640]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-LYCEE",
                ip:"192.168.30.1",
                x:600,
                y:80
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch bâtiment A",
                ip:"—",
                x:450,
                y:260
            },

            {
                id:"sw2",
                type:"switch",
                name:"Switch bâtiment B",
                ip:"—",
                x:800,
                y:260
            },

            {
                id:"pc1",
                type:"pc",
                name:"PC salle 201",
                ip:"192.168.30.10",
                x:250,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"PC salle 202",
                ip:"192.168.30.11",
                x:450,
                y:450
            },

            {
                id:"pc3",
                type:"pc",
                name:"PC salle 203",
                ip:"192.168.30.12",
                x:650,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur pédagogique",
                ip:"192.168.30.100",
                x:850,
                y:450
            },

            {
                id:"printer",
                type:"printer",
                name:"Imprimante",
                ip:"192.168.30.20",
                x:1000,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["r1","sw2"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw2","pc3"],
            ["sw2","server"],
            ["sw2","printer"]
        ]

    },


    hopital: {

        name:"Réseau de l'hôpital",
        building:"hopital",

        subnet:"192.168.40.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.40.1",

        observation:
            "Le réseau de l'hôpital permet de connecter les postes administratifs et différents serveurs.",

        bounds:{
            x:830,
            y:335,
            width:205,
            height:175
        },

        overview:{
            router:[930,410],
            switches:[[890,465],[970,465]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-HOPITAL",
                ip:"192.168.40.1",
                x:600,
                y:80
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch administratif",
                ip:"—",
                x:600,
                y:260
            },

            {
                id:"sw2",
                type:"switch",
                name:"Switch services",
                ip:"—",
                x:850,
                y:260
            },

            {
                id:"pc1",
                type:"pc",
                name:"Accueil",
                ip:"192.168.40.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Administration",
                ip:"192.168.40.11",
                x:550,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur médical",
                ip:"192.168.40.100",
                x:800,
                y:450
            },

            {
                id:"printer",
                type:"printer",
                name:"Imprimante",
                ip:"192.168.40.20",
                x:1000,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["r1","sw2"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw2","server"],
            ["sw2","printer"]
        ]

    },


    police: {

        name:"Réseau du commissariat",
        building:"police",

        subnet:"192.168.50.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.50.1",

        observation:
            "Le routeur du commissariat assure la communication entre le réseau local et le réseau de la ville.",

        bounds:{
            x:990,
            y:205,
            width:170,
            height:145
        },

        overview:{
            router:[1080,280],
            switches:[[1040,325],[1120,325]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-POLICE",
                ip:"192.168.50.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch sécurité",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Poste accueil",
                ip:"192.168.50.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Poste enquête",
                ip:"192.168.50.11",
                x:550,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur police",
                ip:"192.168.50.100",
                x:800,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","server"]
        ]

    },


    pompiers: {

        name:"Réseau de la caserne",
        building:"pompiers",

        subnet:"192.168.60.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.60.1",

        observation:
            "La caserne possède son propre réseau local relié au réseau informatique de la ville.",

        bounds:{
            x:555,
            y:190,
            width:190,
            height:135
        },

        overview:{
            router:[650,230],
            switches:[[610,285],[690,285]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-POMPIERS",
                ip:"192.168.60.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch caserne",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Poste accueil",
                ip:"192.168.60.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Poste intervention",
                ip:"192.168.60.11",
                x:550,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur interventions",
                ip:"192.168.60.100",
                x:800,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","server"]
        ]

    },


    gare: {

        name:"Réseau de la gare",
        building:"gare",

        subnet:"192.168.80.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.80.1",

        observation:
            "Le réseau de la gare permet de connecter les équipements administratifs et les systèmes d'information voyageurs.",

        bounds:{
            x:875,
            y:80,
            width:220,
            height:145
        },

        overview:{
            router:[980,135],
            switches:[[930,190],[1030,190]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-GARE",
                ip:"192.168.80.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch gare",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Accueil voyageurs",
                ip:"192.168.80.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Administration",
                ip:"192.168.80.11",
                x:550,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur horaires",
                ip:"192.168.80.100",
                x:800,
                y:450
            },

            {
                id:"screen",
                type:"screen",
                name:"Affichage voyageurs",
                ip:"192.168.80.30",
                x:1000,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","server"],
            ["sw1","screen"]
        ]

    },


    ecole: {

        name:"Réseau de l'école",
        building:"ecole",

        subnet:"192.168.90.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.90.1",

        observation:
            "L'école possède un réseau local qui permet aux ordinateurs des salles de communiquer avec les serveurs.",

        bounds:{
            x:215,
            y:90,
            width:190,
            height:140
        },

        overview:{
            router:[300,150],
            switches:[[260,205],[340,205]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-ECOLE",
                ip:"192.168.90.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch pédagogique",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Salle 1",
                ip:"192.168.90.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Salle 2",
                ip:"192.168.90.11",
                x:550,
                y:450
            },

            {
                id:"pc3",
                type:"pc",
                name:"Salle 3",
                ip:"192.168.90.12",
                x:750,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur pédagogique",
                ip:"192.168.90.100",
                x:950,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw1","pc3"],
            ["sw1","server"]
        ]

    },


    sports: {

        name:"Réseau du centre sportif",
        building:"sport",

        subnet:"192.168.70.0/24",
        mask:"255.255.255.0",
        gateway:"192.168.70.1",

        observation:
            "Les équipements du centre sportif utilisent un réseau local distinct des autres bâtiments.",

        bounds:{
            x:960,
            y:510,
            width:190,
            height:175
        },

        overview:{
            router:[1060,600],
            switches:[[1015,650],[1105,650]]
        },

        devices:[

            {
                id:"r1",
                type:"router",
                name:"Routeur R-SPORT",
                ip:"192.168.70.1",
                x:600,
                y:100
            },

            {
                id:"sw1",
                type:"switch",
                name:"Switch accueil",
                ip:"—",
                x:600,
                y:270
            },

            {
                id:"sw2",
                type:"switch",
                name:"Switch équipements",
                ip:"—",
                x:850,
                y:270
            },

            {
                id:"pc1",
                type:"pc",
                name:"Accueil",
                ip:"192.168.70.10",
                x:350,
                y:450
            },

            {
                id:"pc2",
                type:"pc",
                name:"Administration",
                ip:"192.168.70.11",
                x:550,
                y:450
            },

            {
                id:"server",
                type:"server",
                name:"Serveur sportif",
                ip:"192.168.70.100",
                x:800,
                y:450
            },

            {
                id:"screen",
                type:"screen",
                name:"Affichage",
                ip:"192.168.70.30",
                x:1000,
                y:450
            }

        ],

        links:[
            ["r1","sw1"],
            ["r1","sw2"],
            ["sw1","pc1"],
            ["sw1","pc2"],
            ["sw2","server"],
            ["sw2","screen"]
        ]

    }

};


/* =========================================================
   OUTILS SVG
   ========================================================= */

function svgElement(tag, attributes = {}) {

    const element =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            tag
        );

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }

    return element;
}


/* =========================================================
   DESSIN DES ROUTES
   ========================================================= */

function pointsToString(points) {

    return points
        .map(point => point.join(","))
        .join(" ");

}


function drawRoads() {

    roadLayer.innerHTML = "";

    for (const edge of roadEdges) {

        const road = svgElement("polyline", {
            points: pointsToString(edge.points),
            class: `road ${edge.major ? "road-major" : "road-minor"}`
        });

        roadLayer.appendChild(road);


        const border = svgElement("polyline", {
            points: pointsToString(edge.points),
            class: "road-edge"
        });

        roadLayer.appendChild(border);

    }

}


/* =========================================================
   BÂTIMENTS
   ========================================================= */

function drawBuildingShape(type, x, y) {

    const group = svgElement("g");


    if (type === "gare") {

        const body = svgElement("rect", {
            x:x - 28,
            y:y - 22,
            width:56,
            height:44,
            rx:4,
            fill:"#e7edf1",
            class:"building-shape"
        });

        const roof = svgElement("polygon", {
            points:
                `${x-34},${y-22} ${x},${y-42} ${x+34},${y-22}`,
            fill:"#61788a"
        });

        group.append(body, roof);

        for (let i = -18; i <= 18; i += 18) {

            group.appendChild(
                svgElement("rect", {
                    x:x+i-4,
                    y:y-10,
                    width:8,
                    height:10,
                    fill:"#9fb7c6"
                })
            );

        }

        group.appendChild(
            svgElement("rect", {
                x:x-5,
                y:y+4,
                width:10,
                height:18,
                fill:"#526775"
            })
        );

    }


    else if (type === "mairie") {

        group.appendChild(
            svgElement("rect", {
                x:x-34,
                y:y-20,
                width:68,
                height:42,
                fill:"#e8e2d6",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("polygon", {
                points:
                    `${x-40},${y-20} ${x},${y-48} ${x+40},${y-20}`,
                fill:"#8a7460"
            })
        );

        for (let i = -20; i <= 20; i += 20) {

            group.appendChild(
                svgElement("rect", {
                    x:x+i-4,
                    y:y-8,
                    width:8,
                    height:13,
                    fill:"#7890a0"
                })
            );

        }

        group.appendChild(
            svgElement("rect", {
                x:x-5,
                y:y+5,
                width:10,
                height:17,
                fill:"#8a7460"
            })
        );

    }


    else if (type === "ecole") {

        group.appendChild(
            svgElement("rect", {
                x:x-32,
                y:y-20,
                width:64,
                height:42,
                rx:3,
                fill:"#e8dcc5",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("polygon", {
                points:
                    `${x-38},${y-20} ${x},${y-45} ${x+38},${y-20}`,
                fill:"#a66f52"
            })
        );

        for (let i = -20; i <= 20; i += 20) {

            group.appendChild(
                svgElement("rect", {
                    x:x+i-5,
                    y:y-9,
                    width:10,
                    height:11,
                    fill:"#89a6b5"
                })
            );

        }

        group.appendChild(
            svgElement("rect", {
                x:x-5,
                y:y+5,
                width:10,
                height:17,
                fill:"#8c674f"
            })
        );

    }


    else if (type === "theatre") {

        group.appendChild(
            svgElement("rect", {
                x:x-35,
                y:y-22,
                width:70,
                height:44,
                rx:7,
                fill:"#ddd5cf",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("path", {
                d:
                    `M ${x-28} ${y-12}
                     Q ${x-15} ${y+2} ${x-28} ${y+15}
                     L ${x-18} ${y+15}
                     Q ${x-5} ${y+2} ${x-18} ${y-12}`,
                fill:"#a44d45"
            })
        );

        group.appendChild(
            svgElement("path", {
                d:
                    `M ${x+28} ${y-12}
                     Q ${x+15} ${y+2} ${x+28} ${y+15}
                     L ${x+18} ${y+15}
                     Q ${x+5} ${y+2} ${x+18} ${y-12}`,
                fill:"#a44d45"
            })
        );

    }


    else if (type === "mediatheque") {

        group.appendChild(
            svgElement("rect", {
                x:x-32,
                y:y-23,
                width:64,
                height:46,
                fill:"#dce4e7",
                class:"building-shape"
            })
        );

        for (let i = -20; i <= 20; i += 10) {

            group.appendChild(
                svgElement("rect", {
                    x:x+i-3,
                    y:y-15,
                    width:6,
                    height:30,
                    fill:"#6f91a4"
                })
            );

        }

    }


    else if (type === "lycee") {

        group.appendChild(
            svgElement("rect", {
                x:x-40,
                y:y-25,
                width:80,
                height:50,
                fill:"#d8e0e3",
                class:"building-shape"
            })
        );

        for (let row = -12; row <= 12; row += 12) {

            for (let col = -27; col <= 27; col += 18) {

                group.appendChild(
                    svgElement("rect", {
                        x:x+col-4,
                        y:y+row-4,
                        width:8,
                        height:8,
                        fill:"#7191a1"
                    })
                );

            }

        }

    }


    else if (type === "pompiers") {

        group.appendChild(
            svgElement("rect", {
                x:x-38,
                y:y-23,
                width:76,
                height:46,
                rx:3,
                fill:"#c94a42",
                class:"building-shape"
            })
        );

        for (let i = -24; i <= 24; i += 24) {

            group.appendChild(
                svgElement("rect", {
                    x:x+i-7,
                    y:y-7,
                    width:14,
                    height:30,
                    fill:"#f0f0ed"
                })
            );

        }

        group.appendChild(
            svgElement("rect", {
                x:x-3,
                y:y-17,
                width:6,
                height:24,
                fill:"white"
            })
        );

        group.appendChild(
            svgElement("rect", {
                x:x-12,
                y:y-8,
                width:24,
                height:6,
                fill:"white"
            })
        );

    }


    else if (type === "hopital") {

        group.appendChild(
            svgElement("rect", {
                x:x-34,
                y:y-22,
                width:68,
                height:44,
                rx:4,
                fill:"#e9edef",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("rect", {
                x:x-5,
                y:y-16,
                width:10,
                height:30,
                fill:"#c94a42"
            })
        );

        group.appendChild(
            svgElement("rect", {
                x:x-15,
                y:y-6,
                width:30,
                height:10,
                fill:"#c94a42"
            })
        );

    }


    else if (type === "police") {

        group.appendChild(
            svgElement("path", {
                d:
                    `M ${x} ${y-28}
                     L ${x+30} ${y-18}
                     L ${x+25} ${y+15}
                     Q ${x} ${y+38} ${x-25} ${y+15}
                     L ${x-30} ${y-18} Z`,
                fill:"#5f7890",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("circle", {
                cx:x,
                cy:y,
                r:8,
                fill:"white"
            })
        );

    }


    else if (type === "marche") {

        group.appendChild(
            svgElement("rect", {
                x:x-38,
                y:y-22,
                width:76,
                height:44,
                fill:"#e4d9c9",
                class:"building-shape"
            })
        );

        for (let i = -30; i <= 30; i += 20) {

            group.appendChild(
                svgElement("path", {
                    d:
                        `M ${x+i-10} ${y-22}
                         L ${x+i} ${y-7}
                         L ${x+i+10} ${y-22}`,
                    fill:"#a97b58"
                })
            );

        }

    }


    else if (type === "stade") {

        group.appendChild(
            svgElement("ellipse", {
                cx:x,
                cy:y,
                rx:52,
                ry:32,
                fill:"#87a77c",
                stroke:"#587453",
                "stroke-width":3,
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("ellipse", {
                cx:x,
                cy:y,
                rx:25,
                ry:14,
                fill:"none",
                stroke:"white",
                "stroke-width":2
            })
        );

        group.appendChild(
            svgElement("line", {
                x1:x,
                y1:y-32,
                x2:x,
                y2:y+32,
                stroke:"white",
                "stroke-width":2
            })
        );

    }


    else if (type === "sport") {

        group.appendChild(
            svgElement("rect", {
                x:x-40,
                y:y-25,
                width:80,
                height:50,
                rx:8,
                fill:"#d8e0e4",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("circle", {
                cx:x,
                cy:y,
                r:12,
                fill:"none",
                stroke:"#68859a",
                "stroke-width":3
            })
        );

    }


    else if (type === "piscine") {

        group.appendChild(
            svgElement("rect", {
                x:x-42,
                y:y-25,
                width:84,
                height:50,
                rx:8,
                fill:"#d9e2e5",
                class:"building-shape"
            })
        );

        group.appendChild(
            svgElement("rect", {
                x:x-28,
                y:y-14,
                width:56,
                height:28,
                rx:8,
                fill:"#8fbfd1"
            })
        );

    }


    return group;

}


/* =========================================================
   DESSIN DES BÂTIMENTS
   ========================================================= */

function drawBuildings() {

    buildingLayer.innerHTML = "";

    for (const [id, building] of Object.entries(buildings)) {

        const node = roadNodes[building.access];

        const group = svgElement("g", {
            class:"building",
            "data-building":id
        });


        const shape =
            drawBuildingShape(
                building.type,
                node.x,
                node.y
            );

        group.appendChild(shape);


        const label = svgElement("text", {
            x:node.x + building.labelDx,
            y:node.y + building.labelDy,
            class:"building-label",
            "text-anchor":"middle"
        });

        label.textContent = building.name;

        group.appendChild(label);


        group.addEventListener(
            "click",
            () => selectBuilding(id)
        );


        buildingLayer.appendChild(group);

    }

}


/* =========================================================
   GRAPH
   ========================================================= */

const graph = {};

for (const node of Object.keys(roadNodes)) {
    graph[node] = [];
}


function distanceBetween(a, b) {

    const dx =
        roadNodes[a].x -
        roadNodes[b].x;

    const dy =
        roadNodes[a].y -
        roadNodes[b].y;

    return Math.sqrt(dx * dx + dy * dy);

}


function polylineLength(points) {

    let total = 0;

    for (let i = 1; i < points.length; i++) {

        const dx =
            points[i][0] -
            points[i - 1][0];

        const dy =
            points[i][1] -
            points[i - 1][1];

        total += Math.sqrt(
            dx * dx + dy * dy
        );

    }

    return total;

}


for (let i = 0; i < roadEdges.length; i++) {

    const edge = roadEdges[i];

    const length =
        polylineLength(edge.points);

    graph[edge.a].push({
        node:edge.b,
        edgeIndex:i,
        length
    });

    graph[edge.b].push({
        node:edge.a,
        edgeIndex:i,
        length
    });

}


/* =========================================================
   DIJKSTRA
   ========================================================= */

function dijkstra(start, end, bannedEdges = new Set()) {

    const distances = {};
    const previous = {};
    const visited = new Set();

    for (const node of Object.keys(graph)) {
        distances[node] = Infinity;
    }

    distances[start] = 0;


    while (true) {

        let current = null;
        let best = Infinity;

        for (const node of Object.keys(graph)) {

            if (
                !visited.has(node) &&
                distances[node] < best
            ) {

                current = node;
                best = distances[node];

            }

        }


        if (current === null) {
            break;
        }


        if (current === end) {
            break;
        }


        visited.add(current);


        for (const neighbor of graph[current]) {

            if (bannedEdges.has(neighbor.edgeIndex)) {
                continue;
            }

            const newDistance =
                distances[current] +
                neighbor.length;


            if (
                newDistance <
                distances[neighbor.node]
            ) {

                distances[neighbor.node] =
                    newDistance;

                previous[neighbor.node] = {
                    node:current,
                    edgeIndex:neighbor.edgeIndex
                };

            }

        }

    }


    if (distances[end] === Infinity) {
        return null;
    }


    const nodes = [];
    const edges = [];

    let current = end;

    while (current !== start) {

        nodes.unshift(current);

        const prev =
            previous[current];

        if (!prev) {
            return null;
        }

        edges.unshift(prev.edgeIndex);

        current = prev.node;

    }

    nodes.unshift(start);


    return {
        nodes,
        edges,
        distance:distances[end]
    };

}


/* =========================================================
   CHEMINS SIMPLES
   ========================================================= */

function findAllSimplePaths(
    start,
    end,
    maxPaths = 100
) {

    const paths = [];


    function visit(
        current,
        visited,
        nodes,
        edges,
        distance
    ) {

        if (paths.length >= maxPaths) {
            return;
        }


        if (current === end) {

            paths.push({
                nodes:[...nodes],
                edges:[...edges],
                distance
            });

            return;
        }


        for (const neighbor of graph[current]) {

            if (visited.has(neighbor.node)) {
                continue;
            }


            visited.add(neighbor.node);

            nodes.push(neighbor.node);
            edges.push(neighbor.edgeIndex);


            visit(
                neighbor.node,
                visited,
                nodes,
                edges,
                distance + neighbor.length
            );


            edges.pop();
            nodes.pop();

            visited.delete(neighbor.node);

        }

    }


    visit(
        start,
        new Set([start]),
        [start],
        [],
        0
    );


    return paths
        .sort((a,b) => a.distance - b.distance)
        .slice(0,3);

}


/* =========================================================
   POINTS D'UNE ARÊTE
   ========================================================= */

function edgePoints(edge, from, to) {

    const points = edge.points;

    if (
        edge.a === from &&
        edge.b === to
    ) {
        return points;
    }


    return [...points].reverse();

}


/* =========================================================
   TRANSFORMATION CHEMIN -> POLYLINE
   ========================================================= */

function pathToPoints(path) {

    const result = [];


    for (let i = 0; i < path.edges.length; i++) {

        const edge =
            roadEdges[path.edges[i]];

        const from =
            path.nodes[i];

        const to =
            path.nodes[i + 1];


        const points =
            edgePoints(edge, from, to);


        if (i === 0) {

            result.push(...points);

        } else {

            result.push(...points.slice(1));

        }

    }


    return result;

}


/* =========================================================
   DISTANCE
   ========================================================= */

function formatDistance(distance) {

    const km =
        distance / 100;

    return km.toFixed(2) + " km";

}


/* =========================================================
   DESSIN DES ITINÉRAIRES
   ========================================================= */

let currentRoutes = [];
let activeRouteIndex = 0;


function drawRoutes() {

    routeLayer.innerHTML = "";


    currentRoutes.forEach(
        (route, index) => {

            const points =
                pathToPoints(route);


            const polyline =
                svgElement("polyline", {

                    points:pointsToString(points),

                    class:
                        "route " +
                        (
                            index === activeRouteIndex
                                ? "route-active"
                                : "route-alternative"
                        )

                });


            routeLayer.appendChild(polyline);

        }
    );

}


/* =========================================================
   CALCUL DES ROUTES
   ========================================================= */

function calculateRoutes() {

    const departureId =
        window.selectedDeparture;

    const arrivalId =
        window.selectedArrival;


    if (
        !departureId ||
        !arrivalId
    ) {
        return;
    }


    const start =
        buildings[departureId].access;

    const end =
        buildings[arrivalId].access;


    const routes =
        findAllSimplePaths(start, end);


    currentRoutes = routes;

    activeRouteIndex = 0;


    if (routes.length === 0) {

        routeResult.textContent =
            "Aucun itinéraire trouvé.";

        routeOptions.innerHTML = "";

        return;
    }


    drawRoutes();


    const best =
        routes[0];


    routeResult.innerHTML =
        "<strong>" +
        formatDistance(best.distance) +
        "</strong> pour l'itinéraire principal.";


    routeOptions.innerHTML = "";


    routes.forEach(
        (route, index) => {

            const button =
                document.createElement("button");

            button.className =
                "route-option" +
                (
                    index === 0
                        ? " active"
                        : ""
                );


            button.innerHTML =
                "<strong>Itinéraire " +
                (index + 1) +
                "</strong><br>" +
                formatDistance(route.distance);


            button.addEventListener(
                "click",
                () => {

                    activeRouteIndex = index;

                    drawRoutes();


                    document
                        .querySelectorAll(".route-option")
                        .forEach(
                            (element, i) => {

                                element.classList.toggle(
                                    "active",
                                    i === index
                                );

                            }
                        );

                }
            );


            routeOptions.appendChild(button);

        }
    );

}


/* =========================================================
   SÉLECTION DES BÂTIMENTS
   ========================================================= */

window.selectedDeparture = null;
window.selectedArrival = null;


function updateBuildingSelection() {

    document
        .querySelectorAll(".building")
        .forEach(
            building => {

                const id =
                    building.dataset.building;


                building.classList.toggle(
                    "selected-departure",
                    id === window.selectedDeparture
                );


                building.classList.toggle(
                    "selected-arrival",
                    id === window.selectedArrival
                );

            }
        );

}


function selectBuilding(id) {

    if (!window.selectedDeparture) {

        window.selectedDeparture = id;

        departureElement.textContent =
            buildings[id].name;

        mapInstruction.textContent =
            "Sélectionnez maintenant le bâtiment d'arrivée.";

        updateBuildingSelection();

        return;
    }


    if (
        !window.selectedArrival &&
        id !== window.selectedDeparture
    ) {

        window.selectedArrival = id;

        arrivalElement.textContent =
            buildings[id].name;

        mapInstruction.textContent =
            "Itinéraire calculé.";

        updateBuildingSelection();

        calculateRoutes();

        return;
    }


    window.selectedDeparture = id;
    window.selectedArrival = null;

    departureElement.textContent =
        buildings[id].name;

    arrivalElement.textContent =
        "Non sélectionnée";

    routeResult.textContent =
        "Sélectionnez maintenant le bâtiment d'arrivée.";

    routeOptions.innerHTML = "";

    routeLayer.innerHTML = "";

    currentRoutes = [];

    mapInstruction.textContent =
        "Sélectionnez maintenant le bâtiment d'arrivée.";

    updateBuildingSelection();

}


/* =========================================================
   RÉINITIALISATION
   ========================================================= */

function resetMap() {

    window.selectedDeparture = null;
    window.selectedArrival = null;

    departureElement.textContent =
        "Non sélectionné";

    arrivalElement.textContent =
        "Non sélectionnée";

    routeResult.textContent =
        "Sélectionnez deux bâtiments sur la carte.";

    routeOptions.innerHTML = "";

    routeLayer.innerHTML = "";

    currentRoutes = [];

    activeRouteIndex = 0;

    mapInstruction.textContent =
        "Sélectionnez un bâtiment de départ.";

    updateBuildingSelection();

}


/* =========================================================
   RÉSEAU — VUE GÉNÉRALE
   ========================================================= */

function drawNetworkOverview() {

    networkLayer.innerHTML = "";


    if (!networkToggle.checked) {
        return;
    }


    networkLayer.classList.add("visible");


    /* -----------------------------------------------------
       LIENS ENTRE LES RÉSEAUX
       ----------------------------------------------------- */

    const backboneLinks = [

        [[390,275],[520,240],[650,230]],

        [[650,230],[800,180],[980,135]],

        [[390,275],[500,585]],

        [[500,585],[1060,600]],

        [[800,320],[930,410]],

        [[930,410],[1080,280]],

        [[930,410],[1060,600]],

        [[220,440],[390,275]],

        [[300,150],[390,275]]

    ];


    for (const points of backboneLinks) {

        const line =
            svgElement("polyline", {

                points:pointsToString(points),

                class:"network-link"

            });

        networkLayer.appendChild(line);

    }


    /* -----------------------------------------------------
       ZONES LOCALES
       ----------------------------------------------------- */

    for (
        const [id, network]
        of Object.entries(localNetworks)
    ) {

        const bounds =
            network.bounds;


        const zone =
            svgElement("rect", {

                x:bounds.x,
                y:bounds.y,
                width:bounds.width,
                height:bounds.height,

                rx:12,

                class:"network-zone"

            });


        zone.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                openNetwork(id);

            }
        );


        networkLayer.appendChild(zone);


        const label =
            svgElement("text", {

                x:
                    bounds.x +
                    bounds.width / 2,

                y:
                    bounds.y + 20,

                class:"network-zone-label",

                "text-anchor":"middle"

            });


        label.textContent =
            network.name;


        networkLayer.appendChild(label);


        /* routeur */

        const router =
            network.overview.router;


        const routerShape =
            svgElement("rect", {

                x:router[0] - 8,
                y:router[1] - 8,

                width:16,
                height:16,

                rx:3,

                class:"network-router"

            });


        networkLayer.appendChild(routerShape);


        /* switches */

        for (
            const position
            of network.overview.switches
        ) {

            const sw =
                svgElement("rect", {

                    x:position[0] - 7,
                    y:position[1] - 5,

                    width:14,
                    height:10,

                    rx:2,

                    class:"network-switch"

                });


            networkLayer.appendChild(sw);

        }

    }

}


/* =========================================================
   OUVERTURE D'UN RÉSEAU
   ========================================================= */

let currentNetworkId = null;


function openNetwork(id) {

    const network =
        localNetworks[id];


    if (!network) {
        return;
    }


    currentNetworkId = id;


    networkTitle.textContent =
        network.name;

    networkSubtitle.textContent =
        network.subnet;


    detailNetworkAddress.textContent =
        network.subnet;

    detailNetworkMask.textContent =
        network.mask;

    detailGateway.textContent =
        network.gateway;

    networkObservation.textContent =
        network.observation;


    renderNetworkDetail(network);


    networkModal.hidden = false;

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   FERMETURE
   ========================================================= */

function closeNetwork() {

    networkModal.hidden = true;

    document.body.style.overflow =
        "";

    currentNetworkId = null;

}


closeNetworkModal.addEventListener(
    "click",
    closeNetwork
);


networkModal.addEventListener(
    "click",
    event => {

        if (
            event.target === networkModal
        ) {
            closeNetwork();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !networkModal.hidden
        ) {

            closeNetwork();

        }

    }
);


/* =========================================================
   DESSIN DE LA TOPOLOGIE
   ========================================================= */

function renderNetworkDetail(network) {

    networkDetailMap.innerHTML = "";


    /* fond */

    networkDetailMap.appendChild(
        svgElement("rect", {
            x:0,
            y:0,
            width:1200,
            height:650,
            fill:"#f8fafb"
        })
    );


    /* titre dans le schéma */

    const title =
        svgElement("text", {

            x:40,
            y:42,

            fill:"#315875",

            "font-size":"22",
            "font-weight":"700"

        });

    title.textContent =
        network.name;

    networkDetailMap.appendChild(title);


    /* réseau */

    const subtitle =
        svgElement("text", {

            x:40,
            y:68,

            fill:"#71808c",

            "font-size":"14"

        });

    subtitle.textContent =
        `${network.subnet}   |   passerelle ${network.gateway}`;

    networkDetailMap.appendChild(subtitle);


    /* -----------------------------------------------------
       LIENS
       ----------------------------------------------------- */

    const devicesById = {};

    for (const device of network.devices) {
        devicesById[device.id] = device;
    }


    for (const [fromId, toId] of network.links) {

        const from =
            devicesById[fromId];

        const to =
            devicesById[toId];


        if (!from || !to) {
            continue;
        }


        networkDetailMap.appendChild(
            svgElement("line", {

                x1:from.x,
                y1:from.y,

                x2:to.x,
                y2:to.y,

                class:"detail-link"

            })
        );

    }


    /* -----------------------------------------------------
       ÉQUIPEMENTS
       ----------------------------------------------------- */

    for (const device of network.devices) {

        drawDetailDevice(device);

    }


    /* -----------------------------------------------------
       LISTE
       ----------------------------------------------------- */

    detailEquipmentList.innerHTML = "";


    for (const device of network.devices) {

        const item =
            document.createElement("div");

        item.className =
            "equipment-item";


        item.innerHTML = `
            <div class="equipment-name">
                ${device.name}
            </div>
            <div class="equipment-ip">
                ${device.ip}
            </div>
        `;


        item.addEventListener(
            "click",
            () => showEquipment(device)
        );


        detailEquipmentList.appendChild(item);

    }


    selectedEquipment.textContent =
        "Cliquez sur un équipement dans le schéma.";

}


/* =========================================================
   DESSIN D'UN ÉQUIPEMENT
   ========================================================= */

function drawDetailDevice(device) {

    const group =
        svgElement("g", {

            class:
                `detail-device device-${device.type}`

        });


    const width =
        device.type === "router"
            ? 100
            : 90;

    const height =
        device.type === "router"
            ? 52
            : 48;


    const body =
        svgElement("rect", {

            x:
                device.x -
                width / 2,

            y:
                device.y -
                height / 2,

            width,
            height,

            rx:8,

            class:"device-body"

        });


    group.appendChild(body);


    /* petits détails */

    if (device.type === "router") {

        group.appendChild(
            svgElement("line", {

                x1:device.x - 25,
                y1:device.y,

                x2:device.x + 25,
                y2:device.y,

                stroke:"white",
                "stroke-width":3

            })
        );

    }


    if (device.type === "switch") {

        for (
            let i = -20;
            i <= 20;
            i += 10
        ) {

            group.appendChild(
                svgElement("circle", {

                    cx:device.x + i,
                    cy:device.y,

                    r:2.5,

                    fill:"#315875"

                })
            );

        }

    }


    if (device.type === "server") {

        for (
            let i = -10;
            i <= 10;
            i += 10
        ) {

            group.appendChild(
                svgElement("circle", {

                    cx:device.x - 25,
                    cy:device.y + i,

                    r:2.5,

                    fill:"#315875"

                })
            );

        }

    }


    if (device.type === "pc") {

        group.appendChild(
            svgElement("rect", {

                x:device.x - 20,
                y:device.y - 14,

                width:40,
                height:25,

                fill:"#dfe6eb",

                stroke:"#315875",
                "stroke-width":1

            })
        );

        group.appendChild(
            svgElement("line", {

                x1:device.x,
                y1:device.y + 11,

                x2:device.x,
                y2:device.y + 18,

                stroke:"#315875",
                "stroke-width":2

            })
        );

    }


    if (device.type === "printer") {

        group.appendChild(
            svgElement("rect", {

                x:device.x - 22,
                y:device.y - 12,

                width:44,
                height:24,

                rx:3,

                fill:"#e4e8eb",

                stroke:"#315875",
                "stroke-width":2

            })
        );

        group.appendChild(
            svgElement("rect", {

                x:device.x - 15,
                y:device.y - 20,

                width:30,
                height:10,

                fill:"white",

                stroke:"#315875",
                "stroke-width":1

            })
        );

    }


    if (device.type === "screen") {

        group.appendChild(
            svgElement("rect", {

                x:device.x - 22,
                y:device.y - 15,

                width:44,
                height:28,

                fill:"#dce7ed",

                stroke:"#315875",
                "stroke-width":2

            })
        );

        group.appendChild(
            svgElement("line", {

                x1:device.x,
                y1:device.y + 13,

                x2:device.x,
                y2:device.y + 19,

                stroke:"#315875",
                "stroke-width":2

            })
        );

    }


    const label =
        svgElement("text", {

            x:device.x,
            y:device.y + 43,

            class:"device-label"

        });


    label.textContent =
        device.name;


    group.appendChild(label);


    const ip =
        svgElement("text", {

            x:device.x,
            y:device.y + 60,

            class:"device-ip"

        });


    ip.textContent =
        device.ip;


    group.appendChild(ip);


    group.addEventListener(
        "click",
        () => showEquipment(device)
    );


    networkDetailMap.appendChild(group);

}


/* =========================================================
   INFORMATIONS ÉQUIPEMENT
   ========================================================= */

function showEquipment(device) {

    let typeName = "Équipement";


    if (device.type === "router") {
        typeName = "Routeur";
    }

    else if (device.type === "switch") {
        typeName = "Switch";
    }

    else if (device.type === "pc") {
        typeName = "Ordinateur";
    }

    else if (device.type === "server") {
        typeName = "Serveur";
    }

    else if (device.type === "printer") {
        typeName = "Imprimante";
    }

    else if (device.type === "screen") {
        typeName = "Affichage";
    }


    selectedEquipment.innerHTML = `

        <strong>
            ${device.name}
        </strong>

        Type :
        ${typeName}

        <br>

        Adresse IP :
        <code>${device.ip}</code>

    `;

}


/* =========================================================
   TOGGLE RÉSEAU
   ========================================================= */

networkToggle.addEventListener(
    "change",
    drawNetworkOverview
);


/* =========================================================
   RESET
   ========================================================= */

resetButton.addEventListener(
    "click",
    resetMap
);


/* =========================================================
   INITIALISATION
   ========================================================= */

drawRoads();

drawBuildings();

drawNetworkOverview();

</script>