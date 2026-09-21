# Thème 2 — Programmation Python

![Mon super GIF animé](img/prog.gif){ width="350" }


## Séance 1 — Quelques notions pour bien commencer

!!! abstract "Projet fil rouge — Montesquéria"
    Après avoir découvert comment les différentes parties de la ville peuvent communiquer grâce aux réseaux, nous allons maintenant apprendre à **programmer**. 
    L'objectif de cette nouvelle partie est de donner progressivement vie à Montesquéria : informations, calcu

---

### Objectifs de la séance

À la fin de cette séance, vous serez capables de :

* écrire quelques instructions Python ;
* utiliser des variables ;
* réaliser des dessins simples avec turtle ;
* répéter des instructions avec for.

---

[📥 Télécharger le PDF](02_Python_fiche_seance_1.pdf){ .md-button }

!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.

---

### 1. Notre premier programme

Un programme est une suite d'instructions données à un ordinateur. Python permet d'écrire ces instructions simplement. 

!!! question "Question 1"
    Tester le programme suivant : 

    ```python 
    print("Bienvenue à Montesquéria !") 
    ``` 
    
    Modifier le programme pour afficher : 
    
    ```text 
    Bienvenue à Montesquéria ! 
    La ville du futur. 
    ```

!!! note "À retenir" 
    `print()` permet d'afficher une information.

---

### 2. Faire des calculs



Python peut aussi effectuer des calculs.

```python
    print(10 + 3)
    print(10 - 3)
    print(10 * 3)
    print(10 / 3)
    print(10 // 3)
    print(10 % 3)
```




!!! question "Question 2"
    Sans utiliser Python, essayer de prévoir les résultats des six calculs précédents.

    Vérifier ensuite vos réponses en exécutant le programme.


!!! note "À retenir"

    | Symbole | Opération | Exemple |
    | :---: | :--- | :---: |
    | `+` | addition | `10 + 3 = 13` |
    | `-` | soustraction | `10 - 3 = 7` |
    | `*` | multiplication | `10 * 3 = 30` |
    | `/` | division classique | `10 / 3 = 3,333...` |
    | `//` | division entière | `10 // 3 = 3` |
    | `%` | reste de la division | `10 % 3 = 1` |


!!! question "Question 3"

    
    Le service des transports de Montesquéria doit préparer les déplacements des habitants.

    Une navette peut transporter **24 personnes**.

    1. La navette effectue **15 trajets** dans la journée. Combien de personnes peut-elle transporter au maximum ?

    2. **317 personnes** souhaitent utiliser les navettes. Combien de navettes complètes sont nécessaires ?

    3. Combien de personnes seront dans la navette incomplète ?

    4. Chaque trajet coûte **3 €** à la ville. Combien coûtent les 15 trajets ?

    5. La ville dispose d'un budget de **1 000 €** pour ces trajets. Combien reste-t-il après avoir payé les 15 trajets ?

    **Écrire des instructions Python permettant d'effectuer ces calculs.**
    

---

### 3. Les variables

Jusqu'à présent, nous avons directement écrit les valeurs dans nos calculs.

Mais un programme peut avoir besoin de **conserver une information** pour la réutiliser plus tard.

Pour cela, on utilise une **variable**.

```python
habitants = 25000
print(habitants)
```

Ici, `habitants` est une variable qui contient la valeur `25000`.

On peut ensuite utiliser cette variable dans un calcul :

```python
habitants = 25000

print(habitants + 1200)
```

!!! question "Question 4"
    On souhaite enregistrer quelques informations sur Montesquéria.

    Créer les variables suivantes :

    ```python
    nom = "Montesquéria"
    annee = 2050
    habitants = 25000
    ```

    Puis afficher les trois informations avec `print()`.


!!! note "À retenir" 
    Une **variable** permet de donner un nom à une valeur afin de pouvoir la réutiliser dans le programme.

---

#### Modifier une variable

Une variable peut changer de valeur au cours d'un programme.

```python
habitants = 25000

habitants = habitants + 1200

print(habitants)
```

Après la première instruction, habitants vaut 25000.

Après l'instruction :
```python
habitants = habitants + 1200
```
la variable contient maintenant `26200`.


