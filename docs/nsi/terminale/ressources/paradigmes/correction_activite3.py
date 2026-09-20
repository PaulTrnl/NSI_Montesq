import random

class JeuDeCartes:

    def __init__(self):
        """Construit un jeu de 52 cartes."""
        self.cartes = []

        self.valeurs = [
            2, 3, 4, 5, 6, 7, 8, 9, 10,
            "valet", "dame", "roi", "as"
        ]
        # Alternative plus efficace -> il faudrait adapter le reste du programme
#         self.valeurs = {
#             2: 2,
#             3: 3,
#             4: 4,
#             5: 5,
#             6: 6,
#             7: 7,
#             8: 8,
#             9: 9,
#             10: 10,
#             "valet": 11,
#             "dame": 12,
#             "roi": 13,
#             "as": 14
#         }

        self.couleurs = [
            "Pique", "Trèfle", "Carreau", "Coeur"
        ]

        # Création des 52 cartes
        # À compléter (Question 1)
        for valeur in self.valeurs:
            for couleur in self.couleurs:
                self.cartes.append((valeur, couleur))

    def nomCarte(self, c):
        """Renvoie le nom d'une carte."""
        # À compléter (Question 2)
        return str(c[0]).capitalize() + " de " + c[1]
        

    def battre(self):
        """Mélange les cartes."""
        # À compléter (Question 3)
        random.shuffle(self.cartes)

    def tirer(self):
        """Retire et renvoie une carte."""
        # À compléter (Question 4)
        if len(self.cartes) > 0:
            return self.cartes.pop(0)
        return None

# À compléter (Questions 5 et 6 )

jeu = JeuDeCartes()
# for i in range(52):
#     print(jeu.tirer())
# assert jeu.tirer() == None

jeu.battre()

score1 = 0
score2 = 0

for i in range(26):
    carte1 = jeu.tirer()
    carte2 = jeu.tirer()
    
    valeur1 = jeu.valeurs.index(carte1[0])
    valeur2 = jeu.valeurs.index(carte2[0])
    
    if valeur1 > valeur2:
        score1 += 1
    elif valeur2 > valeur1:
        score2 += 1
        
print("Joueur 1 :", score1)
print("Joueur 2 :", score2)