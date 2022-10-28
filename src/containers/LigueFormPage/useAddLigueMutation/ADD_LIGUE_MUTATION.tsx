import { gql } from 'apollo-server-micro';

export const ADD_LIGUE_MUTATION = gql`
  mutation ($title: String!, $description: String!) {
    addLigue(title: $title, description: $description) {
      _id
    }
  }
`;
