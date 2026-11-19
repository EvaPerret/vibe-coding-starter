---
name: preparer-atelier
description: Préparer et lancer le starter Pepit’ozer dans le dossier de travail. À utiliser pour installer Git ou Node.js 24, cloner le modèle, lancer l’application et, sur demande, configurer GitHub, Neon ou Vercel.
---

Exécute les étapes disponibles dans l’environnement courant. Reprends à partir de l’état existant et poursuis le démarrage local même si un service externe demande une connexion.

## Démarrer en local

1. Vérifie le dossier de travail et repère un éventuel clone du starter. Contrôle Git, Node.js et npm. Le projet exige Node.js 24. Si un gestionnaire de versions est déjà présent, utilise-le et active Node.js 24 pour ce projet. Si un outil manque, utilise le gestionnaire de paquets déjà disponible et la source officielle adaptée au système. Quand une installation exige une action sur la machine que tu ne peux pas effectuer, indique précisément laquelle, puis reprends au retour de l’utilisateur.
2. Si le dépôt manque, clone `https://github.com/ThomasLaforge/vibe-coding-starter.git` dans un nouveau dossier `mon-projet` ou au chemin indiqué. Réutilise un clone existant du projet. Si le chemin demandé est occupé par autre chose, choisis un dossier libre.
3. À la racine du projet, lance `npm ci`, puis `npm run dev` dans un processus que tu peux laisser tourner. Récupère l’adresse affichée et attends une réponse HTTP de la page d’accueil. Si le port est occupé, utilise un port libre sans arrêter l’autre application. Donne le chemin du projet et l’adresse à ouvrir. L’accès à une base et les comptes GitHub, Vercel et Neon sont facultatifs à ce stade.

## Activer un service sur demande

- **Dépôt GitHub personnel.** Utilise le compte déjà connecté et vérifie le propriétaire et le nom cible. Pour un nouveau projet, utilise [la création à partir d’un modèle](https://cli.github.com/manual/gh_repo_create) avec `--template ThomasLaforge/vibe-coding-starter --private --clone` et le nom de dépôt choisi. Si le projet existe déjà localement, crée un dépôt vide et préserve son historique et ses modifications. Préserve le remote du modèle sous `upstream` si tu dois le remplacer. Si GitHub demande une connexion, lance le parcours officiel dans le navigateur et laisse l’utilisateur le valider.
- **Base Neon.** Utilise le projet et la branche de développement sélectionnés dans Neon. Suis la section [Ajouter la première table](../../../README.md#ajouter-la-premi%C3%A8re-table) pour configurer uniquement les URL dans `.env.local`. Conserve les autres variables déjà présentes. Préfère une connexion existante ou une récupération sécurisée via les outils officiels. Si l’utilisateur doit copier les URL lui-même, oriente-le vers le fichier local et reprends après sa confirmation. Laisse le schéma vide tant qu’une première table n’a pas été demandée.
- **Déploiement Vercel.** Vérifie que le dépôt personnel et le projet Vercel ciblés correspondent. Relie-les avec l’intégration Git ou les outils officiels, configure Node.js 24 et utilise un déploiement de prévisualisation pour le premier essai. Si l’application utilise Neon, configure les variables dans l’environnement visé avec une branche distincte de la production. Si la connexion, la création d’une ressource ou le choix d’une offre exige une validation, laisse l’utilisateur effectuer cette étape puis reprends.
- Ne demande jamais un mot de passe, un code de connexion ou une URL de base dans le chat. N’affiche pas les secrets et vérifie que les fichiers locaux qui les contiennent sont ignorés par Git.