!!! question "Question 5"

    Observer attentivement le programme suivant :

    ```python
    habitants = 2537
    bus = 24

    groupes = habitants // bus
    reste = habitants % bus

    habitants = groupes + reste
    bus = bus - reste

    groupes = habitants % bus
    reste = habitants // bus

    print(habitants)
    print(bus)
    print(groupes)
    print(reste)
    ```

    Sans exécuter le programme, retrouver la valeur finale de chaque variable.

    | Variable | Valeur finale |
    |---|---:|
    | `habitants` | |
    | `bus` | |
    | `groupes` | |
    | `reste` | |

    **Conseil :** suivre les valeurs des variables ligne par ligne.

    Vérifier ensuite vos réponses en exécutant le programme.

---

### 4. Dessiner avec Python

Jusqu'à présent, nos programmes produisaient principalement du texte et des nombres.

Python peut également permettre de **réaliser des dessins**.

Pour cela, nous allons utiliser une bibliothèque appelée `turtle`.

```python
import turtle

t = turtle.Turtle()
```

!!! note "À retenir"
    `import turtle` permet d'utiliser la bibliothèque `turtle`.

    `t = turtle.Turtle()` crée un curseur que nous allons pouvoir déplacer pour dessiner.

#### Faire avancer le curseur

Pour faire avancer le curseur, on utilise :

```python
t.forward(100)
```
Le nombre `100` indique la distance parcourue.

!!! question "Question 6"

    On souhaite faire avancer le curseur de **100 unités**, puis lui faire faire **demi-tour** pour revenir exactement à son point de départ.

    ```python
    import turtle

    t = turtle.Turtle()

    t.forward(100)



    # Compléter le programme pour revenir au point de départ



    ```

    **Défi :** réussir à faire demi-tour en utilisant uniquement `forward()`.

    Tester votre solution.

    Que devez-vous indiquer comme paramètre à `forward()` pour que le curseur se déplace dans le sens opposé ?


!!! note "À retenir"

    Le paramètre de `forward()` indique la distance et le sens du déplacement.

    - `t.forward(100)` → avance de 100 unités ;
    - `t.forward(-100)` → recule de 100 unités.

#### Faire tourner le curseur


Le curseur peut également tourner.

Pour le faire tourner vers la droite, on utilise :

```python
t.right(90)
``` 
Le nombre `90` indique l'angle de rotation, exprimé en degrés.


!!! question "Question 7"
    Compléter le programme suivant pour dessiner un carré de côté **100 unités** :

    ```python
    import turtle

    t = turtle.Turtle()

    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ...

    # Compléter le programme


    ```

    Le carré doit être fermé.

    Vérifier votre dessin avec Python.


!!! note "À retenir"
    - `t.forward(distance)` fait avancer ou reculer le curseur.
    - `t.right(angle)` fait tourner le curseur vers la droite.
    - `t.left(angle)` fait tourner le curseur vers la gauche.

#### Utiliser une variable pour la taille

Dans le programme précédent, la valeur `100` correspond à la longueur d'un côté du carré.

On peut donner un nom à cette valeur :

```python
cote = 100
``` 

Puis utiliser cette variable pour contrôler la taille du dessin :

```python
t.forward(cote)
```

!!! question "Question 8"

    Modifier votre programme précédent pour utiliser une variable `cote`.

    Le programme doit permettre de modifier la taille du carré en changeant uniquement la valeur de `cote`.

    Tester successivement avec :

    ```python
    cote = 50
    ```

    puis :

    ```python
    cote = 200
    ```

    Vérifier que le carré est bien redimensionné.

#### Modifier l'apparence du dessin

On peut également modifier l'apparence du trait.

Pour changer sa couleur :
```python
t.color("blue")
```

Pour modifier son épaisseur :
```python
t.pensize(5)
```

Il est également possible de déplacer le curseur sans dessiner.
```python
t.penup()
```
permet de lever le crayon.

```python
t.pendown()
```
permet de le poser à nouveau.

!!! question "Question 9"
    Reprendre votre programme du carré.

    Modifier le programme pour :

    1. dessiner un carré bleu ;
    2. lever le crayon ;
    3. déplacer le curseur vers une autre position ;
    4. poser le crayon ;
    5. dessiner un deuxième carré d'une autre couleur.

    Les deux carrés ne doivent pas être reliés par un trait.


