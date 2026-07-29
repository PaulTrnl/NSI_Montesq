# Site de ressources — Guide rapide

## 1. Tester en local

Il faut Ruby installé, puis :

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

Le site est accessible sur `http://localhost:4000`.

## 2. Déployer gratuitement sur GitHub Pages

1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas.
2. Crée un nouveau dépôt (repository), par exemple `mon-site-eleves`.
3. Pousse tout ce dossier dedans :
   ```bash
   git init
   git add .
   git commit -m "Premier site"
   git branch -M main
   git remote add origin https://github.com/TONPSEUDO/mon-site-eleves.git
   git push -u origin main
   ```
4. Sur GitHub : va dans **Settings > Pages**, choisis la branche `main` et le dossier `/ (root)`, puis sauvegarde.
5. Ton site sera en ligne à l'adresse `https://TONPSEUDO.github.io/mon-site-eleves/` après 1-2 minutes.
6. Dans `_config.yml`, mets à jour `baseurl: "/mon-site-eleves"` et `url` avec ton adresse GitHub Pages, puis repush.

## 3. Ajouter une nouvelle ressource

Crée un fichier `.md` dans `_ressources/`, par exemple `_ressources/maths-geometrie.md` :

```yaml
---
layout: default
title: "La géométrie"
matiere: maths
chapitre: "Chapitre 4"
ordre: 4
---

Contenu de ton cours ici en Markdown...
```

Il apparaîtra automatiquement dans la page de la matière correspondante.

## 4. Ajouter une nouvelle matière

Dans `_config.yml`, ajoute dans la liste `matieres:` :

```yaml
  - nom: "Histoire"
    slug: "histoire"
```

Puis crée `ressources/histoire.md` en copiant `ressources/maths.md` et en remplaçant `"maths"` par `"histoire"`.

## 5. Ajouter des fichiers PDF téléchargeables

Mets tes PDF dans `assets/files/` et lie-les depuis une ressource avec :
```markdown
[Télécharger le PDF](/assets/files/monfichier.pdf)
```

## Personnalisation du design

Toute la mise en page est dans `_layouts/default.html` et le style dans `assets/css/style.css` — modifie-les librement, c'est du HTML/CSS classique.
