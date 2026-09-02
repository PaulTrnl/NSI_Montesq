
# Thème 1 — 🌐 Internet

![Mon super GIF animé](img/computer-reaction.gif){ width="350" }



# Séance 1 — Comment faire communiquer une ville ?

!!! abstract "Projet fil rouge — Montesquéria"
    Bienvenue à **Montesquéria**, une ville du futur.

    Tout au long de l'année, vous allez participer à sa construction et découvrir les technologies qui permettent à ses habitants de communiquer, de s'informer, de se déplacer et d'interagir.

    ![Montesquéria](img/ville.jpeg){ width="550" }

---

## Objectifs de la séance

À la fin de cette séance, je dois être capable de :

* comprendre ce qu'est un **réseau informatique** ;
* expliquer pourquoi on relie des ordinateurs entre eux ;
* distinguer un ordinateur **isolé** d'un ordinateur connecté à un réseau ;
* représenter simplement un réseau ;
* comprendre qu'un réseau permet de **faire circuler des informations** ;
* identifier quelques problèmes liés à la communication entre machines.

[📥 Support élève (PDF)](01_Internet_fiche_seance_1.pdf){ .md-button }

!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.

---

---

# I. Bienvenue à Montesquéria

## 1. La ville du futur

Nous sommes en **2050**.

Montesquéria est une ville entièrement équipée d'ordinateurs.

On trouve notamment :

* 🏫 un lycée ;
* 🏥 un hôpital ;
* 🏛️ une mairie ;
* 📚 une bibliothèque ;
* 🏠 des logements ;
* 🏢 des entreprises ;
* 🚉 une gare ;
* 🚒 une caserne de pompiers.

Chaque bâtiment possède plusieurs ordinateurs.

### Problème

La mairie souhaite pouvoir envoyer rapidement une information à l'hôpital.

Par exemple :

> « Une situation d'urgence vient d'être signalée. »

Mais les deux ordinateurs sont actuellement **isolés**.

```text
🏛️ Mairie                         🏥 Hôpital

💻                                 💻
```

### Question 1

**Comment pourrait-on permettre aux deux ordinateurs de communiquer ?**

> 💡 Proposez plusieurs solutions.

!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.



---

## 2. Première solution : relier les ordinateurs

Une première idée consiste à relier directement les deux ordinateurs.

```text
🏛️ Mairie                         🏥 Hôpital

💻 ─────────────────────────────── 💻
```

L'information peut maintenant circuler d'un ordinateur à l'autre.

!!! success "On vient de créer un réseau !"


!!! note "À retenir"
    Un **réseau informatique** est un ensemble d'équipements reliés entre eux afin de pouvoir **échanger des informations**.


---

# II. Et si la ville grandissait ?

La mairie décide maintenant de connecter **toute la ville**.

On souhaite permettre aux différents bâtiments de communiquer :

```text
                         🏥 Hôpital
                              |
                              |
🏫 Lycée ───────────── 🏛️ Mairie ───────────── 📚 Bibliothèque
                              |
                              |
                         🚒 Pompiers
```

### Question 2

**Quel est le problème avec cette organisation si la ville possède 1 000 bâtiments ?**

Réfléchissez en groupe.

!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.

---

### 💭 Quelques problèmes possibles

* Il faudrait énormément de câbles.
* Chaque ordinateur devrait être relié à beaucoup d'autres.
* L'installation serait difficile à gérer.
* Si un câble est coupé, certaines communications pourraient ne plus fonctionner.
* Ajouter un nouveau bâtiment deviendrait compliqué.

Il faut donc trouver une meilleure organisation.

---

# III. Une nouvelle idée

Les ingénieurs de Montesquéria proposent une nouvelle solution.

Au lieu de relier directement chaque ordinateur à tous les autres, on va utiliser un **équipement intermédiaire**.

```text
💻 ───────┐
          │
💻 ───────┤
          ├──── 🔲 ──── 💻
💻 ───────┤
          │
💻 ───────┘
```

Toutes les machines sont reliées à cet équipement.

Lorsqu'un ordinateur veut communiquer avec un autre, les informations passent par cet équipement.

