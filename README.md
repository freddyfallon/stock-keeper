# Stock-keeper

[![Greenkeeper badge](https://badges.greenkeeper.io/freddyfallon/stock-keeper.svg)](https://greenkeeper.io/)

A service that lets you view and add items into a postgres database using a GraphQL API.
📦 🥚 🍏 🍎 🍍 🥛 🥔 🥦 🍖

## Getting it running

A prerequisite is that you need to have Docker installed and running.

- Clone the repo
- `cd` into the directory
- run `yarn` or `npm install`, whichever you prefer
- Then run `docker-compose up --build`

You will then be able to run different GraphQL queries and mutations in the Playground at: [http://localhost:3000/](http://localhost:3000/)

For example, if you want to get all items, the query will look like this:

```
query {
  getAll {
    item,
    quantity
  }
}
```

Or, if you want to add an item, the mutation will look like this:

```
mutation {
  add(item: "cheese", quantity: 15) {
    id,
    item
  }
}
```

## Running the tests

At the moment, there are just a couple of unit tests run through `npm test` or `yarn test`, depending on which package manager you use.
