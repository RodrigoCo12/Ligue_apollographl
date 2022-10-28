import '../styles/globals.css';
import { useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
// import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';
import { getApolloClient } from '../src/module/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useMemo(() => getApolloClient(), []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
