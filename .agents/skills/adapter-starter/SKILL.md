---
name: adapter-starter
description: Traduire un parcours en une évolution ciblée du starter Next.js. À utiliser pour choisir entre une démo locale et un usage partagé, ou pour implémenter le premier parcours sur demande.
---

## Trouver le plus petit changement qui couvre le parcours

Lis le brief, le README et `AGENTS.md`. Repère les routes, composants, styles et données qui servent déjà l’usage. Note l’état de départ, l’action, le retour à l’écran et ce qui doit rester vrai après actualisation ou depuis un autre appareil. Si le périmètre a changé, reprends cette décision avec le participant avant de retoucher le code concerné.

- **Contenu ou maquette.** Garde des données fictives dans le projet si le scénario consiste à lire, parcourir ou comparer. Garde le rendu côté serveur par défaut.
- **Démo sur un navigateur.** Ajoute un composant client au plus près de l’interaction. Utilise l’état React pendant la session et le stockage navigateur uniquement si retrouver un état local après actualisation fait partie du besoin. Valide la forme des données stockées à la lecture. Si l’écriture échoue, affiche le résultat réel et laisse une voie de reprise.
- **Données partagées.** Fais traiter l’action par le serveur. Vérifie la saisie et les droits à l’entrée. Utilise `getDb()` et les contraintes de `src/db/schema.ts` pour les règles qui doivent tenir malgré des actions simultanées. Définis le résultat à afficher en cas de conflit. Si la structure change, suis la procédure de migration du README et applique-la uniquement à l’environnement autorisé.

Une dépendance ou un service supplémentaire doit résoudre un besoin concret du parcours. Précise le coût côté participant et les implications pour les données ou le déploiement.

## Adapter selon la demande

Pour une demande de cadrage, livre le scénario retenu, les parties du starter à réutiliser, les fichiers à modifier, la portée de la persistance et les décisions encore ouvertes. Pour une demande d’implémentation, réalise le parcours, traite son blocage principal et vérifie le résultat par le point d’entrée habituel. Dans le bilan, indique le comportement vérifié et les limites qui changent la démo. Corrige la documentation du dépôt si une commande ou une convention utilisée change.

Exemple du TP · Garde la page dans `src/app` et lis les réservations depuis Neon dans un composant serveur. Traite « Je m’en charge » avec une action serveur Next.js. Déclare une seule réservation possible par élément dans le schéma Drizzle et gère le conflit au moment de l’écriture. La page doit refléter cet état partagé depuis un autre appareil après actualisation.
