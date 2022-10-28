import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Ligue {
    _id: ID
    title: String
    description: String
  }
  type Query {
    getLigues: [Ligue]
  }
  type Mutation {
    addLigue(title: String!, description: String!): Ligue
  }
  type Mutation {
    updateLigue(_id: ID!, title: String!, description: String!): Ligue
  }
  type Mutation {
    deleteLigue(_id: ID!): Ligue
  }
`;
