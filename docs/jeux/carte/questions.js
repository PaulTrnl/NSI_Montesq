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

    {
        theme: "Python",
        question: "Que vaut [1, 2, 3][1] ?",
        reponse: "2"
    },

    {
        theme: "Python",
        question: "Que vaut len('NSI') ?",
        reponse: "3"
    },

    {
        theme: "Python",
        question: "Quelle est la différence entre = et == en Python ?",
        reponse: "= affecte une valeur ; == compare deux valeurs"
    },

    {
        theme: "Python",
        question: "Que vaut 10 // 3 ?",
        reponse: "3"
    },

    {
        theme: "Python",
        question: "Que vaut 10 % 3 ?",
        reponse: "1"
    },

    {
        theme: "Python",
        question: "Que vaut [1, 2] + [3, 4] ?",
        reponse: "[1, 2, 3, 4]"
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

    {
        theme: "Algorithmique",
        question: "Quelle est la complexité d'une boucle qui parcourt exactement n éléments ?",
        reponse: "O(n)"
    },

    {
        theme: "Algorithmique",
        question: "Deux boucles imbriquées parcourant chacune n éléments ont généralement quelle complexité ?",
        reponse: "O(n²)"
    },

    {
        theme: "Algorithmique",
        question: "Un algorithme en O(1) dépend-il de la taille des données ?",
        reponse: "Non, son temps d'exécution est indépendant de n"
    },

    {
        theme: "Algorithmique",
        question: "Quel est le principe général d'un algorithme glouton ?",
        reponse: "Choisir à chaque étape la meilleure décision locale"
    },

    {
        theme: "Algorithmique",
        question: "Un algorithme plus rapide est-il nécessairement meilleur dans tous les cas ?",
        reponse: "Non, cela dépend notamment des contraintes et des ressources utilisées"
    },

    {
        theme: "Algorithmique",
        question: "Quelle complexité est généralement meilleure : O(n) ou O(n²) ?",
        reponse: "O(n)"
    },

    {
        theme: "Algorithmique",
        question: "Peut-on dire qu'un algorithme en O(n²) prend exactement n² opérations ?",
        reponse: "Non, O(n²) donne un ordre de grandeur asymptotique"
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

    {
        theme: "Bases de données",
        question: "Quelle commande SQL permet de récupérer des données ?",
        reponse: "SELECT"
    },

    {
        theme: "Bases de données",
        question: "Quelle commande SQL permet d'ajouter une ligne dans une table ?",
        reponse: "INSERT"
    },

    {
        theme: "Bases de données",
        question: "Quelle commande SQL permet de modifier des données existantes ?",
        reponse: "UPDATE"
    },

    {
        theme: "Bases de données",
        question: "Quelle commande SQL permet de supprimer des lignes ?",
        reponse: "DELETE"
    },

    {
        theme: "Bases de données",
        question: "À quoi sert la clause WHERE ?",
        reponse: "À sélectionner les lignes qui vérifient une condition"
    },

    {
        theme: "Bases de données",
        question: "Quelle clause permet de trier le résultat d'une requête SQL ?",
        reponse: "ORDER BY"
    },

    {
        theme: "Bases de données",
        question: "Pourquoi une clé primaire doit-elle être unique ?",
        reponse: "Pour identifier sans ambiguïté chaque ligne"
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

    {
        theme: "Réseaux",
        question: "Quel équipement permet de relier plusieurs réseaux entre eux ?",
        reponse: "Un routeur"
    },

    {
        theme: "Réseaux",
        question: "Quel protocole permet d'obtenir automatiquement une adresse IP ?",
        reponse: "DHCP"
    },

    {
        theme: "Réseaux",
        question: "Une adresse IP identifie-t-elle nécessairement un ordinateur précis ?",
        reponse: "Non"
    },

    {
        theme: "Réseaux",
        question: "Quel protocole est généralement utilisé pour envoyer des courriels ?",
        reponse: "SMTP"
    },

    {
        theme: "Réseaux",
        question: "TCP garantit-il que les paquets suivent tous exactement le même chemin ?",
        reponse: "Non"
    },

    {
        theme: "Réseaux",
        question: "Quelle est la différence principale entre TCP et UDP ?",
        reponse: "TCP assure une transmission fiable ; UDP ne garantit pas la livraison"
    },

    {
        theme: "Réseaux",
        question: "Le protocole IP garantit-il que les données arrivent à destination ?",
        reponse: "Non"
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

    {
        theme: "Cryptographie",
        question: "Dans un chiffrement asymétrique, combien de clés possède chaque utilisateur ?",
        reponse: "Deux : une clé publique et une clé privée"
    },

    {
        theme: "Cryptographie",
        question: "La clé privée doit-elle être communiquée aux autres utilisateurs ?",
        reponse: "Non"
    },

    {
        theme: "Cryptographie",
        question: "À quoi sert principalement le chiffrement ?",
        reponse: "À assurer la confidentialité des données"
    },

    {
        theme: "Cryptographie",
        question: "Une fonction de hachage est-elle conçue pour être facilement réversible ?",
        reponse: "Non"
    },

    {
        theme: "Cryptographie",
        question: "À quoi peut servir une fonction de hachage pour stocker des mots de passe ?",
        reponse: "À stocker une empreinte plutôt que le mot de passe en clair"
    },

    {
        theme: "Cryptographie",
        question: "Pour vérifier une signature numérique, utilise-t-on la clé privée du signataire ?",
        reponse: "Non, on utilise sa clé publique"
    },

    {
        theme: "Cryptographie",
        question: "Quel problème principal résout le chiffrement asymétrique par rapport au chiffrement symétrique ?",
        reponse: "L'échange de la clé secrète"
    },

    {
        theme: "Cryptographie",
        question: "HTTPS utilise-t-il uniquement du chiffrement asymétrique pendant toute la communication ?",
        reponse: "Non, il utilise notamment un échange sécurisé puis du chiffrement symétrique"
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

    {
        theme: "Intelligence artificielle",
        question: "Qu'est-ce qu'un modèle en apprentissage automatique ?",
        reponse: "Un système appris à partir de données pour réaliser une tâche"
    },

    {
        theme: "Intelligence artificielle",
        question: "À quoi sert un jeu de données de test ?",
        reponse: "À évaluer le modèle sur des données qu'il n'a pas utilisées pour son entraînement"
    },

    {
        theme: "Intelligence artificielle",
        question: "Qu'est-ce que le surapprentissage ?",
        reponse: "Lorsque le modèle apprend trop précisément les données d'entraînement et généralise mal"
    },

    {
        theme: "Intelligence artificielle",
        question: "Dans un apprentissage supervisé, les données d'entraînement sont-elles généralement associées à des réponses attendues ?",
        reponse: "Oui"
    },

    {
        theme: "Intelligence artificielle",
        question: "Qu'est-ce qu'une classification ?",
        reponse: "Attribuer une donnée à une catégorie"
    },

    {
        theme: "Intelligence artificielle",
        question: "Prédire le prix d'une maison est-il un problème de classification ?",
        reponse: "Non, c'est généralement un problème de régression"
    },

    {
        theme: "Intelligence artificielle",
        question: "Un modèle d'IA donne-t-il nécessairement une réponse correcte ?",
        reponse: "Non"
    },

    {
        theme: "Intelligence artificielle",
        question: "Pourquoi sépare-t-on les données d'entraînement et de test ?",
        reponse: "Pour évaluer la capacité du modèle à généraliser"
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

    {
        theme: "Structures de données",
        question: "Dans une pile, où ajoute-t-on un nouvel élément ?",
        reponse: "Au sommet de la pile"
    },

    {
        theme: "Structures de données",
        question: "Dans une file, quel élément est retiré en premier ?",
        reponse: "Le plus ancien"
    },

    {
        theme: "Structures de données",
        question: "Quelle structure est adaptée à la gestion d'une file d'attente ?",
        reponse: "Une file"
    },

    {
        theme: "Structures de données",
        question: "Quelle structure est naturellement adaptée à la gestion des appels récursifs ?",
        reponse: "Une pile"
    },

    {
        theme: "Structures de données",
        question: "Une liste Python est-elle nécessairement une liste chaînée ?",
        reponse: "Non"
    },

    {
        theme: "Structures de données",
        question: "Quel avantage présente une structure de données adaptée au problème ?",
        reponse: "Elle peut rendre les opérations plus efficaces"
    },

    {
        theme: "Structures de données",
        question: "Dans une pile vide, peut-on retirer un élément ?",
        reponse: "Non"
    },

    {
        theme: "Structures de données",
        question: "Une file respecte-t-elle le principe LIFO ?",
        reponse: "Non, elle respecte FIFO"
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

    {
        theme: "POO",
        question: "Comment appelle-t-on une instance d'une classe ?",
        reponse: "Un objet"
    },

    {
        theme: "POO",
        question: "À quoi sert la méthode __init__ en Python ?",
        reponse: "À initialiser un objet lors de sa création"
    },

    {
        theme: "POO",
        question: "Que représente généralement self dans une méthode Python ?",
        reponse: "L'objet sur lequel la méthode est appelée"
    },

    {
        theme: "POO",
        question: "Une classe peut-elle créer plusieurs objets ?",
        reponse: "Oui"
    },

    {
        theme: "POO",
        question: "Une classe et un objet sont-ils la même chose ?",
        reponse: "Non"
    },

    {
        theme: "POO",
        question: "Comment appelle-t-on une variable appartenant à un objet ?",
        reponse: "Un attribut"
    },

    {
        theme: "POO",
        question: "Comment appelle-t-on une fonction définie dans une classe ?",
        reponse: "Une méthode"
    },

    {
        theme: "POO",
        question: "Peut-on avoir plusieurs objets différents issus d'une même classe ?",
        reponse: "Oui"
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

    {
        theme: "Architecture",
        question: "Que signifie CPU ?",
        reponse: "Central Processing Unit"
    },

    {
        theme: "Architecture",
        question: "Quel composant permet de conserver les données même lorsque l'ordinateur est éteint ?",
        reponse: "Une mémoire non volatile, comme un SSD"
    },

    {
        theme: "Architecture",
        question: "La RAM est-elle une mémoire volatile ?",
        reponse: "Oui"
    },

    {
        theme: "Architecture",
        question: "Le processeur contient-il une mémoire appelée registres ?",
        reponse: "Oui"
    },

    {
        theme: "Architecture",
        question: "À quoi sert la mémoire RAM ?",
        reponse: "À stocker temporairement les programmes et données utilisés"
    },

    {
        theme: "Architecture",
        question: "Le processeur exécute-t-il directement un programme Python ?",
        reponse: "Non, Python doit notamment être interprété ou traduit en instructions exécutables"
    },

    {
        theme: "Architecture",
        question: "Quel est le rôle de l'unité de contrôle du processeur ?",
        reponse: "Elle contrôle et coordonne l'exécution des instructions"
    },

    {
        theme: "Architecture",
        question: "Un SSD est-il une mémoire volatile ?",
        reponse: "Non"
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

    {
        theme: "Données",
        question: "Dans un fichier CSV, les colonnes sont-elles nécessairement séparées par une virgule ?",
        reponse: "Non, le séparateur peut être différent, par exemple un point-virgule"
    },

    {
        theme: "Données",
        question: "JSON représente-t-il naturellement des données sous forme de paires clé-valeur ?",
        reponse: "Oui"
    },

    {
        theme: "Données",
        question: "Dans un tableau de données, que représente généralement une ligne ?",
        reponse: "Un enregistrement ou une observation"
    },

    {
        theme: "Données",
        question: "Qu'est-ce qu'une donnée structurée ?",
        reponse: "Une donnée organisée selon une structure définie"
    },

    {
        theme: "Données",
        question: "Un fichier CSV peut-il contenir plusieurs types de données dans une même ligne ?",
        reponse: "Oui"
    },

    {
        theme: "Données",
        question: "Quel type Python est particulièrement adapté pour représenter une association clé-valeur ?",
        reponse: "Un dictionnaire"
    },

    {
        theme: "Données",
        question: "Une donnée peut-elle être considérée comme une information sans contexte ?",
        reponse: "Pas nécessairement, le contexte est important pour interpréter une donnée"
    },

    {
        theme: "Données",
        question: "Quel est l'intérêt principal de structurer des données ?",
        reponse: "Faciliter leur stockage, leur traitement et leur exploitation"
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

    {
        theme: "Recherche",
        question: "Quelle est la complexité d'une recherche séquentielle dans le pire des cas ?",
        reponse: "O(n)"
    },

    {
        theme: "Recherche",
        question: "Une recherche dichotomique peut-elle fonctionner sur un tableau non trié ?",
        reponse: "Non"
    },

    {
        theme: "Recherche",
        question: "Quel élément examine-t-on généralement en premier lors d'une recherche dichotomique ?",
        reponse: "L'élément du milieu"
    },

    {
        theme: "Recherche",
        question: "Lors d'une recherche dichotomique, que fait-on après avoir comparé la valeur recherchée à la valeur centrale ?",
        reponse: "On élimine la moitié du tableau"
    },

    {
        theme: "Recherche",
        question: "Une recherche séquentielle nécessite-t-elle que les données soient triées ?",
        reponse: "Non"
    },

    {
        theme: "Recherche",
        question: "Pour n = 1 000 000, une recherche dichotomique examine-t-elle environ un million d'éléments ?",
        reponse: "Non, environ log₂(1 000 000), soit environ 20"
    },

    {
        theme: "Recherche",
        question: "La recherche dichotomique est-elle généralement plus rapide que la recherche séquentielle sur de grandes données triées ?",
        reponse: "Oui"
    },

    {
        theme: "Recherche",
        question: "Peut-on utiliser directement une recherche dichotomique sur une liste Python non triée ?",
        reponse: "Non"
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

    {
        theme: "Systèmes",
        question: "Quel est le rôle principal d'un système d'exploitation ?",
        reponse: "Gérer les ressources matérielles et fournir des services aux programmes"
    },

    {
        theme: "Systèmes",
        question: "Linux est-il un système d'exploitation ?",
        reponse: "Oui"
    },

    {
        theme: "Systèmes",
        question: "Un programme peut-il utiliser directement le matériel sans passer par le système d'exploitation ?",
        reponse: "En général, non"
    },

    {
        theme: "Systèmes",
        question: "Qu'est-ce qu'un processus ?",
        reponse: "Un programme en cours d'exécution"
    },

    {
        theme: "Systèmes",
        question: "Deux processus peuvent-ils s'exécuter en même temps sur un ordinateur multicœur ?",
        reponse: "Oui"
    },

    {
        theme: "Systèmes",
        question: "À quoi sert un système de fichiers ?",
        reponse: "À organiser et gérer les fichiers sur un support de stockage"
    },

    {
        theme: "Systèmes",
        question: "Un fichier supprimé est-il nécessairement immédiatement détruit physiquement du disque ?",
        reponse: "Non"
    },

    {
        theme: "Systèmes",
        question: "Le système d'exploitation est-il un matériel informatique ?",
        reponse: "Non, c'est un logiciel"
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

    {
        theme: "Web",
        question: "Que signifie CSS ?",
        reponse: "Cascading Style Sheets"
    },

    {
        theme: "Web",
        question: "Quel langage permet principalement de programmer le comportement dynamique d'une page Web côté navigateur ?",
        reponse: "JavaScript"
    },

    {
        theme: "Web",
        question: "HTML est-il un langage de programmation ?",
        reponse: "Non, c'est un langage de balisage"
    },

    {
        theme: "Web",
        question: "Quel protocole permet à un navigateur de demander une ressource à un serveur Web ?",
        reponse: "HTTP"
    },

    {
        theme: "Web",
        question: "HTTPS chiffre-t-il les échanges entre le navigateur et le serveur ?",
        reponse: "Oui"
    },

    {
        theme: "Web",
        question: "Un cookie est-il nécessairement un virus ?",
        reponse: "Non"
    },

    {
        theme: "Web",
        question: "Le navigateur est-il le serveur qui héberge une page Web ?",
        reponse: "Non"
    },

    {
        theme: "Web",
        question: "Quel langage est principalement utilisé pour décrire la structure d'une page Web ?",
        reponse: "HTML"
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

    {
        theme: "Graphes",
        question: "Comment appelle-t-on une arête possédant une direction ?",
        reponse: "Un arc"
    },

    {
        theme: "Graphes",
        question: "Dans un graphe non orienté, une arête possède-t-elle une direction ?",
        reponse: "Non"
    },

    {
        theme: "Graphes",
        question: "Comment appelle-t-on le nombre d'arêtes reliées à un sommet dans un graphe non orienté ?",
        reponse: "Le degré du sommet"
    },

    {
        theme: "Graphes",
        question: "Un graphe peut-il contenir plusieurs arêtes entre deux mêmes sommets ?",
        reponse: "Oui, selon le modèle de graphe utilisé"
    },

    {
        theme: "Graphes",
        question: "Qu'est-ce qu'un graphe pondéré ?",
        reponse: "Un graphe dont les arêtes ou arcs possèdent des poids"
    },

    {
        theme: "Graphes",
        question: "Une matrice d'adjacence permet-elle de représenter un graphe ?",
        reponse: "Oui"
    },

    {
        theme: "Graphes",
        question: "Une liste d'adjacence permet-elle également de représenter un graphe ?",
        reponse: "Oui"
    },

    {
        theme: "Graphes",
        question: "Dans un graphe orienté, le chemin A → B implique-t-il nécessairement B → A ?",
        reponse: "Non"
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
    },

    {
        theme: "Récursivité",
        question: "Une fonction récursive peut-elle avoir plusieurs cas de base ?",
        reponse: "Oui"
    },

    {
        theme: "Récursivité",
        question: "La récursivité utilise-t-elle une pile d'appels ?",
        reponse: "Oui"
    },

    {
        theme: "Récursivité",
        question: "Que se passe-t-il si une fonction récursive n'atteint jamais son cas de base ?",
        reponse: "La récursion continue jusqu'à une erreur ou un dépassement de pile"
    },

    {
        theme: "Récursivité",
        question: "Une boucle peut-elle parfois remplacer une fonction récursive ?",
        reponse: "Oui"
    },

    {
        theme: "Récursivité",
        question: "Une fonction récursive doit-elle obligatoirement s'appeler directement elle-même ?",
        reponse: "Non, elle peut aussi être indirectement récursive"
    },

    {
        theme: "Récursivité",
        question: "La fonction factorielle peut-elle être définie récursivement ?",
        reponse: "Oui"
    },

    {
        theme: "Récursivité",
        question: "Quel est le cas de base classique de la factorielle récursive ?",
        reponse: "0! = 1"
    },

    {
        theme: "Récursivité",
        question: "Une récursion est-elle toujours plus efficace qu'une boucle ?",
        reponse: "Non"
    }

];