!!! note "À retenir"
    | Instruction | Rôle |
    | :--- | :--- |
    | `t.color("blue")` | change la couleur du trait |
    | `t.pensize(5)` | change l'épaisseur du trait |
    | `t.penup()` | lève le crayon |
    | `t.pendown()` | pose le crayon |


#### Répéter avec `for`

Pour dessiner un carré, nous avons écrit plusieurs fois les mêmes instructions :

```python
t.forward(cote)
t.right(90)
```

Python permet de répéter automatiquement des instructions avec `for`.

Par exemple :
```python
for i in range(4):
    print("Bonjour")
```
L'instruction `print("Bonjour")` est exécutée quatre fois.


!!! question "Question 10"

    Reprendre le programme permettant de dessiner un carré.

    Modifier le programme pour que les instructions permettant de tracer un côté soient répétées automatiquement.

    Le programme doit contenir :

    - une variable `cote` ;
    - une boucle `for` ;
    - `t.forward(cote)` ;
    - `t.right(90)`.

    Le carré doit toujours être correctement fermé.


!!! note "À retenir"

    ```python
    for i in range(4):
        ...
    ```

    permet de répéter les instructions placées dans le bloc **4 fois**.

    La variable `i` prend successivement les valeurs `0`, `1`, `2` et `3`.


#### Quelques commandes supplémentaires

Jusqu'à présent, nous avons principalement utilisé `forward()` et `right()` pour construire nos figures.

La bibliothèque `turtle` possède d'autres commandes qui permettent de réaliser des dessins plus élaborés.

#### Dessiner un cercle

Pour dessiner un cercle, on peut utiliser :

```python
t.circle(50)
```
Le nombre 50 correspond au rayon du cercle.


#### Se déplacer vers une position


On peut déplacer directement le curseur vers une position donnée avec :
```python
t.goto(100, 50)
```
Les deux nombres correspondent aux coordonnées du point d'arrivée :

* le premier correspond à la position horizontale x ;
* le second correspond à la position verticale y.

#### Dessiner un point

Pour dessiner un point, on peut utiliser :
```python
t.dot(30)
```
Le nombre indique la taille du point.

On peut également choisir sa couleur :
```python
t.dot(30, "red")
```

---


### Blason de Montesquéria

Montesquéria souhaite maintenant créer une **identité graphique** pour représenter la ville.

Votre mission consiste à réaliser un **blason de Montesquéria 2050** avec Python et `turtle`.



!!! question "Question 11 — Mission"


    Créer un blason représentant **Montesquéria 2050**.

    Votre programme doit respecter les contraintes suivantes :

    - utiliser au moins **une variable** ;
    - utiliser au moins une boucle `for` ;
    - utiliser au moins **deux formes géométriques** ;
    - utiliser au moins **deux couleurs** ;
    - utiliser `penup()` et `pendown()` ;
    - produire un dessin **fermé, propre et identifiable**.

    Vous êtes libres de choisir les formes et leur disposition.

    **Quelques pistes :**

    - un contour de blason ;
    - une étoile ou un symbole géométrique ;
    - plusieurs éléments répétés ;
    - un symbole représentant le futur, les réseaux ou la ville.

    **Attention :** le dessin doit être réalisé par le programme. Il ne s'agit pas de dessiner directement avec la souris.


!!! question "Question 12 — Aller plus loin"

    Vous souhaitez pouvoir modifier facilement la taille de votre blason.

    Modifier votre programme afin qu'une seule variable permette de contrôler sa taille.

    Par exemple :

    ```python
    taille = 80
    ```

    Si vous remplacez `80` par `120`, le blason doit être plus grand.

    **Défi :** faire en sorte que plusieurs éléments du blason utilisent cette même variable.

---

### Bilan

!!! note "À retenir"

    Dans cette séance, nous avons appris à :

    - afficher des informations avec `print()` ;
    - effectuer des calculs avec Python ;
    - utiliser et modifier des variables ;
    - utiliser `turtle` pour réaliser des dessins ;
    - déplacer et faire tourner un curseur ;
    - modifier l'apparence d'un dessin ;
    - déplacer le curseur sans tracer avec `penup()` et `pendown()` ;
    - utiliser `circle()`, `goto()` et `dot()` ;
    - répéter des instructions avec une boucle `for`.

