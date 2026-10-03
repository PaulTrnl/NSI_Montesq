# Thème 2 : Routage et communication entre réseaux { #routage }

<a id="haut"></a>


!!! abstract "Objectif"

    Dans ce chapitre, nous allons comprendre comment un paquet peut être
    transmis d'une machine à une autre à travers plusieurs réseaux.

    Nous chercherons notamment à comprendre :

    - comment un routeur choisit la direction dans laquelle envoyer un paquet ;
    - comment les tables de routage sont construites ;
    - comment les protocoles RIP et OSPF permettent de déterminer des routes ;
    - comment un réseau peut être représenté par un graphe ;
    - quel est le rôle des ports TCP et UDP dans une communication ;
    - comment le NAT permet à plusieurs machines d'un réseau local d'utiliser
      une même adresse IP publique ;
    - comment une machine située derrière un routeur peut être rendue
      accessible depuis Internet.

---

## 1. Rappels : les adresses IP { #adresses-ip }

Avant d'étudier le routage, rappelons quelques notions étudiées au lycée.

### 1.1 Adresse IPv4

Une adresse IPv4 est codée sur **32 bits**.

Elle est généralement représentée sous la forme de quatre nombres décimaux
séparés par des points.

Par exemple :

```text
192.168.1.25
```

Une adresse IPv4 est donc constituée de 32 bits, répartis en
quatre groupes de 8 bits appelés octets.

Par exemple :

```text
Décimal :   192   .   168    .    1     .    25 
Binaire : 11000000 . 10101000 . 00000001 . 00011001
```

### 1.2 Adresse réseau et masque

Une adresse IP ne permet pas seulement d'identifier une machine.
Elle permet également de déterminer à quel réseau cette machine
appartient.

Pour cela, on utilise un masque de sous-réseau.

Par exemple : 

```text
192.168.1.25/24
```

Le `/24` indique que les 24 premiers bits correspondent à la **partie
réseau** de l'adresse. La notation ici utilisée, est appelée **CIDR**. 

Le masque correspondant à `/24` est : `255.255.255.0`

En binaire : 
```text
11111111.11111111.11111111.00000000
```

Les 24 premiers bits correspondent donc au réseau et les 8 derniers bits permettent d'identifier les machines de ce réseau.

Toutes les machines ayant une adresse comprise dans ce réseau appartiennent au même réseau local. Par exemple :

```text
192.168.1.10/24
192.168.1.25/24
192.168.1.100/24
```
appartiennent toutes au réseau :
```text
192.168.1.0/24
```

!!! note "À retenir"
    Le masque permet de séparer une adresse IP en deux parties :

    - la **partie réseau**, qui indique à quel réseau appartient la machine ;
    - la **partie machine**, qui identifie la machine dans ce réseau.

    Avec `/24`, les **24 premiers bits** représentent le réseau et les **8 derniers bits** représentent la machine.

### 1.3 Quelle est l'adresse IP de mon ordinateur ?

Nous avons parlé des adresses IP comme si chaque ordinateur en possédait une.

Mais quelle est l'adresse IP de notre ordinateur ?

Nous pouvons directement l'observer.

#### Sur Windows

Dans le terminal, on peut utiliser :
```text
ipconfig
```

On obtient notamment une ligne ressemblant à :
```text
Adresse IPv4 . . . . . . . . . . : 192.168.1.25
```

#### Sur macOS

Dans le terminal, on peut utiliser :
```text
ifconfig
```

### 1.4 Adresse IP privée ou publique ?

L'adresse que nous venons de trouver ressemble souvent à :

```text
192.168.1.25
```

Cette adresse est une **adresse IP privée**.

Elle est utilisée à l'intérieur d'un réseau local.

Par exemple, dans une maison :
```text
                  BOX / ROUTEUR
                       │
          ┌──────-─────┼───-────────┐
          │            │            │
          ▼            ▼            ▼
         PC        téléphone    imprimante
     192.168.1.25 192.168.1.26  192.168.1.27
```

Ces adresses permettent aux appareils de communiquer **à l'intérieur du réseau local**.

Mais comment notre réseau communique-t-il avec Internet ?

