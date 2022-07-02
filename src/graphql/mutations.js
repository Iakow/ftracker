import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addNewUer($userId: String!, $name: String!) {
    insert_profiles_one(object: { id: $userId, name: $name }) {
      name
      id
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation MyMutation($sum: Int!, $user_id: String, $category: Int!) {
    insert_transactions_one(
      object: { user_id: $user_id, sum: $sum, category: $category }
    ) {
      category_name {
        name
      }
      date
      id
      sum
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation ($id: Int, $category: Int, $sum: Int, $date: timestamp) {
    update_transactions(
      where: { id: { _eq: $id } }
      _set: { category: $category, sum: $sum, date: $date }
    ) {
      returning {
        category
        date
        sum
        category_name {
          id
          name
        }
      }
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation ($id: Int) {
    delete_transactions(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
