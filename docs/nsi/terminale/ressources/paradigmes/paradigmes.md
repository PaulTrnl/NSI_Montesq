# Thème 1 : Paradigmes de programmation


!!! note "À retenir"

    Un **paradigme de programmation** est une manière de penser et d'organiser un programme.

    Il définit notamment :

    - la façon de représenter les données ;
    - la manière de décrire les traitements ;
    - la structure générale du code.

    Un langage de programmation peut utiliser **plusieurs paradigmes**.

    Par exemple, **Python** permet de programmer selon plusieurs paradigmes :

    - programmation impérative ;
    - programmation orientée objet ;
    - programmation fonctionnelle.

---

!!! abstract "Objectif"

    Dans ce chapitre, nous allons identifier les différences entre ces paradigmes de programmation et comprendre les caractéristiques de chacun.


# Programmation impérative

![Mon super GIF animé](img/instructions.gif){ width="350" }

!!! note "À retenir"

    Dans le paradigme impératif, on décrit un programme comme une suite d'instructions qui sont exécutées les unes après les autres.

    Le programme indique donc comment obtenir le résultat, en faisant évoluer progressivement l'état du programme.

    On utilise généralement pour cela : des variables, des affectactions, des structures conditionnelles, des boucles et des fonctions.


Exemple :

On souhaite calculer les carrés des nombres d'une liste.

```python
nombres = [1, 2, 3, 4, 5] 

carres = [] 

for n in nombres: 
    carres.append(n ** 2) 
    
print(carres)
```

Le programme effectue successivement les opérations suivantes :

1. `nombres` contient `[1, 2, 3, 4, 5]`.
2. `carres` est initialisée avec une liste vide : `[]`.
3. La boucle commence avec `n = 1`.
4. Le carré de `1` est calculé : `1 ** 2 = 1`.
5. `1` est ajouté à carres : `[1]`.
6. `n` prend la valeur `2`.
7. Le carré de `2` est calculé : `2 ** 2 = 4`.
8. `4` est ajouté à `carres` : `[1, 4]`.
9. Le processus continue avec `n = 3`, puis `n = 4` et `n = 5`.
10. À la fin, `carres` contient `[1, 4, 9, 16, 25]`.
11. Le résultat est affiché.


L'approche impérative décrit donc les différentes étapes permettant de **modifier progressivement l'état du programme**.



# Programmation fonctionnelle

![Mon super GIF animé](img/transfo.gif){ width="350" }

## Principe 

!!! note "À retenir"
    La programmation fonctionnelle est un paradigme de programmation qui consiste à construire un programme en utilisant principalement des fonctions et des transformations de données.

    Elle privilégie les transformations de données à l'aide de fonctions et cherche à limiter les modifications de l'état du programme.

Reprenons l'exemple utilisé dans la partie précédente.
Avec une approche fonctionnelle, on peut utiliser map :

Exemple :
```python
nombres = [1, 2, 3, 4, 5]

carres = map(lambda n: n ** 2, nombres)

print(list(carres))
```

L'approche fonctionnelle ne décrit donc pas les différentes étapes de modification d'une liste. Elle décrit plutôt **la transformation que l'on souhaite appliquer aux données**.


## Fonctions pures et effets de bord

Une fonction est dite **pure** si :

- elle donne toujours le même résultat pour les mêmes paramètres ;
- elle ne modifie pas de données extérieures à la fonction.

Exemple :
```python
def carre(x):
    return x ** 2

carre(5) # 25
carre(5) # 25
```

Pour une même valeur de `x`, elle produit toujours le même résultat. Elle ne modifie aucune variable extérieure.

Une fonction produit un **effet de bord** lorsqu'elle provoque une modification ou une action observable en dehors de son calcul.

Par exemple, modifier une variable extérieure :
```python
total = 0

def ajouter(x):
    global total
    total += x
```

L'appel :
```python
ajouter(5)
```

ou effectuer un affichage : 
```python
def afficher_carre(x):
    print(x ** 2)
```

Dans les deux cas, la fonction ne se contente pas de calculer et de retourner une valeur.

!!! note "À retenir"
    En programmation fonctionnelle, on cherche autant que possible à utiliser des **fonctions pures** et à limiter les **effets de bord**.

    Cela rend les fonctions plus faciles à comprendre, à tester et à réutiliser.


