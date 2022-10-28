import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { NextApiRequest, NextApiResponse } from 'next';
import { typeDefs } from '../../server/typeDefs';
import { resolvers } from '../../server/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await server.createHandler({
    path: '/api/graphql'
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
