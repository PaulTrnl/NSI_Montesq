
class Temps:

    def __init__(self, h, m, s):
        self.h = h
        self.m = m
        self.s = s

    def __repr__(self):
        return f"{self.h} heures {self.m} minutes {self.s} secondes"

    def add(self, t):
        s = self.s + t.s
        m = self.m + t.m
        h = self.h + t.h

        if s >= 60:
            s -= 60
            m += 1

        if m >= 60:
            m -= 60
            h += 1

        return Temps(h, m, s)

    def sous(self, t):
        s = self.s - t.s
        m = self.m - t.m
        h = self.h - t.h

        if s < 0:
            s += 60
            m -= 1

        if m < 0:
            m += 60
            h -= 1

        return Temps(h, m, s)

t1 = Temps(2, 15, 30)
t2 = Temps(1, 50, 45)

print(t1)
print(t2)

t3 = t1.add(t2)
print(t3)

t4 = t1.sous(t2)
print(t4)


# Résultat :
# 2 heures 15 minutes 30 secondes
# 1 heures 50 minutes 45 secondes
# 4 heures 6 minutes 15 secondes
# 0 heures 24 minutes 45 secondes

