---
name: setup
description: Ouvrir ou initialiser un projet à partir du starter Pepit’ozer, le lancer en local et, quand le parcours le demande, le relier à Neon via le MCP. À utiliser pour une première mise en route ou pour reprendre une installation interrompue.
---

## Identifier le projet

1. Pars du dossier indiqué. Vérifie le dépôt et le `package.json` pour identifier une copie du starter ou un projet déjà construit dessus. Dans un atelier, le dossier peut s’appeler `mon-projet`. En cas de détection ambiguë, présente les deux chemins avant de choisir.
2. Réutilise le projet trouvé, avec ses modifications et sa configuration. Si le projet manque, clone `https://github.com/ThomasLaforge/vibe-coding-starter.git` dans le dossier demandé ou dans un nouveau sous-dossier libre. Si l’utilisateur a fourni son propre dépôt, utilise cette adresse. Lis son `AGENTS.md`.
3. Vérifie Git, Node et npm dans le terminal qui va lancer le projet. Active la version de `.nvmrc` avec le gestionnaire déjà présent. Si un outil manque, utilise la source officielle adaptée à la machine. Indique l’action exacte à l’utilisateur si elle nécessite son intervention.

## Ouvrir la page locale

- Si un processus du projet sert déjà sa page, vérifie son dossier et réutilise l’adresse. Sinon, installe avec `npm ci` si nécessaire et lance `npm run dev` depuis la racine. Lis le port affiché. Si une autre application occupe ce port, utilise un port libre.
- Attends une réponse de la page et vérifie le contenu attendu. Un starter vierge affiche « Votre projet ». Pour un projet modifié, compare la réponse à son écran d’accueil. Corrige le premier blocage identifié avant de relancer.
- Si le processus ne peut pas rester en ligne dans la session, indique l’étape atteinte et la commande à lancer. Le clone et l’accueil vierge peuvent être préparés pendant une attente d’autorisation Neon.

## Relier Neon quand la demande le prévoit

1. Cherche une configuration existante sans afficher ses valeurs. Si elle correspond au projet de l’utilisateur, reprends-la. Sinon, utilise le MCP Neon pour identifier l’organisation, le projet et la branche de développement. Réutilise une branche dédiée à l’exercice si elle existe. Avant une création, présente la cible et demande un choix seulement si plusieurs ressources conviennent ou si le compte ne peut pas être déterminé.
2. Configure `DATABASE_URL` avec pooling et `DATABASE_URL_UNPOOLED` en connexion directe, pour la même branche. Utilise `.env.local` et préserve les autres variables du projet. Si l’environnement n’a aucun moyen autorisé d’y écrire les valeurs sans les exposer, indique à l’utilisateur où les saisir depuis la console Neon. Vérifie que Git ignore le fichier.
3. Vérifie la connexion de l’application par une lecture minimale, comme `SELECT 1`, avec la configuration locale du projet. Un appel réussi au MCP ou un accueil qui s’affiche ne vérifient que leur propre accès. Redémarre le serveur du projet si le changement d’environnement le nécessite.
4. Garde les tables du starter vierges au démarrage. Les migrations Drizzle viennent avec la première fonctionnalité qui les requiert. Utilise le MCP pour préparer la branche ou inspecter la base.

## Reprendre en cas de blocage

| Ce qui bloque | Où reprendre |
| --- | --- |
| Le MCP Neon demande une connexion | Fais valider le bon compte dans le navigateur. Reprends avec le nom du projet et de la branche. [Connexion à Neon](https://neon.com/docs/ai/neon-mcp-server) |
| L’agent voit le projet dans Neon, mais la lecture locale échoue | Vérifie que le processus charge bien la configuration locale, que les deux connexions ciblent la même branche et que la connexion avec pooling sert à l’application. |
| La page répond avec le contenu d’un autre projet | Compare le dossier du processus et celui demandé, puis récupère le port du bon serveur. |

## Restitution à la personne qui démarre

Donne le chemin du projet et l’adresse à ouvrir. Si Neon était demandé, donne le nom du projet et de la branche, puis indique si la lecture depuis l’application a abouti. Si quelque chose manque, nomme une action précise à faire et l’écran sur lequel la faire.

Exemple · « Ouvre http://127.0.0.1:3000. Tu devrais voir “Votre projet”. La connexion vers la branche de développement de Dépenses entre amis répond. »
