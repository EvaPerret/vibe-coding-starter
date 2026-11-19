# TP · Dépenses entre amis

**30 minutes.** Tu vas créer une petite appli pour partager les dépenses d’une sortie, lui ajouter une idée à toi et obtenir un lien à partager. Ton projet commence comme une copie du modèle de l’atelier.

**Avant le chrono** · Avec le formateur, ouvre ton agent et vérifie que **Neon** et **Vercel** sont connectés. Garde à portée de main le lien de ton espace de publication public, préparé pour l’atelier. Les MCP sont les connexions qui permettent à ton agent d’agir sur ces deux services.

**Comment jouer** · Copie ou adapte les prompts. Un **skill**, c’est une fiche que ton agent peut réutiliser dans plusieurs situations. Le modèle en fournit déjà. Tu écriras ta propre fiche à l’étape 3 pour préparer les prochaines modifications de ton appli. Utilise des prénoms et des montants fictifs pendant tout le TP.

## 1. Ouvre ton projet · 0 à 6 min

**Le skill à utiliser** · `setup`, déjà fourni dans le modèle. Il prépare ta copie et la relie à Neon.

**Prompt à saisir**

```text
Pars du modèle https://github.com/ThomasLaforge/vibe-coding-starter et fais-en une copie de travail sur mon ordinateur. Une fois dans la copie, utilise le skill setup fourni avec le modèle pour ouvrir la page de départ et connecter mon projet à Neon avec le MCP Neon. Si je dois choisir un compte ou donner un accord, dis-moi où cliquer. Donne-moi l’adresse de la page et confirme que l’appli peut joindre Neon.
```

**À toi de choisir** · Donne un nom à ton projet.

**Tu peux avancer quand** la page « Votre projet » s’ouvre et que l’agent a confirmé la connexion à Neon.

## 2. Partage une première dépense · 6 à 15 min

**Le skill à utiliser** · `definir-mvp`, déjà fourni dans le modèle. Il t’aide à choisir ce que ta première version doit permettre de faire.

**Prompt à saisir**

```text
Utilise definir-mvp pour m’aider à cadrer une appli de dépenses entre trois amis. Sur une seule page, je veux saisir ce qu’on a acheté, le prix et qui a payé. On partage à parts égales et chacun voit ce qu’il doit payer ou récupérer. Les dépenses restent dans Neon. Résume en quelques lignes ce qu’on pourra faire sur la page et donne-moi un exemple simple. Attends mon feu vert avant de construire.
```

**À toi de choisir** · La sortie, le nom de l’appli et les trois prénoms. Quand le résultat te convient, réponds **« Je valide, construis cette première version en suivant les consignes du modèle. »**

**À essayer** · Lina paie **30 €** pour trois personnes. Lina doit récupérer **20 €** et les deux autres doivent **10 €** chacune. Actualise la page et retrouve la dépense.

## 3. Ajoute un remboursement au hasard · 15 à 23 min

**Le skill à créer** · `cadrer-une-modification`. Utilise-le ici pour le remboursement au hasard. Tu pourras le ressortir plus tard, par exemple pour demander de corriger une dépense.

**Premier prompt**

```text
Crée un skill « cadrer-une-modification » que je pourrai réutiliser chaque fois que je voudrai faire évoluer une appli. Quand je l’utilise, demande-moi ce que je veux pouvoir faire et ce qui doit se passer si ça coince. Regarde ce qui existe déjà, puis résume en deux parties ce que les gens verront et ce que tu devras changer dans l’appli. Attends mon accord avant de faire la modification. Pour l’instant, enregistre la fiche avec les skills de ce projet et montre-la-moi.
```

**Deuxième prompt** · Reformule-le après avoir relu la fiche.

```text
Utilise cadrer-une-modification. Je veux un bouton qui choisit au hasard quelqu’un qui doit encore de l’argent. L’appli indique à qui cette personne peut rembourser et combien. Les soldes changent seulement quand je confirme. Si tout le monde est quitte, explique-le à l’écran. Dis-moi ce que tu as compris et ce que tu comptes changer.
```

**À toi de choisir** · Le nom du bouton et le message quand tout le monde est quitte. Quand la proposition te convient, réponds **« Je valide, ajoute-le. »**

**À essayer** · Avec l’exemple des **30 €**, si une personne rembourse **10 €** à Lina, elle ne doit plus rien et Lina doit encore récupérer **10 €**.

## 4. Partage ton appli · 23 à 30 min

**Le skill à utiliser** · `publish`. Il sert aussi bien à mettre ton appli en ligne pour la première fois qu’à mettre à jour le site déjà partagé.

**Prompt à saisir**

```text
Utilise publish pour la mise en ligne. Publie cette version dans mon espace public [colle ton lien] et mets-la en ligne avec le MCP Vercel. Relie la version en ligne à ma base Neon de l’atelier. Si tu as besoin que je valide quelque chose, indique-moi où cliquer. Si mon site existe déjà, mets-le à jour et garde son adresse. Suis l’état de la mise en ligne via le MCP Vercel et donne-moi l’adresse que je peux envoyer à un camarade.
```

**À toi de choisir** · Quel exemple tu veux montrer à ton camarade.

**À montrer** · Ouvre le lien dans une fenêtre privée. Ajoute une dépense fictive, puis montre le remboursement proposé. Dis en une phrase ce que ton skill t’a aidé à préciser. Si Vercel prépare encore la page à la fin du chrono, demande à l’agent de te montrer son état et garde le lien dès qu’il est prêt.
