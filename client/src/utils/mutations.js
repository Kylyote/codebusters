import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $firstName: String, $lastName: String, $email: String, $skills: String) {
  updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email) {
    _id
    firstName
    lastName
    email
  }
 }
`;

export const ADD_LANGUAGE = gql`
mutation addLanguage($id: ID, $languages: {language: String, skill: String}){
  addLanguage(id: $id, languages: $languages){
    id
    languages {
      language
      skill
    }
  }
}
`
 

