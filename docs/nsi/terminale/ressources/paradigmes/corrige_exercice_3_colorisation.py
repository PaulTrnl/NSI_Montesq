class Region:
    """Modélise une région d'un pays sur une carte."""

    def __init__(self, nom_region):
        """Initialise une région.

        Args:
            nom_region (str) : nom de la région.
        """
        self.nom = nom_region
        self.tab_voisines = []
        self.tab_couleurs_disponibles = [
            "rouge",
            "vert",
            "bleu",
            "jaune",
            "orange",
            "marron"
        ]
        self.couleur_attribuee = None

    def premiere_dispo(self):
        """Renvoie la première couleur disponible.

        Returns:
            str : première couleur disponible.
        """
        return self.tab_couleurs_disponibles[0]

    def renvoie_nb_voisines(self):
        """Renvoie le nombre de régions voisines.

        Returns:
            int : nombre de régions voisines.
        """
        return len(self.tab_voisines)

    def est_colorisee(self):
        """Indique si une couleur a été attribuée à la région.

        Returns:
            bool : True si une couleur est attribuée, False sinon.
        """
        return self.couleur_attribuee is not None

    def retirer_couleur(self, couleur):
        """Retire une couleur de la liste des couleurs disponibles.

        Args:
            couleur (str) : couleur à retirer.
        """
        if couleur in self.tab_couleurs_disponibles:
            self.tab_couleurs_disponibles.remove(couleur)

    def est_voisine(self, region):
        """Indique si une région est voisine de la région courante.

        Args:
            region (Region) : région à tester.

        Returns:
            bool : True si la région est voisine, False sinon.
        """
        return region in self.tab_voisines


class Pays:
    """Modélise la carte d'un pays composé de plusieurs régions."""

    def __init__(self, tab_regions):
        """Initialise un pays.

        Args:
            tab_regions (list) : liste des régions du pays.
        """
        self.tab_regions = tab_regions

    def renvoie_tab_regions_non_coloriees(self):
        """Renvoie la liste des régions qui ne sont pas encore colorisées.

        Returns:
            list : liste d'instances de la classe Region.
        """
        regions_non_coloriees = []

        for region in self.tab_regions:
            if not region.est_colorisee():
                regions_non_coloriees.append(region)

        return regions_non_coloriees

    def renvoie_max(self):
        """Renvoie une région non colorisée ayant le plus de voisines.

        Returns:
            Region ou None : région ayant le plus de voisines,
            ou None si toutes les régions sont colorisées.
        """
        nb_voisines_max = -1
        region_max = None

        for region in self.renvoie_tab_regions_non_coloriees():
            if region.renvoie_nb_voisines() > nb_voisines_max:
                nb_voisines_max = region.renvoie_nb_voisines()
                region_max = region

        return region_max
    
    
# 1. La méthode renvoie None lorsqu'il n'y a plus aucune région non colorisée, c'est-à-dire lorsque toutes les régions du pays ont déjà reçu une couleur.
# 
# 2. Si la méthode ne renvoie pas None, la région renvoyée :
# 
# n'est pas encore colorisée ;
# possède le plus grand nombre de régions voisines parmi les régions non colorisées.
# 
# Si plusieurs régions ont le même nombre maximal de voisines, la méthode renvoie la première rencontrée dans tab_regions.

    def colorie(self):
        """Colorise toutes les régions du pays."""
        region = self.renvoie_max()

        while region is not None:
            couleur = region.premiere_dispo()
            region.couleur_attribuee = couleur

            for voisine in region.tab_voisines:
                voisine.retirer_couleur(couleur)

            region = self.renvoie_max()
            


# ============================================================
# TEST DU PROBLEME DE COLORISATION
# ============================================================

# Création des régions
a = Region("A")
b = Region("B")
c = Region("C")
d = Region("D")
e = Region("E")
f = Region("F")
g = Region("G")
h = Region("H")
i = Region("I")
j = Region("J")
k = Region("K")
l = Region("L")


# ============================================================
# DEFINITION DES VOISINAGES
# ============================================================

a.tab_voisines = [b, c, d]
b.tab_voisines = [a, c, e, f]
c.tab_voisines = [a, b, d, f, g]
d.tab_voisines = [a, c, g, h]
e.tab_voisines = [b, f, i]
f.tab_voisines = [b, c, e, g, i, j]
g.tab_voisines = [c, d, f, h, j, k]
h.tab_voisines = [d, g, k, l]
i.tab_voisines = [e, f, j]
j.tab_voisines = [f, g, i, k]
k.tab_voisines = [g, h, j, l]
l.tab_voisines = [h, k]


# ============================================================
# CREATION DU PAYS
# ============================================================

pays = Pays([
    a, b, c, d, e, f,
    g, h, i, j, k, l
])


# ============================================================
# TESTS
# ============================================================

# Au départ, toutes les régions sont non colorisées
assert len(pays.renvoie_tab_regions_non_coloriees()) == 12

# La région F possède le plus de voisines
assert pays.renvoie_max() == f


# ============================================================
# COLORISATION
# ============================================================

pays.colorie()


# Toutes les régions doivent être colorisées
for region in pays.tab_regions:
    assert region.est_colorisee()


# ============================================================
# VERIFICATION DES VOISINAGES
# ============================================================

# Deux régions voisines ne doivent jamais avoir
# la même couleur
for region in pays.tab_regions:
    for voisine in region.tab_voisines:
        assert region.couleur_attribuee != voisine.couleur_attribuee


# ============================================================
# AFFICHAGE DU RESULTAT
# ============================================================

print("Colorisation obtenue :")

for region in pays.tab_regions:
    print(
        region.nom,
        "->",
        region.couleur_attribuee
    )

print()
print("Nombre de couleurs utilisées :")

couleurs = []

for region in pays.tab_regions:
    if region.couleur_attribuee not in couleurs:
        couleurs.append(region.couleur_attribuee)

print(len(couleurs))
print(couleurs)

print()
print("Tous les tests sont réussis !")