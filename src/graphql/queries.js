import { gql } from "@apollo/client";

export const ALL_TRANSACTIONS = gql`
  query MyQuery($userId: String!) {
    transactions(where: { user_id: { _eq: $userId } }) {
      category_name {
        name
        id
      }
      date
      id
      sum
    }
  }
`;

export const USER = gql`
  query ($userId: String!) {
    profiles(where: { id: { _eq: $userId } }) {
      id
      index
      name
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;
