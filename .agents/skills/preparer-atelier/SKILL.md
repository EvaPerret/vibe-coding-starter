---
name: preparer-atelier
description: Préparer et lancer le starter Pepit’ozer dans le dossier de travail. À utiliser pour installer Git ou Node.js 24, cloner le modèle, lancer l’application et, sur demande, configurer GitHub, Neon ou Vercel.
---

Exécute les étapes disponibles dans l’environnement courant. Reprends à partir de l’état existant et poursuis le démarrage local même si un service externe demande une connexion.

## Démarrer en local

1. Repère le dossier du projet en vérifiant son dépôt Git et son `package.json`. Réutilise un clone existant et préserve les modifications en cours. Si le starter manque, clone `https://github.com/ThomasLaforge/vibe-coding-starter.git` dans un nouveau dossier `mon-projet` ou au chemin indiqué. Si le chemin est occupé par un autre projet, choisis un dossier libre.
2. Vérifie les exécutables Git, Node.js et npm depuis le terminal qui lancera le projet. Active Node.js 24 avec le gestionnaire de versions déjà disponible. Si un outil manque, utilise la source officielle adaptée au système. Si l’installation exige une action sur la machine, indique précisément laquelle puis reprends à la vérification des versions. Évite de changer la version par défaut de Node pour les autres projets.
3. Si l’application du projet répond déjà, réutilise son adresse. Sinon, depuis la racine, installe les dépendances verrouillées avec `npm ci` puis lance `npm run dev` dans un processus qui peut rester actif. Suis le port affiché. Si le port est occupé par une autre application, laisse-la tourner et lance le starter sur un port libre.
4. Attends que la page du projet réponde. Dans un clone vierge, vérifie le titre « Votre projet ». Dans un projet déjà adapté, vérifie que la réponse correspond à son écran d’accueil. Si le lancement échoue, lis le premier message bloquant et corrige sa cause avant de relancer. En cas de problème de téléchargement ou de permissions, préserve le fichier de verrouillage et indique l’étape qui bloque.

Donne le chemin du projet et l’adresse à ouvrir. Si la session ne permet de garder ni le processus ni le port accessibles, indique ce qui a été préparé et la commande à lancer depuis la racine. La mise en route du starter vierge fonctionne sans compte GitHub, Neon ou Vercel.

## Activer un service sur demande

- **Dépôt GitHub personnel.** Utilise le compte déjà connecté et vérifie le propriétaire et le nom cible. Pour un nouveau projet, utilise [la création à partir d’un modèle](https://cli.github.com/manual/gh_repo_create) avec `--template ThomasLaforge/vibe-coding-starter --private --clone` et le nom de dépôt choisi. Si le projet existe déjà localement, crée un dépôt vide et préserve son historique et ses modifications. Préserve le remote du modèle sous `upstream` si tu dois le remplacer. Si GitHub demande une connexion, lance le parcours officiel dans le navigateur et laisse l’utilisateur le valider.
- **Base Neon.** Utilise le projet et la branche de développement sélectionnés dans Neon. Suis la section [Ajouter la première table](../../../README.md#ajouter-la-premi%C3%A8re-table) pour configurer uniquement les URL dans `.env.local`. Conserve les autres variables déjà présentes. Préfère une connexion existante ou une récupération sécurisée via les outils officiels. Si l’utilisateur doit copier les URL lui-même, oriente-le vers le fichier local et reprends après sa confirmation. Laisse le schéma vide tant qu’une première table n’a pas été demandée.
- **Déploiement Vercel.** Vérifie le dépôt, la branche source et le projet Vercel ciblés. Avant tout push, vérifie les fichiers qui vont partir et la destination pour éviter de publier vers le dépôt modèle. Relie-les avec l’intégration Git ou les outils officiels, configure Node.js 24 et utilise un déploiement de prévisualisation pour le premier essai. Si l’application utilise Neon, configure les variables dans l’environnement visé avec une branche distincte de la production. Si la connexion, la création d’une ressource ou le choix d’une offre exige une validation, laisse l’utilisateur effectuer cette étape puis reprends.
- Ne demande jamais un mot de passe, un code de connexion ou une URL de base dans le chat. N’affiche pas les secrets et vérifie que les fichiers locaux qui les contiennent sont ignorés par Git.
