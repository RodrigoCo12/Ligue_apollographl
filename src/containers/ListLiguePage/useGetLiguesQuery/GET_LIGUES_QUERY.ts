import { gql } from 'apollo-server-micro';

export const GET_LIGUES_QUERY = gql`
  query {
    getLigues {
      title
      description
      _id
    }
  }
`;
