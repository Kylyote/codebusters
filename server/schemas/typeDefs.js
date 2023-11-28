const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Language {
    _id: ID
    language: String
    skill: String
  }

  type Service {
    _id: ID
    service: String
    skill: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    subscription: String
    languages: [Language]
    orders: [Order]
    services: [Service]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type id {
    _id: ID
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user(_id: ID): User
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addLanguage(id: ID!, languages: [LanguageInput]): User
    addOrder(products: [ID]!): Order
    updateUser(_id:ID firstName: String, lastName: String, email: String,skills: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

  input LanguageInput {
    language: String!
    skill: String!
  }
`;

module.exports = typeDefs;
