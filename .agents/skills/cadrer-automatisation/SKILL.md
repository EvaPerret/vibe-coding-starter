---
name: cadrer-automatisation
description: Décrire le déclencheur, les effets et la reprise d’une automatisation avant de choisir ou de brancher une intégration. À utiliser pour une notification, un export ou une synchronisation.
---

## Définir une action complète

Note l’événement de départ, la personne responsable, les préconditions et ce que la personne verra à la fin. Identifie la source qui fait foi, les données nécessaires et la destination. Évalue si une action manuelle, un lien ou un export suffit déjà à terminer le parcours.

Si un service externe est nécessaire, dis quel compte le contrôle et avec quels droits. Si l’action est planifiée, précise le fuseau et le comportement quand une exécution est manquée. Si l’action synchronise deux sources, précise le sens des échanges et la façon de résoudre une divergence.

## Décrire ce qui peut mal se passer

| Situation | Décision à prendre |
| --- | --- |
| Le même événement est reçu deux fois | Avec quel identifiant reconnaît-on qu’il s’agit de la même opération ? Quel résultat reste à l’écran ? |
| Le service ne répond plus après le départ | Comment savoir si l’action a abouti avant de la relancer ? Qui confirme ou reprend ? |
| Une donnée indispensable manque | Quelle information demander et comment préserver ce qui a déjà été préparé ? |
| Le service est indisponible | Quel résultat afficher, quand réessayer et à quel moment passer à la reprise manuelle ? |

Adapte ce niveau de détail au risque. Une exportation relançable et un envoi de message à plusieurs personnes ont des conséquences différentes. Réduis les droits à l’accès nécessaire et indique où s’arrête la démonstration.

## Livrer la fiche de décision

Rends le déclencheur, les données et la destination, le succès visible, le principal incident et la reprise. Indique ce qui doit encore être décidé avant un branchement réel. Si tu illustres le flux, utilise des données fictives. Passe à l’implémentation seulement si elle fait partie de la demande.

Exemple · Pour un groupe de dépenses, un récapitulatif qu’une personne peut copier suffit parfois. Si l’envoi d’un rappel devient nécessaire, identifie un rappel par groupe, personne et échéance. Si le service d’envoi ne confirme rien, montre « Envoi à vérifier » avant de permettre une nouvelle tentative.
