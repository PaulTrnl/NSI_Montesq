import random

eleves = {
    "Gryffondor": ["Harry", "Hermione", "Ron", "Neville", "Ginny"],
    "Serpentard": ["Draco", "Pansy", "Blaise", "Theodore", "Gregory"],
    "Poufsouffle": ["Cedric", "Susan", "Hannah", "Ernie", "Justin"],
    "Serdaigle": ["Luna", "Cho", "Terry", "Michael", "Padma"]
}

print(len(eleves))



def selections_eleves(dico):
    res = {}
    for cle, valeur in dico.items():
        res[cle] = random.sample(valeur, 2)
    return res

#print(selections_eleves(eleves))


def maison_eleve(nom_eleve, dico) :
    for cle in dico.keys() :
        if nom_eleve in dico[cle] :
            return cle
    # return None
    
#print(maison_eleve("Lunar", eleves))
        
    
def ajouter_eleve(eleves,nom,maison):
    if nom in eleves[maison]:
        return None
    eleves[maison].append(nom)
    
    return eleves

ajouter_eleve(eleves, "Dean", "Gryffondor")
ajouter_eleve(eleves, "Wesley", "Gryffondor")
ajouter_eleve(eleves, "Gabriel", "Gryffondor")
#print(eleves["Gryffondor"])




def compter_eleves (eleves):
    res = {}
    for cle in eleves.keys():
        nbr = len(eleves[cle])
        res[cle] = nbr
    return res
        
print(compter_eleves(eleves))


# Question 5

def tous_les_eleves(dico):
    res = []
    for cle, valeur in dico.items():
        for i in range(len(valeur)):
            res.append(valeur[i])
    return res

print(tous_les_eleves(eleves))