## Les fonctions comme objets

En Python, une fonction peut être utilisée comme une donnée.

Elle peut notamment être :

- stockée dans une variable ;
- passée comme argument à une autre fonction.

Exemple :
```python
def carre(x):
    return x ** 2
```

On peut stocker cette fonction dans une variable : 

```python
f = carre

print(f(5)) # renverra 25
```

`f` et `carre` désignent alors la même fonction.

Une fonction peut également être passée comme argument à une autre fonction.

Exemple :

```python
def appliquer(f, x):
    return f(x)
```

On peut alors écrire : 
```python
def carre(x):
    return x ** 2

print(appliquer(carre, 5)) # renverra 25
```

La fonction `appliquer` reçoit `carre` comme argument et l'utilise ensuite sur `5`.

!!! note "À retenir"
    En Python, une fonction peut être manipulée comme une valeur.

    Elle peut notamment être **stockée dans une variable** ou **passée comme argument** à une autre fonction.

    Une **fonction d'ordre supérieur** est une fonction qui reçoit une fonction en argument ou qui renvoie une fonction.

## Les fonctions lambda

Une fonction `lambda` permet de créer rapidement une petite fonction.

La syntaxe est la suivante :
```python
lambda parametre: expression
```

Exemple :
```python
lambda x: x ** 2
```

équivaut à :
```python
def carre(x):
    return x ** 2
```

On peut donc écrire :
```python
f = lambda x: x ** 2

print(f(5)) # renverra 25
```

!!! info "Information"
    Les fonctions `lambda` sont particulièrement utilisées avec `map`, `filter` et `reduce`.

!!! note "À retenir"
    `lambda` permet de définir rapidement une petite fonction, généralement utilisée directement à un endroit précis.

## map : transformer

La fonction `map` permet d'appliquer une fonction à chaque élément d'une collection.

Exemple :
```python
nombres = [1, 2, 3, 4, 5]

carres = map(lambda x: x ** 2, nombres)

print(list(carres)) # [1, 4, 9, 16, 25]
```

On peut lire ce programme ainsi : pour chaque élément de `nombres`, calculer son carré.


## filter : sélectionner

La fonction `filter` permet de conserver uniquement les éléments qui vérifient une condition. La fonction utilisée doit renvoyer `True` ou `False`.

Exemple :
```python
nombres = [1, 2, 3, 4, 5, 6]

pairs = filter(lambda x: x % 2 == 0, nombres)

print(list(pairs)) # [2, 4, 6]
```

On peut lire ce programme ainsi : pour chaque élément, vérifier s'il est pair et conserver uniquement ceux qui le sont.


## reduce : combiner

La fonction `reduce` permet de combiner les éléments d'une collection pour obtenir une seule valeur. Elle se trouve dans le module `functools`.

Exemple :
```python
from functools import reduce

nombres = [1, 2, 3, 4, 5]
somme = reduce(lambda x, y: x + y, nombres)

print(somme) # 15 
```

Le calcul est effectué progressivement :
```
1 + 2 → 3
3 + 3 → 6
6 + 4 → 10
10 + 5 → 15
```

## Combiner filter, map et reduce

Les trois fonctions peuvent être utilisées successivement.

On dispose de : 

```python
nombres = [1, 2, 3, 4, 5, 6]
```

On souhaite :

1. conserver les nombres pairs ;
2. calculer leur carré ;
3. calculer leur somme. 

```python
from functools import reduce

nombres = [1, 2, 3, 4, 5, 6]

pairs = filter(lambda x: x % 2 == 0, nombres)

carres = map(lambda x: x ** 2, pairs)

somme = reduce(lambda x, y: x + y, carres)

print(somme) # 56
```

!!! note "À retenir"
    Une approche fonctionnelle permet d'**enchaîner des transformations** pour obtenir progressivement le résultat souhaité.

# Programmation Orientée Objet (POO)

![Mon super GIF animé](img/chaine.gif){ width="350" }

[📥 Support élève du thème 1 (PDF)](feuille_eleve.pdf){ .md-button }

## Introduction à la POO (Activité débranchée 1)

!!! warning "À ne pas oublier"

    Pensez à répondre aux questions sur la **feuille distribuée en classe**.

