---
name: cadrer-automatisation
description: Définir le déclencheur, les effets et la reprise d’une automatisation avant de choisir une intégration. À utiliser pour une notification, un export ou une synchronisation.
---

## Décrire l’action et son résultat

Pars d’un cas concret et identifie le responsable, le déclencheur et les préconditions. Énumère les données indispensables, la source qui fait foi, la destination et ce que la personne verra une fois l’action terminée. Distingue les effets simulés des effets réels. Si un lien, un export ou un bouton manuel suffit au scénario, explicite quand en faire plus apporterait de la valeur.

Pour un service externe indispensable, précise le compte, les droits minimaux et le sens des échanges. Si l’action est planifiée, précise le fuseau, la fréquence et le traitement d’un déclenchement manqué. Pour une synchronisation, précise le sens et la règle applicable lorsque les deux côtés divergent.

## Prévoir les échecs qui changent l’usage

Décris une livraison répétée et une interruption après le début du traitement. Pour une action qui doit se produire une seule fois, définis l’identifiant métier stable qui permet de reconnaître la même opération. Si un service ne confirme pas le résultat, prévois comment vérifier qu’il a abouti avant de le relancer. Indique ce qui déclenche une nouvelle tentative, ce qui rend l’échec définitif et ce que le responsable peut reprendre manuellement.

## Livrer une fiche de décision

Donne le déclencheur, les données, les droits nécessaires, l’effet de succès et la conduite en cas de doublon ou d’échec. Illustre chaque issue importante avec des données fictives. Nomme les décisions à prendre avant un branchement réel. Le cadrage s’arrête à la fiche, sauf demande de mise en œuvre.

Exemple fictif · Pour un rappel de pique-nique, un export des contributions peut suffire à l’organisateur. Si l’envoi est automatisé, identifie le rappel par événement, destinataire et échéance. Si le service d’envoi ne confirme rien, montre un état « envoi à vérifier » avec une action de reprise après vérification.
