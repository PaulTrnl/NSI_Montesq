
class CodeCesar:

    def __init__(self, cle):
        self.cle = cle
        self.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    def decale(self, lettre):
        """Décale une lettre selon la clé de chiffrement."""

        num1 = self.alphabet.find(lettre.upper())

        # Si le caractère n'est pas une lettre de l'alphabet
        if num1 == -1:
            return lettre

        # Application du décalage avec retour au début de l'alphabet
        num2 = (num1 + self.cle) % 26

        return self.alphabet[num2]

    def chiffrement(self, texte):
        """Chiffre un texte avec la clé de chiffrement."""

        message = ""

        for lettre in texte:
            message += self.decale(lettre)

        return message

    def transforme(self, texte):
        """Transforme un texte avec la clé opposée."""

        self.cle = -self.cle

        message = self.chiffrement(texte)

        self.cle = -self.cle

        return message


# Question 1

code1 = CodeCesar(3)

print(code1.decale("A"))  # D
print(code1.decale("X"))  # A


# Question 2

code1 = CodeCesar(3)

print(code1.chiffrement("NSI"))  # QVL


# Question 3

cle = int(input("Entrez la clé de chiffrement : "))

code = CodeCesar(cle)

texte = input("Entrez le texte à chiffrer : ")

print(code.chiffrement(texte))


# Question 4

code1 = CodeCesar(10)

print(code1.transforme("PSX"))  # FIN

print(code1.cle)  # 10


# Pour la question 4 :
# 
# `transforme` commence par remplacer temporairement la clé `10` par `-10`.
# 
# Le chiffrement de `"PSX"` avec la clé `-10` donne :
# 
# * `P` → `F`
# * `S` → `I`
# * `X` → `N`
# 
# La méthode renvoie donc `"FIN"`.
# 
# Avant de terminer, elle remet ensuite la clé à sa valeur initiale : `10`.
# 