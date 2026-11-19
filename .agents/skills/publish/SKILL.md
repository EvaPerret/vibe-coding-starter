---
name: publish
description: Mettre un projet Next.js en ligne sur le compte Vercel de l’utilisateur ou publier une nouvelle version du même site. À utiliser après une demande de publication explicite, en privilégiant le MCP Vercel pour agir et vérifier le résultat.
---

## Identifier la destination

- Pars du projet déjà ouvert. Lis `AGENTS.md`. Identifie la mise à jour demandée, le dépôt personnel, la branche et le compte ou l’équipe Vercel. Pour le TP, le lien fourni par le participant désigne son dépôt public. Vérifie que les droits, le propriétaire et la visibilité correspondent à ce lien.
- Si le dépôt personnel existe, réutilise-le. Si l’utilisateur n’a pas encore préparé de destination, aide-le à créer un dépôt public pour le TP. Un clone local doit conserver son historique. Lorsque `origin` vise encore le starter, garde ce lien comme `upstream` et configure le dépôt personnel comme `origin`. Si `upstream` est déjà pris, vérifie sa destination avant de modifier les liens.
- Vérifie les changements à publier et leur destination exacte. Écarte les fichiers locaux qui contiennent des secrets ou des données réelles. Si le dépôt contient déjà un autre historique ou des modifications distantes, examine-les avant d’envoyer des changements. Préserve le travail existant.

## Première mise en ligne ou nouvelle version

| Situation constatée via le MCP Vercel | Action |
| --- | --- |
| Le dépôt appartient à un projet Vercel existant | Réutilise ce projet, son adresse et sa configuration. Identifie le déploiement correspondant à la nouvelle révision. |
| Aucun projet ne correspond au dépôt | Prépare un projet Next.js dans le compte de l’utilisateur, relié au dépôt personnel. Choisis la version Node prévue par le starter si la configuration le demande. |
| Un projet porte le même nom mais pointe ailleurs | Identifie le bon projet par le dépôt et l’équipe. Demande à l’utilisateur de trancher si les destinations restent ambiguës. |

Si l’application lit ou écrit dans Neon, identifie la branche qui doit servir les visiteurs. Pour le TP, une base dédiée à la démo avec des données fictives suffit. Vérifie que ses migrations versionnées ont été appliquées. Configure `DATABASE_URL` avec pooling dans l’environnement Vercel qui produira le lien. L’URL directe reste réservée aux migrations. Préserve les variables existantes qui ne sont pas concernées et évite de faire apparaître des valeurs secrètes dans la conversation.

- **Première publication.** Envoie les changements vers le dépôt personnel, puis utilise le MCP Vercel pour relier ce dépôt au projet et déclencher ou suivre la mise en ligne. Pour le TP, vise une adresse partageable que les camarades peuvent ouvrir. Utilise la branche de production du projet de démonstration si les liens de prévisualisation demandent une connexion.
- **Mise à jour.** Identifie la branche déjà déployée sur l’adresse à mettre à jour. Pousse les changements autorisés vers le dépôt personnel. Si le déploiement Git démarre automatiquement, suis-le via le MCP. Si aucun déploiement ne démarre, vérifie le lien avec GitHub et déclenche-le via le MCP quand l’action existe. Réutilise le projet et le lien déjà partagés.
- Si la connexion du participant manque d’une action d’écriture, ouvre la procédure officielle dans Vercel pour cette action. Reprends avec le MCP pour retrouver le projet, la nouvelle version et l’état du déploiement. Si une variable a été ajoutée après le début d’une mise en ligne, relance la version concernée avec la configuration à jour.

## Diagnostiquer ce que voit l’utilisateur

| Résultat constaté | Quoi regarder |
| --- | --- |
| Aucun nouveau déploiement après l’envoi | Le dépôt et la branche reliés au projet Vercel, puis le droit de créer un déploiement. [Outils du MCP Vercel](https://vercel.com/docs/agent-resources/vercel-mcp/tools) |
| La page s’ouvre, mais les dépenses échouent | Les journaux d’exécution et la branche Neon visée par l’environnement. Vérifie la configuration et l’application des migrations. |
| Le lien demande un compte Vercel | Vérifie que l’adresse et le niveau d’accès permettent le partage prévu. Pour le TP, donne une adresse publique du projet de démo. |

## Vérifier et restituer

1. Fais correspondre le déploiement à la révision voulue. Attends son état prêt. Si la compilation échoue, lis le premier message exploitable dans les journaux via le MCP.
2. Ouvre l’adresse attendue et vérifie le parcours visible. Si le lien est censé être public, vérifie depuis une session sans compte Vercel. Pour une fonction reliée à Neon, vérifie qu’une donnée fictive enregistrée depuis cette version persiste après actualisation.
3. Donne l’adresse à partager et le résultat observé. Si l’adresse est protégée ou que la mise en ligne est toujours en cours, indique l’état réel et la prochaine action utile.

Exemple · « J’ai publié la nouvelle version sur le site existant. Ouvre le même lien. J’ai ajouté une dépense fictive et elle était toujours présente après actualisation. »
