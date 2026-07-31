# Terminale NSI

Petit échauffement avant d'attaquer l'année !

![Mon super GIF animé](img/youpi-matin-les-inconnus.gif){ width="350" }


# Rappels de programmation Python

Les notions à maitriser pour aborder correctement cette année :

- [Bases de la programmation python (variables, types, fonctions)](bases_prog.md)
- [Types construits (listes, dictionnaires, p-uplets)](types_construits.md)


# I. Activité de révision avec l'algorithme des K plus proches voisins (KNN)


!!! question "À vous de réfléchir (pas trop longtemps svp)"

    [Lien vers l'animation](https://physalgo.fr/Dariush_KVoisins/index.html)

    Selon vous, il est plus probable que l'animal inconnu présent en bas à droite de l'image et représenté par un '?',  soit un ours ou un phoque ? Selon quel(s) critère(s) ?

    ![Animation](img/phoque1.PNG){ width="350" }


---

!!! info "Information"
    Cet exemple est représentatif de la nécessité de disposer d'une méthode de classification des motifs. Une réponse a été apportée par la faculté de médecine aéronautique de l'US Air Force dans un rapport publié en 1951, connue depuis sous la règle des k plus proches voisins (Fix \& Hodges, 1951). 

    L’algorithme des k plus proches voisins s’écrit en abrégé k-NN ou KNN, k-nearest neighbors. k est un nombre entier positif généralement petit et impair.
    Il s’agit d’un des algorithmes de machine learning ou "apprentissage machine" qui est essentiel dans le milieu de l’intelligence artificielle.
    Ce genre d’algorithme permet par exemple de prédire le comportement d’une personne en s’intéressant à son milieu. Il peut être utilisé par des géants de la vente comme Amazon ou Netflix afin de vous suggérer un produit (film, musique, etc.). En effet, en disposant de vos données (âge, derniers achats, etc.) et en les comparant à celle d’un client qui a acheté un produit, un algorithme peut tâcher de prédire si vous seriez intéressé ou non par le produit (vous catégoriser).


---

# Exercice — Attrapez-les tous

!!! abstract "Objectif"

    pass

## Énoncé

Vous avez à disposition une liste de dictionnaires contenant des Pokémons, chaque pokémon est représenté de la façon suivante :

```python
{'Nom': 'Salamèche', 'Points de vie': 85, 'Attaque': 67, 'Type': 'Feu'}
```

On travaille ici en deux dimensions, chaque Pokémon est représenté par un point dont l'abscisse est la valeur de ses points de vie, et l'ordonnée la valeur de ses points d'attaque. Ils sont représentés par un symbole correspondant à leur type.

### Question 1

Écrire une fonction `moyenne(notes)` qui renvoie la moyenne des valeurs de la liste.



### Question 2

Écrire une fonction `meilleure_note(notes)` qui renvoie la plus grande note.

---

!!! tip "Conseil"

    Pensez à parcourir la liste avec une boucle `for`.

---

??? question "Afficher un indice"

    Pour trouver le maximum, on peut conserver une variable contenant le meilleur résultat rencontré.

---

??? success "Correction"

    ```python
    def meilleure_note(notes):
        maximum = notes[0]

        for note in notes:
            if note > maximum:
                maximum = note

        return maximum
    ```



























!!! abstract "Définition"

    Une base de données est un ensemble organisé de données.


!!! tip "Astuce"

    Utilisez une compréhension de liste pour écrire du code Python plus compact.





!!! warning "Attention"

    Les indices d'une liste commencent à 0 en Python.


!!! danger "Erreur fréquente"

    Ne modifiez pas une liste pendant que vous la parcourez.


!!! success "Objectif atteint"

    La fonction respecte bien la spécification demandée.


!!! question "À vous de réfléchir"

    Quelle est la complexité de cet algorithme ?


!!! example "Exemple"

    ```python
    liste = [1, 2, 3]
    print(liste)
    ```


!!! abstract "Définition"

    Une base de données est un ensemble organisé de données.

!!! note "À retenir"

    Une clé primaire identifie de manière unique un enregistrement.
