# AgriBio Rabbit Farm Invest

Application de gestion des projets d'investissement agropastoraux (cunicole, avicole, achatiniculture, pisciculture, porcin, apiculture, agricole, maraîchage…) et des investisseurs.

Application **autonome** : tout est dans ce dossier (page, icônes, manifeste, service worker). Elle ne dépend d'aucune autre application et peut être hébergée seule, à la racine de n'importe quel site HTTPS.

## Installation sur ordinateur, tablette et smartphone
Application web installable (PWA) : pas de magasin d'applications, l'installation se fait depuis le navigateur. Le bouton **Installer l'application** (menu latéral ou Paramètres) lance l'installation ou affiche la marche à suivre selon l'appareil :
- **Ordinateur** (Windows, Mac, Linux) — Chrome / Edge : icône *Installer* dans la barre d'adresse ; Safari sur Mac : *Fichier → Ajouter au Dock*.
- **Android** (smartphone, tablette) — Chrome : menu ⋮ → *Installer l'application*.
- **iPhone / iPad** — Safari : *Partager → Sur l'écran d'accueil*.

Une fois installée : icône dédiée, fenêtre plein écran, raccourcis (nouvel investissement, répartition), fonctionnement hors ligne.

## Mettre l'application en ligne à sa propre adresse
1. Créer un dépôt GitHub dédié (par ex. `agribio-invest`).
2. Y copier le **contenu** de ce dossier à la racine (avec le fichier `.nojekyll`).
3. Activer *Settings → Pages → Deploy from branch → main / (root)*.
4. L'application est disponible sur `https://<compte>.github.io/agribio-invest/`, prête à être installée.

## Fonctions
- **Projets** : filière, site, responsable, objectif de financement, ticket minimum, rendement prévisionnel, part des bénéfices revenant aux investisseurs, frais de gestion, statut.
- **Investisseurs** : fiche complète, coordonnées de paiement, relevé d'investissement imprimable.
- **Investissements** : apports et retraits de capital datés (montant, mode de paiement, référence).
- **Recettes & dépenses** par projet, par catégorie, graphiques sur 12 mois.
- **Répartition des bénéfices** : bénéfice net = recettes − dépenses de la période ; on retire les frais de gestion ; la part investisseurs est partagée au prorata du capital (ou du capital × durée de présence). Arrondis au plus fort reste : le total distribué est exact. Suivi des paiements (versé ou réinvesti).
- **Simulateur** de gains et **rapports** (par projet, filière, année), exports CSV et sauvegarde JSON.
- Code d'accès optionnel, thème clair/sombre.

Les données sont stockées dans le navigateur de l'appareil : exportez régulièrement une sauvegarde (Paramètres).
