// Order matters for query and mutation. Must match in resolvers.js.
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

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    reviewRating: Int
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
    avgScore: Float
    reviews: [Review]
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

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    reviewRating: Int
  }
 
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user(_id: ID): User
    users: [User]
    reviews(_id: ID): [Review]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addLanguage(id: ID!, languages: [LanguageInput]): User
    addOrder(products: [ID]!): Order
    updateUser(_id:ID firstName: String, lastName: String, email: String,skills: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addReview(_id: ID!, reviews: [ReviewInput]): User
    updateScore(_id: ID!, avgScore: Float!): User
  }

  input LanguageInput {
    language: String!
    skill: String!
  }

  input ReviewInput {
    reviewText: String!
    reviewRating: Int!
  }
`;

module.exports = typeDefs;
