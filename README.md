# Vibe Coding Starter · Pepit’ozer

Une base pour démarrer ton propre projet après l’atelier. Le dépôt contient une page à remplacer, un accès serveur à Neon et un schéma PostgreSQL vide. Tu peux esquisser ton interface avant de créer une base.

## Démarrer avec Codex ou Claude Code

Ouvre une session **locale** de ton agent avec accès au terminal, dans le dossier où tu veux travailler. Connecte-toi à ton compte agent. Avant même d’avoir cloné le starter, tu peux lui envoyer ce message.

> Prépare le starter de l’atelier Pepit’ozer sur cette machine. Vérifie Git et Node.js 24 et installe ce qui manque avec les outils officiels disponibles. Clone https://github.com/ThomasLaforge/vibe-coding-starter.git dans un nouveau dossier si besoin. Ouvre ensuite le fichier `.agents/skills/preparer-atelier/SKILL.md` du projet et suis le parcours local jusqu’à ce que la page d’accueil s’ouvre.

Dans un dépôt déjà ouvert, demande simplement « Utilise le skill `preparer-atelier` et démarre le projet en local ». Dans Claude Code, tu peux aussi saisir `/preparer-atelier`. [Procédure suivie par l’agent](.agents/skills/preparer-atelier/SKILL.md)

Si tu veux publier le prototype ou le relier à une vraie base, demande ensuite à l’agent de t’accompagner pour GitHub, Vercel ou Neon. Valide toi-même les connexions demandées dans le navigateur. Pour Neon, ajoute les URL dans `.env.local` si l’agent ne peut pas les récupérer via les outils officiels.

## Démarrer à la main

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

## Skills de conception

Ouvre le dépôt dans ton agent et choisis le skill qui correspond à ta prochaine décision. Dans Claude Code, tu peux le lancer avec `/nom-du-skill`. Tu peux aussi donner le lien vers le `SKILL.md` et joindre ton brief du carnet ou un croquis. Les étapes du carnet fournissent les champs à compléter.

| Quand | Quel skill |
| --- | --- |
| Explorer une idée ou recadrer après un pivot | [cadrer-probleme](.agents/skills/cadrer-probleme/SKILL.md) |
| Préciser les personas et les alternatives du marché | [etudier-public](.agents/skills/etudier-public/SKILL.md) |
| Dessiner le parcours et son wireframe | [dessiner-parcours](.agents/skills/dessiner-parcours/SKILL.md) |
| Choisir les couleurs, la typo et les composants | [definir-direction-visuelle](.agents/skills/definir-direction-visuelle/SKILL.md) |
| Repérer le principal obstacle dans une maquette | [critiquer-maquette](.agents/skills/critiquer-maquette/SKILL.md) |
| Choisir le POC, le MVP et les versions suivantes | [definir-mvp](.agents/skills/definir-mvp/SKILL.md) |
| Adapter le template au premier parcours | [adapter-starter](.agents/skills/adapter-starter/SKILL.md) |
| Préparer une automatisation ou un lien vers un outil externe | [cadrer-automatisation](.agents/skills/cadrer-automatisation/SKILL.md) |
| Transmettre le brief et la démo à un dev | [preparer-relais](.agents/skills/preparer-relais/SKILL.md) |

Exemple pour commencer · « Utilise `cadrer-probleme`. Je veux simplifier les inscriptions à mes ateliers. Pose-moi une question à la fois et aide-moi à trouver un signe de réussite. »
