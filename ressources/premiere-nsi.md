---
layout: default
title: Première NSI
permalink: /ressources/premiere-nsi/
---

# Première NSI

<ul class="ressource-list">
{% assign items = site.ressources | where: "niveau", "premiere-nsi" | sort: "ordre" %}
{% for item in items %}
  <li>
    <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    {% if item.chapitre %}<span class="chapitre-tag">{{ item.chapitre }}</span>{% endif %}
  </li>
{% endfor %}
</ul>
