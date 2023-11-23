
import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
     username
     subscription
     languages {
       _id
       language
       skill
     }
     services {
        _id
        service
        skill
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
 query GetAllUsers {
   users {
     _id
     firstName
     lastName
     email
     username
     subscription
     languages {
       _id
       language
       skill
     }
     services {
        _id
        service
        skill
      }
     orders {
       _id
       purchaseDate
       products {
         _id
         name
         description
         price
         quantity
         image
         category {
           _id
         }
       }
     }
   }
 }
`;

export const QUERY_USER_BY_ID = gql`
 query getUserById($id: ID!) {
   user(_id: $id) {
     _id
     firstName
     lastName
     email
     username
     subscription
     languages {
       _id
       language
       skill
     }
     services {
       _id
       service
       skill
     }
     orders {
       _id
       purchaseDate
       products {
         _id
         name
         description
         price
         quantity
         image
       }
     }
   }
 }
`;
