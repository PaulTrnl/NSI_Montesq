/* =========================================================
   QUESTIONS DU MUR NSI
   ========================================================= */

   const questions = [

    /* =====================================================
       PYTHON
       ===================================================== */

    {
        theme: "Python",
        question: "Que renvoie len([10, 20, 30, 40]) ?",
        reponse: "4"
    },

    {
        theme: "Python",
        question: "Quel symbole permet de commencer un commentaire en Python ?",
        reponse: "#"
    },

    {
        theme: "Python",
        question: "Quel mot-clé permet de définir une fonction ?",
        reponse: "def"
    },

    {
        theme: "Python",
        question: "Que vaut 3 ** 2 en Python ?",
        reponse: "9"
    },


    /* =====================================================
       ALGORITHMIQUE
       ===================================================== */

    {
        theme: "Algorithmique",
        question: "Quelle est la complexité du tri par sélection dans le pire des cas ?",
        reponse: "O(n²)"
    },

    {
        theme: "Algorithmique",
        question: "Quel algorithme permet de rechercher le plus court chemin dans un graphe pondéré à poids positifs ?",
        reponse: "L'algorithme de Dijkstra"
    },

    {
        theme: "Algorithmique",
        question: "Quelle structure permet de représenter un algorithme sous forme graphique ?",
        reponse: "Un organigramme"
    },


    /* =====================================================
       BASES DE DONNÉES
       ===================================================== */

    {
        theme: "Bases de données",
        question: "Quel langage permet d'interroger une base de données relationnelle ?",
        reponse: "SQL"
    },

    {
        theme: "Bases de données",
        question: "Comment appelle-t-on un attribut qui identifie de manière unique une ligne d'une table ?",
        reponse: "Une clé primaire"
    },

    {
        theme: "Bases de données",
        question: "À quoi sert une clé étrangère ?",
        reponse: "À établir une relation entre deux tables"
    },


    /* =====================================================
       RÉSEAUX
       ===================================================== */

    {
        theme: "Réseaux",
        question: "Quel protocole permet d'associer un nom de domaine à une adresse IP ?",
        reponse: "DNS"
    },

    {
        theme: "Réseaux",
        question: "Que signifie IP ?",
        reponse: "Internet Protocol"
    },

    {
        theme: "Réseaux",
        question: "Quel protocole est utilisé pour transporter de manière fiable les données sur Internet ?",
        reponse: "TCP"
    },


    /* =====================================================
       CRYPTOGRAPHIE
       ===================================================== */

    {
        theme: "Cryptographie",
        question: "Quelle clé est utilisée pour chiffrer dans un système de chiffrement asymétrique destiné à un destinataire ?",
        reponse: "La clé publique du destinataire"
    },

    {
        theme: "Cryptographie",
        question: "Combien de clés différentes utilise le chiffrement symétrique ?",
        reponse: "Une seule clé"
    },


    /* =====================================================
       INTELLIGENCE ARTIFICIELLE
       ===================================================== */

    {
        theme: "Intelligence artificielle",
        question: "Que signifie l'acronyme IA ?",
        reponse: "Intelligence artificielle"
    },

    {
        theme: "Intelligence artificielle",
        question: "Dans le machine learning, comment appelle-t-on les données utilisées pour entraîner un modèle ?",
        reponse: "Les données d'entraînement"
    },


    /* =====================================================
       STRUCTURES DE DONNÉES
       ===================================================== */

    {
        theme: "Structures de données",
        question: "Quelle structure fonctionne selon le principe LIFO ?",
        reponse: "Une pile"
    },

    {
        theme: "Structures de données",
        question: "Quelle structure fonctionne selon le principe FIFO ?",
        reponse: "Une file"
    },


    /* =====================================================
       POO
       ===================================================== */

    {
        theme: "POO",
        question: "Que signifie POO ?",
        reponse: "Programmation orientée objet"
    },

    {
        theme: "POO",
        question: "Comment appelle-t-on le modèle permettant de créer des objets ?",
        reponse: "Une classe"
    },


    /* =====================================================
       ARCHITECTURE
       ===================================================== */

    {
        theme: "Architecture",
        question: "Quels sont les deux grands types de mémoire dans l'architecture de von Neumann ?",
        reponse: "La mémoire contenant les données et les instructions"
    },

    {
        theme: "Architecture",
        question: "Quel composant réalise les calculs et exécute les instructions ?",
        reponse: "Le processeur"
    },


    /* =====================================================
       DONNÉES
       ===================================================== */

    {
        theme: "Données",
        question: "Quel format est couramment utilisé pour représenter des données structurées sous forme texte ?",
        reponse: "JSON"
    },

    {
        theme: "Données",
        question: "Que signifie CSV ?",
        reponse: "Comma-Separated Values"
    },


    /* =====================================================
       RECHERCHE
       ===================================================== */

    {
        theme: "Recherche",
        question: "Quelle est la complexité d'une recherche dichotomique dans un tableau trié ?",
        reponse: "O(log n)"
    },

    {
        theme: "Recherche",
        question: "La recherche dichotomique nécessite-t-elle que les données soient triées ?",
        reponse: "Oui"
    },


    /* =====================================================
       SYSTÈMES
       ===================================================== */

    {
        theme: "Systèmes",
        question: "Quel logiciel permet de gérer les ressources matérielles d'un ordinateur ?",
        reponse: "Le système d'exploitation"
    },

    {
        theme: "Systèmes",
        question: "Donnez un exemple de système d'exploitation.",
        reponse: "Windows, macOS ou Linux"
    },


    /* =====================================================
       WEB
       ===================================================== */

    {
        theme: "Web",
        question: "Que signifie HTML ?",
        reponse: "HyperText Markup Language"
    },

    {
        theme: "Web",
        question: "Quel protocole sécurisé est utilisé pour accéder à un site Web ?",
        reponse: "HTTPS"
    },


    /* =====================================================
       GRAPHES
       ===================================================== */

    {
        theme: "Graphes",
        question: "Comment appelle-t-on les éléments d'un graphe reliés entre eux ?",
        reponse: "Des sommets"
    },

    {
        theme: "Graphes",
        question: "Comment appelle-t-on les relations entre les sommets d'un graphe ?",
        reponse: "Des arêtes"
    },


    /* =====================================================
       RÉCURSIVITÉ
       ===================================================== */

    {
        theme: "Récursivité",
        question: "Qu'est-ce qu'une fonction récursive ?",
        reponse: "Une fonction qui s'appelle elle-même"
    },

    {
        theme: "Récursivité",
        question: "Que doit généralement contenir une fonction récursive pour éviter une récursion infinie ?",
        reponse: "Un cas de base"
    }

];