---
layout: default
title: Accueil
---

# Bienvenue !

Ce site regroupe les ressources de cours, exercices et liens utiles pour mes élèves.

## Niveaux

{% for niveau in site.niveaux %}
- [{{ niveau.nom }}](/NSI_Montesq/ressources/{{ niveau.slug }}/)
{% endfor %}

Utilise le menu en haut pour naviguer par niveau.
