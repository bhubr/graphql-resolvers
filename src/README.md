# Resolvers GraphQL

Exemple avec une app d'interrogation de bibliothèques.

* TypeScript
* GraphQL avec Apollo Server
* Mongoose

## Installation

Pour faire tourner cette app localement, il faut disposer :

* D'un serveur MongoDB
* De Node.js (of course)

Après avoir cloné ce repo, installer les dépendances (installer au préalable Yarn, via `npm i -g yarn`, si ce n'est déjà fait) :

```
yarn
```

## Modèle de données

![Modele](https://github.com/bhubr/blob/graphql-resolvers/LibraryApp-Page-1.drawio.png)

Ce modèle est volontairement simplifié :

* Une bibliothèque peut contenir plusieurs livres, et un même livre peut se trouver dans différentes bibliothèques (relation _many to many_ entre `Library` et `Book`)
* Un auteur peut écrire plusieurs livres, et pour simplifier, on va considérer qu'un livre est écrit par un seul auteur (relation _one to many_ entre `Author` et `Book`).

## Anatomie des requêtes GraphQL

Avant de détailler le schéma GraphQL, voici à quoi va ressembler une requête (_query_) :

```graphql
query {
  libraries {
    name
    location {
      city
    }
    books {
      title
      author {
        name
      }
    }
  }
}
```

Et voici un exemple de réponse obtenue (ici, on n'a qu'une bibliothèque, qui contient 3 livres, tous d'auteurs différents).

```json
{
  "data": {
    "libraries": [
      {
        "name": "Médiathèque Marengo",
        "location": {
          "city": "Toulouse"
        },
        "books": [
          {
            "title": "Raison et Sentiments",
            "author": {
              "name": "Jane Austen"
            }
          },
          {
            "title": "Hygiène de l'assassin",
            "author": {
              "name": "Amélie Nothomb"
            }
          },
          {
            "title": "Les Voyages de Gulliver",
            "author": {
              "name": "Jonathan Swift"
            }
          }
        ]
      }
    ]
  }
}
```