## Principe
!!! note "À retenir"
    La programmation orientée objet (POO) est un paradigme de programmation qui consiste à organiser un programme autour d'**objets**.

    Un objet regroupe :

    - des données, appelées **attributs** ;
    - des fonctions, appelées **méthodes**.

Prenons l'exemple d'une voiture, celle-ci possède des caractéristiques, comme un nombre de portes, une couleur, une marque, une vitesse maximale, etc. Cela va donc correspondre aux **attributs** de la classe Voiture. Cette voiture est également capable de se déplacer, de freiner (il vaut mieux), de tourner, etc. Ces actions possibles constituent les **méthodes** de la classe Voiture.

Une classe va donc correspondre à un modèle, une sorte de moule, dont tous les objets qui seront créés avec ce dernier partageront les mêmes attributs et méthodes. Ces objets seront donc du type class en python. Chaque objet créé correspond à une **instance** d'une classe, on utilise par exemple le moule qui correspond à une voiture, puis il ne reste qu'à définir la valeur de ses attributs (ex : Rouge pour la couleur).

## Application

## Exercice 1 (C'est la classe)

Soit le programme suivant :

```python
class Ennemi:
    def __init__(self):
        self.point_de_vie = 20
        self.difficulte_ia = "Facile"

    def est_vaincu(self):
        return self.point_de_vie <= 0

    def degats_subis(self, degat):
        self.point_de_vie -= degat

    def mise_a_jour_ia(self):
        if self.point_de_vie < 13:
            self.difficulte_ia = "Moyenne"
        elif self.point_de_vie < 5:
            self.difficulte_ia = "Difficile"

mechant = Ennemi()

degat = 1
while not mechant.est_vaincu():
    mechant.degats_subis(degat)
    mechant.mise_a_jour_ia()
    degat += 1
```

!!! warning "À ne pas oublier"

    Pensez à répondre aux questions sur la **feuille distribuée en classe**.

❓ Question 1 :

Identifier le type de la variable `mechant`.

❓ Question 2 :

Lister les attributs et méthodes de la classe `Ennemi`.

❓ Question 3 :

Quelles sont les valeurs des attributs de l'objet `mechant`à sa création ?

❓ Question 4 :

Noter à chaque tour de la boucle, les valeurs des attributs de `mechant`.

---


## Activité 1 (Classe-ment)

❓ Question 1 :
    
Implémenter la classe `Ennemi` donnée précédemment. Puis ajouter lui un nouvel attribut nommé `arme`. Cet attribut correspond à un tuple (nom de l'arme, dégât de l'arme).

❓ Question 2 :

Ajouter une méthode `prendre_arme` qui met à jour l'arme de l'Ennemi. Cette méthode prend en paramètres un nom d'arme et des dégâts.

❓ Question 3 :

Ajouter ensuite une méthode permettant à la classe `Ennemi` de tirer nommée `faire_degat` et qui renvoie les dégâts de l'arme.

❓ Question 4 :

Créer deux instances de la classe `Ennemi`. Puis effectuer un tirage aléatoire de valeurs, si la valeur est paire alors c'est le premier ennemi qui tire, réduisant la vie du second. Si la valeur est impaire c'est l'inverse. Réaliser des tirages aléatoires de valeurs jusqu'à la mort d'un des Ennemis et afficher le nombre de points de vie restant du vainqueur.

---

## Activité 2 (Bot-aille)

On récupère la classe JeuDeCartes suivante, les attributs ont été complétés, mais les méthodes non.

```python
class JeuDeCartes:

    def __init__(self):
        """Construit un jeu de 52 cartes."""
        self.cartes = []

        self.valeurs = [
            2, 3, 4, 5, 6, 7, 8, 9, 10,
            "valet", "dame", "roi", "as"
        ]

        self.couleurs = [
            "Pique", "Trèfle", "Carreau", "Coeur"
        ]

        # Création des 52 cartes
        # À compléter

    def nomCarte(self, c):
        """Renvoie le nom d'une carte."""
        # À compléter

    def battre(self):
        """Mélange les cartes."""
        # À compléter

    def tirer(self):
        """Retire et renvoie une carte."""
        # À compléter

    #Q1 Initialisation de la classe JeuDeCartes
    jeu = JeuDeCartes()
    print(jeu.cartes)

    #Q2 Affichage du nom d'une carte
    print(jeu.nomCarte((1, 2)))
    print(jeu.nomCarte((12, 1)))

    #Q3 Battre les cartes
    jeu.battre()
    print(jeu.cartes)   

    #Q4 Tirer une carte
    carte = jeu.tirer()
    print(jeu.nomCarte(carte))
    print(jeu.cartes)

    #Q5 Tirage de toutes les cartes
    jeu = JeuDeCartes()
    jeu.battre()
    for n in range(52):
        '''
        à compléter
        '''

    #Q6 Simuler un jeu de bataille entre deux bots (joueur robot)
    jeuA = JeuDeCartes()
    jeuB = JeuDeCartes()
    jeuA.battre()
    jeuB.battre()
    pointA = 0
    pointB = 0
    # à compléter
```

