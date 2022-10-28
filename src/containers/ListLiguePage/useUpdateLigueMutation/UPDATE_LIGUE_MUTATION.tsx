import { gql } from 'apollo-server-micro';

export const UPDATE_LIGUE_MUTATION = gql`
  mutation ($_id: ID!, $title: String!, $description: String!) {
    updateLigue(title: $title, description: $description, _id: $_id) {
      _id
    }
  }
`;
