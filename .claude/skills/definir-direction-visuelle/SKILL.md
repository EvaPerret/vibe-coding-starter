---
name: definir-direction-visuelle
description: Choisir une direction visuelle exploitable à partir d’un écran et de sa tâche principale. À utiliser pour fixer la hiérarchie, la palette et les composants qui serviront la maquette.
---

## Prioriser la lecture

Pars d’un écran connu. Identifie ce que la personne doit repérer en premier, le détail qui l’aide à décider et les informations qui peuvent attendre. Si l’utilisateur a donné des références, nomme ce que tu réutilises de leur approche, comme un contraste, une densité ou une hiérarchie. Respecte l’identité fournie.

## Produire des décisions applicables

| Décision | Ce qu’elle doit permettre |
| --- | --- |
| **Couleurs** | Donne des valeurs pour les rôles utilisés et précise les paires texte et fond. Les états importants ont aussi un libellé ou une icône. Vérifie le contraste des textes et de l’action principale sur leur fond. |
| **Typographie** | Donne les tailles, graisses et interlignes des niveaux effectivement présents. Observe les montants et les libellés qui peuvent se retrouver côte à côte sur mobile. |
| **Disposition** | Fais ressortir l’action sans réduire l’accès aux informations de décision. Précise l’ordre de lecture sur un écran étroit et le comportement d’un libellé long. |
| **Composants** | Pour l’élément clé, indique les parties, le libellé et les états requis. Décris le focus visible et un retour compréhensible après action. |

Pour une proposition, livre une seule direction cohérente, avec une raison par choix important. Si l’utilisateur demande l’implémentation, réutilise les tokens de `src/app/globals.css`, Tailwind et les composants existants. Ajoute une valeur commune lorsqu’elle sert plusieurs éléments.

## Rendre la direction

Rends **Tes choix visuels**, sous forme d’une palette par rôle, d’une hiérarchie et d’un exemple d’écran annoté. Indique le détail que tu veux que la personne comprenne au premier regard.

Exemple · Dans un écran de dépenses, un groupe de deux ou trois lignes « Lina récupère 20 € » et « Sam doit 10 € » peut apparaître avant l’historique. Utilise la couleur d’accent pour « Ajouter une dépense ». Les mots « récupère » et « doit » portent le sens des soldes, y compris quand on ne distingue pas leurs couleurs.