On souhaite simuler le jeu de la bataille, utilisant 52 cartes. On sépare les cartes par ce qu'on appelle les couleurs (Trèfle, Carreau, Pique, Coeur). Chaque carte possède également une valeur (2, 3, 4, 5, 6, 7, 8, 9, 10, Valet, Dame, Roi, As).


❓ Question 1 :

Compléter la méthode `init` de la classe `JeuDeCartes`, de façon à ce que l'attribut `cartes` contienne toutes les cartes du jeu. Autrement dit, que la liste contienne tous les tuples (valeur,couleur) possibles afin de représenter les cartes existantes dans un jeu de 52 cartes.

❓ Question 2 :

Désormais, compléter la méthode `nomCarte` permettant d'afficher le nom d'une carte. (Ex : As Pique)

❓ Question 3 :

Compléter la méthode `battre` permettant de mélanger les cartes. Pour cela, utiliser la fonction `shuffle` présente dans la bibliothèque `random`.

❓ Question 4 :

Compléter la méthode `tirer` permettant de tirer la carte à l'indice 0 et de la supprimer de la liste de l'attribut `cartes`. La méthode retourne le tuple correspondant à la carte. Si toutes les cartes sont tirées, il faudra retourner `None`.

❓ Question 5 :

Vérifier la méthode `tirer` en retirant toutes les cartes de la liste une par une avec une boucle `for`.

❓ Question 6 :

Simuler un jeu de bataille entre deux bots (= joueur robot). Le joueur qui remporte le pli gagne un point.

❓ Question 7 :

En utilisant le programme `affichage_image.py` et les images PNG (fournies dans le répertoire `data`) représentant les différentes cartes, effectuer un rendu graphique de la simulation de la bataille.


---

## Exercice 2 (Appartement non meublé)

Compléter les classes suivantes.

```python
class Piece:
    """Représente une pièce d'un appartement."""

    def __init__(self, nom, surface):
        """Initialise une pièce avec son nom et sa surface en m².

        Args:
            nom (str): Nom de la pièce.
            surface (float): Surface de la pièce en m².
        """
        ...

    def getNom(self):
        """Retourne le nom de la pièce.

        Returns:
            str: Nom de la pièce.
        """
        ...

    def getSurface(self):
        """Retourne la surface de la pièce.

        Returns:
            float: Surface de la pièce en m².
        """
        ...

    def setSurface(self, s):
        """Modifie la surface de la pièce.

        Args:
            s (float): Nouvelle surface de la pièce en m².
        """
        ...


class Appartement:
    """Représente un appartement composé de plusieurs pièces."""

    def __init__(self, nom):
        """Initialise un appartement avec une liste de pièces vide.

        Args:
            nom (str): Nom de l'appartement.
        """
        ...

    def ajouter(self, piece):
        """Ajoute une pièce à l'appartement.

        Args:
            piece (Piece): Pièce à ajouter à l'appartement.
        """
        ...

    def nbPieces(self):
        """Retourne le nombre de pièces de l'appartement.

        Returns:
            int: Nombre de pièces.
        """
        ...

    def getSurfaceTotale(self):
        """Calcule et retourne la surface totale de l'appartement.

        Returns:
            float: Surface totale de l'appartement en m².
        """
        ...

    def getListePieces(self):
        """Retourne la liste des pièces de l'appartement.

        Returns:
            list: Liste des instances de Piece.
        """
        ...

```

[📥 Résumé de cours du thème 1 (PDF)](feuille_cours.pdf){ .md-button }