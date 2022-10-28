import { ApolloClient, ApolloClientOptions, InMemoryCache } from '@apollo/client';

const isServer = typeof window === 'undefined';

export function getApolloClient(options?: ApolloClientOptions<any>) {
  const client = new ApolloClient({
    ...(options || {}),
    uri: '/api/graphql',
    cache: new InMemoryCache(),
    ssrMode: isServer
  });

  return client;
}
