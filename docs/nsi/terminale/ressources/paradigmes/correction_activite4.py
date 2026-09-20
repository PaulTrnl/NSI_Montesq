
class Piece:

    """Représente une pièce d'un appartement."""

    def __init__(self, nom, surface):
        """Initialise une pièce avec son nom et sa surface en m²."""
        self.nom = nom
        self.surface = surface

    def getNom(self):
        """Retourne le nom de la pièce."""
        return self.nom

    def getSurface(self):
        """Retourne la surface de la pièce."""
        return self.surface

    def setSurface(self, s):
        """Modifie la surface de la pièce."""
        self.surface = s


class Appartement:

    """Représente un appartement composé de plusieurs pièces."""

    def __init__(self, nom):
        """Initialise un appartement avec une liste de pièces vide."""
        self.nom = nom
        self.pieces = []

    def getNom(self):
        """Retourne le nom de l'appartement."""
        return self.nom

    def ajouter(self, piece):
        """Ajoute une pièce à l'appartement."""
        self.pieces.append(piece)

    def nbPieces(self):
        """Retourne le nombre de pièces de l'appartement."""
        return len(self.pieces)

    def getSurfaceTotale(self):
        """Calcule et retourne la surface totale de l'appartement."""
        surface = 0

        for piece in self.pieces:
            surface += piece.getSurface()

        return surface

    def getListePieces(self):
        """Retourne la liste des pièces de l'appartement."""
        return self.pieces


# Question 10

salon = Piece("Salon", 25)
cuisine = Piece("Cuisine", 10)
chambre = Piece("Chambre", 12)

appartement = Appartement("Mon appartement")

appartement.ajouter(salon)
appartement.ajouter(cuisine)
appartement.ajouter(chambre)

print(appartement.getNom())
print(appartement.nbPieces())
print(appartement.getSurfaceTotale())

chambre.setSurface(15)

print(appartement.getSurfaceTotale())

