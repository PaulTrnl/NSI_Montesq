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


# Programmation impérative

!!! note "À retenir"

    Dans le paradigme impératif, on décrit un programme comme une suite d'instructions qui sont exécutées les unes après les autres.

    Le programme indique donc comment obtenir le résultat, en faisant évoluer progressivement l'état du programme.

    On utilise généralement pour cela : des variables, des affectactions, des structures conditionnelles, des boucles et des fonctions.


Exemple :

```python
somme = 0

for i in range(1, 6):
    somme = somme + i

print(somme)
```

Le programme effectue successivement les opérations suivantes :

1. `somme` vaut `0`.
2. `i` prend la valeur `1`.
3. `somme` devient `1`.
4. `i` prend la valeur `2`.
5. `somme` devient `3`.
6. Le processus continue jusqu'à `i = 5`.
7. Le résultat est affiché.

La variable `somme` **change de valeur au cours de l'exécution**.

Le programme possède donc un **état qui évolue**.


# Programmation fonctionnelle

!!! note "À retenir"
    Dans le paradigme fonctionnel, un programme est principalement construit à partir de fonctions.

    Une fonction reçoit des données en entrée et produit un résultat en sortie.

    L'idée importante est de transformer des données plutôt que de modifier progressivement un état.

Une fonction peut être vue comme une transformation : donnée -> fonction -> résultat

Exemple :
```python
def double(x):
    return 2 * x
```

On peut appliquer cette fonction à différentes valeurs :
```python
double(3)   # 6
double(7)   # 14
double(10)  # 20
```

La fonction `double` ne modifie pas `x`. Elle reçoit une valeur et renvoie une nouvelle valeur.

# Programmation Orientée Objet (POO)

![Mon super GIF animé](img/chaine.gif){ width="350" }

