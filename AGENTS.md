# Application Next.js + Supabase

Ce dépôt sert à créer le premier parcours utile d’une application web. Il démarre avec une page et un schéma vide.

## Mise en route

Suis [setup](.agents/skills/setup/SKILL.md) pour lancer le projet. Si la personne suit l’atelier, ouvre le [TP Dépenses entre amis](TP-depenses-entre-amis.md) et reste à l’étape qu’elle a demandée.

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

- Accéder à Supabase côté serveur via `getSupabase()` dans `src/db/index.ts`.
- Versionner les migrations SQL dans `supabase/migrations/`. Activer RLS sur chaque table exposée et limiter les droits aux opérations nécessaires.
- Garder les secrets dans `.env.local` ou chez l’hébergeur. Ne jamais publier une URL de connexion ni utiliser `NEXT_PUBLIC_` pour une valeur secrète.

## Skills de conception

Les skills du starter sont dans `.agents/skills/` pour Codex et `.claude/skills/` pour Claude Code. Quand tu modifies un skill fourni, répercute la modification dans les deux dossiers. Pour le TP, réutilise les skills existants et crée `cadrer-une-modification` seulement pendant l’exercice. Après un pivot, reprends le cadrage avant de retoucher le code. Le [README](README.md#skills-de-conception) indique quand utiliser chaque recette.