!!! question "À vous de réfléchir"
    Quel pourrait être le rôle de cet équipement ?


Cet équipement s'appelle un **switch**.

On parle également de commutateur réseau.

Le switch permet de connecter plusieurs appareils au sein d'un même réseau.

Lorsqu'un appareil envoie des données, le switch les reçoit et les transmet vers l'appareil concerné.

!!! note "À retenir"

    Un **switch** permet de connecter plusieurs appareils **au sein d'un même réseau local**.

---

# IV. Le réseau du lycée

On peut appliquer exactement la même idée à notre établissement.

Imaginons que le lycée possède :

* 35 ordinateurs dans une salle ;
* 20 ordinateurs dans une autre salle ;
* des ordinateurs dans l'administration ;
* des ordinateurs au CDI ;
* des imprimantes ;
* des serveurs.

On ne souhaite évidemment pas relier chaque machine directement à toutes les autres.

On va donc organiser les connexions.

```text
             💻 Ordinateur
                   |
                   |
💻 Ordinateur ──── 🔲 Switch ──── 💻 Ordinateur
                   |
                   |
              🖨️ Imprimante
```

L'équipement central permet de connecter les différentes machines.

!!! question "Question"
    Que se passerait-il si nous ajoutions 100 ordinateurs supplémentaires ?

Le switch permet justement d'ajouter facilement de nouvelles machines au réseau.

!!! note "À retenir"
    Un **réseau local** est un réseau qui relie des équipements situés dans un espace géographique limité, par exemple une maison, un lycée ou un bâtiment.
---

# V. Plusieurs réseaux locaux

Nous savons maintenant construire un réseau local.

Mais Montesquéria possède plusieurs bâtiments.

Il est tout à fait possible que chaque bâtiment possède son propre réseau local.

Nous allons considérer quatre réseaux :

* 🏫 le réseau du lycée ;
* 🏛️ le réseau de la mairie ;
* 🏥 le réseau de l'hôpital ;
* 📚 le réseau de la bibliothèque.

Chaque réseau local ressemble à ceci :
```text                             
      💻                     
      │                      
 💻 ─ 🔲 Switch ─ 💻          
      │                      
      🖥️                                      
```

!!! warning "Attention"
    Ces quatre réseaux sont **distincts**.

    Le réseau du lycée n'est pas le réseau de la mairie.

    Le réseau de la mairie n'est pas celui de l'hôpital.

    Chaque bâtiment possède son propre **réseau local**.


# VI. Comment relier plusieurs réseaux ?

Nous avons maintenant un problème.

Un ordinateur du lycée doit pouvoir communiquer avec un ordinateur de la mairie.

Mais les deux ordinateurs appartiennent à deux réseaux différents.

Le switch permet de connecter des appareils dans un même réseau local.

Il nous faut donc un nouvel équipement.


!!! question "À vous de réfléchir"
    **Comment pourrait-on relier deux réseaux différents ?**

---

## 🔀 Le routeur

Pour relier plusieurs réseaux différents, on utilise un **routeur**.

On peut représenter la situation ainsi :

```text
       RÉSEAU A                         RÉSEAU B

          💻                               💻
          │                                │
          │                                │
     💻 ─ 🔲 ─ 💻                    💻 ─ 🔲 ─ 💻
          │                                │
          │                                │
           └────────── 🔀 ─────────────────┘
                    Routeur
```

Le routeur fait le lien entre les deux réseaux.

Il permet aux informations de passer d'un réseau à un autre.


!!! note "À retenir"
    Un **routeur** est un équipement qui permet de **relier plusieurs réseaux différents** et d'acheminer les informations d'un réseau vers un autre.

    **Switch → à l'intérieur d'un réseau**

    **Routeur → entre plusieurs réseaux**       



# VII. Activité — Construisons le réseau de Montesquéria

!!! abstract "Mission"
    Vous devez maintenant proposer une organisation du réseau informatique de **Montesquéria**.

La ville de Montesquéria possède les bâtiments suivants :

