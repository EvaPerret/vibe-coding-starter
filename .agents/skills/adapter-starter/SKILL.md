---
name: adapter-starter
description: Transformer un parcours validé en changements ciblés dans le starter Next.js, Drizzle et Neon. À utiliser lorsqu’il faut choisir où placer une fonctionnalité ou la réaliser dans le dépôt.
---

## Lire le parcours et le code existant

Lis le brief, `AGENTS.md`, les routes concernées et les contrats de données utilisés. Identifie l’action principale, son échec le plus probable et ce qui doit rester vrai après actualisation ou depuis un autre appareil. Si le choix de persistance change le parcours, rends ce choix explicite avant d’implémenter.

| Besoin | Point de départ dans le starter |
| --- | --- |
| Afficher des données ou un écran | Rends depuis `src/app`. Garde les composants serveur par défaut. Réutilise les styles et les tokens de `src/app/globals.css`. |
| Gérer une interaction | Place l’état et les composants clients au plus près de l’interaction. Si le résultat doit survivre à la session ou être partagé, lis-le depuis sa source de vérité. |
| Faire une écriture partagée | Traite l’action côté serveur. Vérifie les entrées et les droits avant d’écrire. Utilise `getDb()` et les contraintes de `src/db/schema.ts` pour les invariants qui doivent tenir entre plusieurs requêtes. |
| Changer la structure des données | Génère une migration Drizzle versionnée, relis-la et applique-la à l’environnement autorisé. Si des données existent, décide comment les préserver et traite chaque consommateur du schéma. |

## Décrire ou réaliser la tranche utile

- Pour un cadrage, indique les fichiers ou modules à réutiliser, le trajet d’une saisie jusqu’au retour d’écran et la règle que le serveur doit faire respecter.
- Pour une implémentation, réalise ensemble la saisie, l’action qui enregistre et l’affichage du résultat. Traite l’erreur à sa source. Si une écriture échoue ou est refusée, garde une voie de reprise pour l’utilisateur et évite d’afficher un succès.
- En cas de relance ou de double confirmation, détermine quelles écritures peuvent être répétées et lesquelles doivent être uniques. Si la fonctionnalité touche plusieurs écritures, vérifie que le pilote et le schéma permettent une mise à jour cohérente.
- Réutilise la pile existante. Ajoute un service ou une dépendance seulement si le parcours impose un besoin concret. Suis le README et la documentation Next.js installée pour les API que le projet n’utilise pas déjà.

## Résultat attendu

Donne le parcours accessible, la règle vérifiée et les limites utiles à la démonstration. Si des migrations sont concernées, indique l’environnement qui les a reçues. Pour une évolution, précise quel comportement existant tu as repris et comment accéder au nouveau.

## Exemple dans le starter

Pour les dépenses entre amis, le serveur valide un montant positif et un payeur membre du groupe, puis enregistre l’écriture dans Neon. Calcule les soldes à partir des dépenses en centimes. Un remboursement confirmé est une écriture du payeur vers le bénéficiaire. La confirmation doit s’appuyer sur l’état courant et éviter un double enregistrement. Après un conflit, l’écran explique pourquoi la proposition doit être recalculée.
