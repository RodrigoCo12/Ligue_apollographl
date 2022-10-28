import { gql } from 'apollo-server-micro';

export const DELETE_LIGUE_MUTATION = gql`
  mutation ($_id: ID!) {
    deleteLigue(_id: $_id) {
      _id
    }
  }
`;