* 🏛️ Mairie ;
* 🏫 Lycée ;
* 🏥 Hôpital ;
* 📚 Bibliothèque ;
* 🚒 Caserne de pompiers ;
* 🚉 Gare ;
* 🏢 Entreprise.

Chaque bâtiment possède au moins un ordinateur.

### Votre mission

Vous devez proposer une organisation permettant à **tous les bâtiments de communiquer**.

### Contraintes

Votre réseau doit :

1. permettre à tous les bâtiments de communiquer ;
2. éviter de relier directement chaque bâtiment à tous les autres ;
3. permettre d'ajouter facilement un nouveau bâtiment ;
4. continuer à fonctionner même si une connexion est coupée.

La quatrième contrainte vous demande de réfléchir au problème rencontré précédemment : que se passe-t-il lorsqu'une connexion est coupée ?

### Travail demandé

Sur votre feuille, représentez votre réseau.

Vous devez faire apparaître :

1. représentez les bâtiments ;
2. représentez les ordinateurs ;
3. représentez les connexions ;
4. ajoutez les équipements intermédiaires que vous jugez nécessaires ;
5. expliquez votre choix.


!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.

---

# VIII. Et maintenant... Internet 🌍

Nous savons maintenant construire plusieurs réseaux locaux et les relier entre eux.

Mais Montesquéria n'est pas la seule ville du monde.

D'autres villes possèdent elles aussi leurs propres réseaux.

Nous avons commencé avec deux ordinateurs (1er réseau) :

```text
💻 ───────── 💻
```

Puis nous avons construit un réseau permettant de connecter plusieurs ordinateurs :

```text
        💻
        │
💻 ──── 🔲 ──── 💻
        │
        💻
```

Nous pouvons alors créer plusieurs réseaux indépendants :

```text
    RÉSEAU A                    RÉSEAU B

       💻                          💻
       │                           │
💻 ─── 🔲 ─── 💻             💻 ─── 🔲 ─── 💻
       │                           │
       💻                          💻
```


Mais les ordinateurs du réseau A ne peuvent pas communiquer avec ceux du réseau B.

Il faut donc trouver un moyen de relier ces deux réseaux :


```text
    RÉSEAU A                    RÉSEAU B

       💻                          💻
       │                           │
💻 ─── 🔲 ─── 💻             💻 ─── 🔲 ─── 💻
       │                           │
       💻                          💻
        \                         /
         \                       /
          ──────── 🔀 ─────────
                Routeur
```

Nous avons maintenant deux réseaux reliés entre eux.

On peut recommencer avec de nombreux autres réseaux :

```text
             RÉSEAU A
          ┌─────────────┐
          │ 💻 ─ 🔲 ─ 💻 │
          └──────┬──────┘
                 │
                 🔀
              ╱  │  ╲
            ╱    │    ╲
          🔀     🔀     🔀
        │        │        │
    RÉSEAU B  RÉSEAU C  RÉSEAU D
       │         │         │
    💻─🔲─💻   💻─🔲─💻   💻─🔲─💻
```

Nous obtenons progressivement un **réseau de réseaux**.

C'est l'idée fondamentale derrière **Internet**.

!!! note "À retenir"
    **Internet est un réseau mondial qui relie entre eux une multitude de réseaux informatiques.**


---

# IX. Comment faire circuler une information ?

Imaginons que l'ordinateur du lycée veuille envoyer un message à celui de l'hôpital.

```text
🏫 Lycée 💻 - 🔲 -- 🔀 -- 🔲 - 💻 🏥 Hôpital

```

Le message doit parcourir le réseau.

Il peut passer par plusieurs équipements avant d'arriver à destination.

On peut comparer cela au transport d'un colis :

```text
📦
 ↓
Centre de tri
 ↓
Centre de tri
 ↓
Centre de distribution
 ↓
🏠 Destinataire
```

Sur Internet, les informations sont également transportées à travers différents équipements.

!!! note "À retenir"
    Une information peut traverser **plusieurs équipements et plusieurs réseaux** avant d'atteindre son destinataire.



# X. Un problème apparaît... 🚧 

