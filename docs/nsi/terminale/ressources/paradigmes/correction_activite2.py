import random

class Ennemi:
    def __init__(self):
        self.point_de_vie = 20
        self.difficulte_ia = "Facile"
        self.arme = ("Hache", 2)

    def est_vaincu(self):
        return self.point_de_vie <= 0

    def degats_subis(self, degat):
        self.point_de_vie -= degat

    def mise_a_jour_ia(self):
        if self.point_de_vie < 5:
            self.difficulte_ia = "Difficile"
        elif self.point_de_vie < 13:
            self.difficulte_ia = "Moyenne"
 
        
    def prendre_arme(self, nom, degats):
        self.arme = (nom, degats)
        
    #def prendre_arme(arme):
        #self.arme = arme
        
    def faire_degat(self):
        return self.arme[1]
    
ennemi1 = Ennemi()
ennemi2 = Ennemi()

while not ennemi1.est_vaincu() and not ennemi2.est_vaincu():
    tirage = random.randint(0,1)
    if tirage == 0:
        ennemi2.degats_subis(ennemi1.faire_degat())
    else :
        ennemi1.degats_subis(ennemi2.faire_degat())
        
if ennemi1.est_vaincu():
    print("Ennemi 2 a gagné, avec : ", ennemi2.point_de_vie , "points")
else :
    print("Ennemi 1 a gagné, avec : ", ennemi1.point_de_vie, "points")
