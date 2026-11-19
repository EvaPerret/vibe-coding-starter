---
name: definir-direction-visuelle
description: Définir un système visuel justifié par un écran clé et son contexte d’usage. À utiliser pour choisir la hiérarchie, les couleurs, la typographie et les composants avant de les appliquer.
---

## Traduire l’usage en choix visuels

Lis l’écran clé et les références fournies. Décris ce que l’on doit repérer d’abord, ce que l’on peut lire ensuite et ce qui ne doit s’afficher qu’en cas de besoin. Si des références existent, relève les propriétés utiles au projet, comme la densité d’une liste ou la visibilité d’un statut. Respecte l’identité existante quand elle est fournie.

- **Couleurs.** Donne des valeurs et leurs rôles, notamment fond, surface, texte, action et états concernés. Relie chaque couleur de texte ou de bouton à son fond. Contrôle le contraste des paires proposées en tenant compte de la taille du texte. Ajoute un libellé lorsque la couleur porte une information.
- **Typographie.** Donne une hiérarchie exploitable sur mobile avec tailles, graisses et interlignes pour les niveaux présents. Garde la police système du starter si rien ne justifie de la remplacer.
- **Composants.** Précise la structure du composant clé, son libellé et ses états utiles. Vérifie que l’ordre de lecture et la navigation clavier suivent l’ordre du parcours. Réutilise les styles de focus. Propose une bibliothèque seulement pour un besoin identifié que les primitives du projet couvrent mal.

## Livrer une direction à appliquer

Rends **Tes choix visuels** sous la forme d’une proposition pour l’écran clé. Relie chaque décision à un effet attendu sur la lecture ou l’action. Si une implémentation est demandée, réutilise ou étends les tokens de `src/app/globals.css` et les classes Tailwind. Réserve les tokens aux valeurs qui ont un rôle partagé.

Exemple fictif · Sur la liste du pique-nique, les noms des éléments dominent la ligne. La couleur d’accent distingue « Je m’en charge ». L’état « Pris par Lina » tient dans le même espace que l’action et reste compréhensible en niveaux de gris.
