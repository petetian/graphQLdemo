# graphQLdemo

This is a NodeJS project of GraphQL demo.

## Start the application
```
npm start
```

## Test in browser
Open a browser, in the address bar enter
```
localhost:8080/graphql
```

### Create a product example
```
mutation {
  createProduct(input: {
    name: "Tesla Y",
    description: "New EV",
    price: 52823.12,
    soldout: ONSTOCK,
    inventory: 4,
    stores: [
      {
        id: "1",
        store: "Seattle"
      },
      {
        id: "2",
        store: "Olympia"
      }
    ]
  }) {
   id
   name
   price
   inventory
  }
}
```

### Query

#### Get all
```
query {
  getAllProducts {
    id
    name
    price
  } 
}
```
#### Get a product
```
query {
  getProduct(id: <replace with ID string>) {
    name
    inventory
  }
}
```