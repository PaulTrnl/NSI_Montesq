---
layout: default
title: SNT
permalink: ressources/snt/
---

# SNT

<ul class="ressource-list">
{% assign items = site.ressources | where: "niveau", "snt" | sort: "ordre" %}
{% for item in items %}
  <li>
    <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    {% if item.chapitre %}<span class="chapitre-tag">{{ item.chapitre }}</span>{% endif %}
  </li>
{% endfor %}
</ul>
