---
layout: default
title: Accueil
---

# Bienvenue !

Ce site regroupe les ressources de cours, exercices et liens utiles pour mes élèves.

## Matières

{% for matiere in site.matieres %}
- [{{ matiere.nom }}](/ressources/{{ matiere.slug }}/)
{% endfor %}

Utilise le menu en haut pour naviguer par matière.