La box possède également une **adresse IP publique**.

!!! note "À retenir"
    Une **adresse IP privée** est utilisée dans un réseau local.

    Une **adresse IP publique** permet d'identifier une connexion ou une interface utilisée pour communiquer sur Internet.

    Plusieurs appareils d'un même réseau local peuvent donc utiliser des adresses privées différentes tout en partageant une même connexion à Internet.


### 1.5 Les plages d'adresses privées

Les adresses IPv4 privées ne sont pas choisies au hasard. Certaines plages d'adresses sont réservées à l'utilisation dans les réseaux locaux.

Les principales plages d'adresses IP privées sont :

- **Classe A :** `10.0.0.0` à `10.255.255.255`  
  (utilisée pour les grands réseaux d'entreprise)

- **Classe B :** `172.16.0.0` à `172.31.255.255`  
  (utilisée pour les réseaux de taille moyenne)

- **Classe C :** `192.168.0.0` à `192.168.255.255`  
  (très courante dans les réseaux domestiques)


### 1.6 Communiquer avec une autre machine

Deux machines appartenant au même réseau peuvent communiquer directement à travers le réseau local.

```text
       PC 1                         PC 2

  192.168.1.25                  192.168.1.30

        │                             │
        └────────── SWITCH ───────────┘
```

Les deux machines appartiennent au réseau :
```text
192.168.1.0/24
```

Elles peuvent donc communiquer directement.

En revanche, si une machine souhaite communiquer avec une machine située sur un autre réseau, elle doit passer par un routeur.

```text
        Réseau A                         Réseau B

     192.168.1.0/24                    192.168.2.0/24

          │                                  │
          │                                  │
          ▼                                  ▼
     ┌─────────┐                        ┌─────────┐
     │   PC    │                        │ Serveur │
     │192.168. │                        │192.168. │
     │   1.25  │                        │   2.10  │
     └────┬────┘                        └────┬────┘
          │                                  │
          │                                  │
          └──────────┐            ┌──────────┘
                     │            │
                     ▼            ▼
                  ┌────────────────┐
                  │    ROUTEUR     │
                  └────────────────┘
```

Le routeur possède une interface dans chacun des deux réseaux.

Il peut donc recevoir un paquet provenant du réseau `192.168.1.0/24` et le transmettre vers le réseau `192.168.2.0/24`.

### 1.7 La passerelle par défaut

Pour communiquer avec une machine située en dehors de son réseau local, un ordinateur doit savoir **à quel routeur transmettre le paquet.**

L'adresse IP de ce routeur est appelée la **passerelle par défaut**.

Par exemple, un ordinateur peut avoir la configuration suivante :

```text
Adresse IP       : 192.168.1.25
Masque           : 255.255.255.0
Passerelle       : 192.168.1.254
```

La passerelle `192.168.1.254` est l'adresse du routeur sur le réseau local.

Si l'ordinateur souhaite communiquer avec `192.168.1.50`, il constate que cette adresse appartient au même réseau que lui `192.168.1.0/24`. Il peut donc communiquer directement avec cette machine.

En revanche, s'il souhaite communiquer avec `192.168.2.10` cette adresse appartient à un autre réseau. L'ordinateur transmet alors le paquet à sa passerelle par défaut.

!!! note "À retenir"
    - Si le destinataire est sur le **même réseau**, la machine peut communiquer directement avec lui.
    - Si le destinataire est sur **un autre réseau**, le paquet doit être envoyé à une **passerelle**, généralement un routeur.
    - Le routeur se charge ensuite de déterminer **vers quel réseau transmettre le paquet**.

    C'est cette dernière fonction qui constitue le **routage**.


---


## 2. Le routage { #routage }

Jusqu'à présent, nous avons vu qu'un ordinateur peut communiquer directement
avec une machine de son réseau et qu'il utilise une passerelle pour
communiquer avec une machine située sur un autre réseau.

Mais que fait réellement le routeur lorsqu'il reçoit un paquet ?

Son rôle est de déterminer **vers où transmettre le paquet** afin qu'il
atteigne son destinataire.

C'est ce que l'on appelle le **routage**.



