---
layout: default
title: "Les listes chaînées"
niveau: terminale-nsi
chapitre: "Chapitre 2"
ordre: 2
---

# Les listes chaînées

Une liste chaînée est une structure de données où chaque élément (appelé "cellule" ou "nœud") contient une valeur et un pointeur vers l'élément suivant.

## Implémentation simple en Python

```python
class Cellule:
    def __init__(self, valeur, suivant=None):
        self.valeur = valeur
        self.suivant = suivant

# Création d'une liste : 1 -> 2 -> 3
liste = Cellule(1, Cellule(2, Cellule(3)))
```

## Exercice

Écris une fonction `longueur(liste)` qui calcule le nombre d'éléments d'une liste chaînée.

## Liens utiles

- [Documentation Python officielle](https://docs.python.org/fr/3/)
