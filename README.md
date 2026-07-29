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

Crée un fichier `.md` dans `_ressources/`, par exemple `_ressources/premiere-nsi-boucles.md` :

```yaml
---
layout: default
title: "Les boucles en Python"
niveau: premiere-nsi
chapitre: "Chapitre 3"
ordre: 3
---

Contenu de ton cours ici en Markdown...
```

Le champ `niveau` doit correspondre exactement à un des `slug` définis dans `_config.yml` (`snt`, `premiere-nsi` ou `terminale-nsi`). La ressource apparaîtra automatiquement dans la page du niveau correspondant, triée par `ordre`.

## 4. Ajouter un nouveau niveau

Dans `_config.yml`, ajoute dans la liste `niveaux:` :

```yaml
  - nom: "Seconde"
    slug: "seconde"
```

⚠️ Le `slug` ne doit **jamais** contenir d'espace ni d'accent (il sert dans l'URL du site) — utilise des tirets à la place, ex : `premiere-nsi`.

Puis crée `ressources/seconde.md` en copiant `ressources/snt.md` et en remplaçant `"snt"` par `"seconde"` (dans le `permalink` et dans le filtre `where`).

## 5. Ajouter des fichiers PDF téléchargeables

Mets tes PDF dans `assets/files/` et lie-les depuis une ressource avec :
```markdown
[Télécharger le PDF](/assets/files/monfichier.pdf)
```

## Personnalisation du design

Toute la mise en page est dans `_layouts/default.html` et le style dans `assets/css/style.css` — modifie-les librement, c'est du HTML/CSS classique.
