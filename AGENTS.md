# Starter Next.js + Neon

Ce dépôt sert à créer le premier parcours utile d’une application web. Il démarre avec une page et un schéma vide.

## Mise en route

Pour installer ou lancer le starter, suis [preparer-atelier](.agents/skills/preparer-atelier/SKILL.md). Le premier démarrage est local. Configure les services externes si l’utilisateur souhaite les utiliser.

## Conception

- Reformuler le besoin, la personne concernée et le résultat observable avant d’implémenter. Avancer par parcours court. Utiliser des données fictives pendant le prototypage.
- Préférer le code existant et les primitives de la stack. Ajouter une dépendance ou une abstraction quand un besoin concret le justifie. Garder chaque module centré sur un rôle.
- Garder le diff ciblé. En cas de changement de contrat, mettre à jour les consommateurs et traiter les données existantes.

## Interface et serveur

- Pour une API Next.js nouvelle dans le projet, consulte la documentation de la version installée dans `node_modules/next/dist/docs/`.
- Mettre les routes et les layouts dans `src/app`. Garder les composants serveur par défaut. Utiliser `'use client'` au plus près d’un besoin d’interactivité.
- Réutiliser les tokens de `src/app/globals.css` et les classes Tailwind. Préserver les libellés visibles, le focus clavier et la lisibilité sur mobile.
- Valider les données externes et contrôler l’accès côté serveur, au point d’entrée. Utiliser des types explicites et traiter les erreurs près de la source.

## Données

- Accéder à Neon côté serveur via `getDb()` dans `src/db/index.ts`. Mettre les tables et leurs contraintes dans `src/db/schema.ts`.
- Versionner le SQL généré et les métadonnées dans `drizzle/`. Relire une migration avant de l’appliquer et commencer sur une branche Neon de développement. Obtenir un accord explicite et prévoir sauvegarde et retour arrière avant une opération destructive.
- Garder les secrets dans `.env.local` ou chez l’hébergeur. Ne jamais publier une URL de connexion ni utiliser `NEXT_PUBLIC_` pour une valeur secrète.

## Skills de conception

Les recettes du projet sont dans `.agents/skills/`. Prends celle qui correspond à la décision en cours. Après un pivot, reprends le cadrage avant de retoucher le code. Le [README](README.md#skills-de-conception) indique quand utiliser chaque recette.
