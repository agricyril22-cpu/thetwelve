# Gestion hôtelière (application multi-usages)

Une application web de gestion pour :

- les **hôtels** ;
- les **auberges** (lits en dortoir et chambres privées) ;
- les **chambres et appartements meublés** (séjours à la nuit, à la semaine ou au mois) ;
- les **établissements mixtes**.

Tout tient dans un seul fichier, `index.html`. Il n'y a ni serveur ni installation : on ouvre le fichier dans un navigateur, ou on le publie avec GitHub Pages (`…/hotel/`).

## Modules

| Module | Ce qu'il fait |
|---|---|
| **Aujourd'hui** | Taux d'occupation du soir, arrivées et départs (avec les retards), clients en séjour, unités libres, encaissements du jour, soldes dus |
| **Planning** | Grille des unités sur 7, 14 ou 31 jours. On clique sur une case vide pour réserver |
| **Réservations** | Recherche et filtres par statut ou par période, export CSV |
| **Fiche de réservation** | Note du client (folio) : hébergement, taxe de séjour, consommations. Paiements et acomptes (espèces, Mobile Money, carte, virement, chèque), remboursements. Arrivée, départ, option, annulation, non présenté. Facture et fiche de police à imprimer |
| **Clients** | Fiche client avec pièce d'identité, nationalité et préférences, historique des séjours et montant dépensé |
| **Hébergements** | Chambres, lits, studios ou appartements, avec tarifs nuit / semaine / mois, capacité, état du ménage, mise hors service |
| **Ménage & maintenance** | Tableau d'état des unités, tâches avec priorité et responsable. Une tâche de ménage est créée à chaque départ |
| **Services & ventes** | Catalogue (restaurant, bar, petit-déjeuner, blanchisserie, transport, charges…). Une vente est soit portée sur la note d'un client en séjour, soit encaissée directement (client de passage) |
| **Caisse** | Toutes les entrées (séjours et ventes) et les dépenses, totaux par mode de paiement, export CSV |
| **Rapports** | Taux d'occupation, prix moyen par nuit (ADR), revenu par unité disponible (RevPAR), CA hébergement et services, taxe de séjour, résultats par type d'unité, par source et par catégorie de dépense |
| **Paramètres** | Établissement, devise, taxe de séjour, TVA, heures d'arrivée et de départ, thème, sauvegarde et restauration |

## Calcul de l'hébergement

Le montant est calculé automatiquement selon la durée du séjour :

- **28 nuits ou plus**, si l'unité a un tarif mensuel : tarif mensuel ÷ 30 × nombre de nuits ;
- **7 nuits ou plus**, si l'unité a un tarif hebdomadaire : tarif hebdomadaire ÷ 7 × nombre de nuits ;
- **sinon** : tarif nuitée × nombre de nuits.

Un tarif négocié peut être saisi à la main : il n'est alors plus recalculé.

## Données

Les données sont enregistrées dans le navigateur (`localStorage`), sur l'appareil utilisé. Pensez à exporter régulièrement une sauvegarde depuis **Paramètres → Sauvegarde des données**. Ce fichier JSON sert aussi à transférer les données vers un autre appareil.