Internet permet maintenant de relier une multitude de réseaux.

Mais un nouveau problème apparaît.

Un nouvel habitant arrive à Montesquéria.

Il utilise son ordinateur et souhaite envoyer un message à la mairie.

```text
💻 Habitant ──── 🔲 ──── 🔀 ──── 🔀 ──── 🏛️ Mairie
```

### Question 3

Comment l'ordinateur de l'habitant sait-il **à quel ordinateur envoyer son message** ?

Après tout, il y a maintenant des centaines, puis des milliers d'ordinateurs dans la ville.

!!! warning "À lire avant de commencer"

    - Les fichiers fournis doivent être utilisés et complétés.
    - Certains moments de l'activité sont prévus pour faire valider votre travail.

---

## 💭 Imaginez la situation

Si je vous dis :

> « Envoyez ce message à Paul. »

Cela ne suffit probablement pas.

Il faudrait savoir **quel Paul**, où il habite, ou disposer d'une information permettant de l'identifier.

Les ordinateurs rencontrent exactement ce problème.

---

# XI. Donner une identité aux machines 🏷️

Pour pouvoir communiquer correctement, les machines doivent pouvoir être **identifiées**.

On pourrait par exemple imaginer que chaque ordinateur possède un numéro :

```text
Ordinateur de la mairie → 1
Ordinateur de l'hôpital → 2
Ordinateur du lycée → 3
Ordinateur de la bibliothèque → 4
```

On peut alors demander :

> « Envoie le message à la machine numéro 3. »

!!! question "Mais est-ce suffisant ?"


Que se passe-t-il si la ville possède **1 million d'ordinateurs** ?

Comment attribuer ces numéros ?

Comment savoir où se trouve une machine ?

Comment faire pour que les informations trouvent automatiquement leur chemin ?

Il faut donc un système permettant aux machines d'être identifiées et aux informations de trouver leur destination.

Nous verrons la réponse à ce problème lors de la prochaine séance.

---


# XII. Bilan de la séance

## Ce que nous avons découvert

Nous sommes partis d'un problème très simple :

> **Comment faire communiquer deux ordinateurs ?**

Puis nous avons progressivement construit :

```text
Ordinateurs
     ↓
Connexions
     ↓
Réseau
     ↓
Plusieurs réseaux
     ↓
Réseau de réseaux
     ↓
Internet
```

Nous avons également rencontré plusieurs questions :

* Comment identifier une machine ?
* Comment savoir où envoyer une information ?
* Comment faire circuler une information ?
* Comment relier plusieurs réseaux ?
* Que se passe-t-il si une connexion est coupée ?
* Comment un message arrive-t-il au bon destinataire ?

Ces questions vont nous permettre de découvrir progressivement le fonctionnement d'Internet.

---

# 📝 Trace écrite

!!! note "À retenir"
    Un **réseau informatique** est un ensemble d'équipements reliés entre eux afin d'échanger des informations.

    Un **réseau local** relie des équipements situés dans un espace géographique limité, comme une maison, un lycée ou un bâtiment.

    Un **switch** permet de relier plusieurs appareils au sein d'un même réseau local.

    Un **routeur** permet de relier plusieurs réseaux différents.

    **Internet est un réseau mondial de réseaux informatiques.**

    Pour communiquer sur un réseau, les machines doivent notamment pouvoir être **identifiées** et les informations doivent pouvoir être **acheminées vers leur destination**.
---

# 🔮 Prochaine étape : les adresses IP

Dans la prochaine séance, nous allons résoudre le problème rencontré à Montesquéria :

> **Comment identifier précisément un ordinateur sur un réseau ?**

Nous découvrirons notamment :

* les **adresses IP** ;
* leur représentation ;
* pourquoi elles sont nécessaires ;
* comment les ordinateurs les utilisent pour communiquer.

Et nous verrons que derrière une adresse comme :

```text
192.168.1.42
```

se cache une représentation en **binaire**.

!!! tip "Mission pour la prochaine séance"
    À votre avis, pourquoi utilise-t-on des nombres pour identifier les ordinateurs plutôt que leurs noms ?

