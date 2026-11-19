# Vibe Coding Starter · Pepit’ozer

Une base pour démarrer ton propre projet après l’atelier. Le dépôt contient une page à remplacer, un accès serveur à Neon et un schéma PostgreSQL vide. Tu peux esquisser ton interface avant de créer une base.

## Démarrer

Installe [Node.js 24 LTS](https://nodejs.org/en/download). Si tu utilises nvm, `nvm use` choisit la version du projet.

```bash
git clone https://github.com/ThomasLaforge/vibe-coding-starter.git mon-projet
cd mon-projet
npm ci
npm run dev
```

Ouvre [localhost:3000](http://localhost:3000) ou l’adresse affichée dans le terminal. Modifie `src/app/page.tsx` pour façonner ton premier parcours. Si tu as utilisé **Use this template** sur GitHub, clone l’adresse de ton nouveau dépôt à la place. Si tu as cloné celui-ci directement, crée un dépôt GitHub vide à ton nom et remplace `origin` avec `git remote set-url origin <url-de-ton-dépôt>` avant de pousser.

## Ce que la stack apporte

- **Next.js App Router et TypeScript strict** donnent une place à l’interface et au code serveur dans le même projet.
- **Tailwind CSS 4** fournit les classes de mise en page. Les couleurs communes se règlent dans `src/app/globals.css`. La police système évite un téléchargement externe.
- **Neon PostgreSQL et Drizzle ORM** donnent des requêtes typées et des migrations SQL que tu peux relire. Le module `src/db/index.ts` réserve l’accès à la base au serveur.

## Ajouter la première table

1. Dans la [console Neon](https://console.neon.tech/), crée un projet et utilise une branche de développement.
2. Copie `.env.example` vers `.env.local` et colle les deux URL de la même branche. `DATABASE_URL` utilise **Connection pooling**. `DATABASE_URL_UNPOOLED` utilise l’URL directe.
3. Ajoute une table avec `pgTable` dans `src/db/schema.ts`. Par exemple, pour un carnet de notes, commence avec l’identifiant et le titre. [Guide Drizzle et Neon](https://orm.drizzle.team/docs/tutorials/drizzle-nextjs-neon)
4. Exécute `npm run db:generate -- --name=premiere-table`. Relis le SQL produit dans `drizzle/`, puis applique-le à ta branche de développement avec `npm run db:migrate`. Versionne le dossier `drizzle/` avec le schéma.
5. Dans un composant serveur rendu à la demande, une action serveur ou un Route Handler, importe `getDb` depuis `@/db` pour accéder à la table. Pour une page qui doit lire les données à chaque requête, appelle `await connection()` de `next/server` avant la requête, afin que la compilation ne tente pas de joindre Neon.

Le pilote Neon HTTP convient aux requêtes courtes. Si une fonctionnalité a besoin de transactions interactives, choisis le pilote adapté avant de l’implémenter.

## Déployer sur Vercel

Importe ton propre dépôt comme projet Next.js et utilise Node.js 24. Lorsque ton parcours utilise Neon, ajoute `DATABASE_URL` côté serveur dans chaque environnement concerné et associe la préproduction et la production à leurs branches Neon respectives. Applique les migrations séparément avec l’URL directe de l’environnement visé. `npm run build` compile l’application.

Pour travailler avec un agent, ouvre le dépôt et donne-lui ton brief issu du carnet. Les conventions du projet sont dans [AGENTS.md](AGENTS.md).
