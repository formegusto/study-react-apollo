import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Continents from './container/Continents';
import client from './lib/ApolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Client</h1>
      <Continents />
    </ApolloProvider>
  );
}

export default App;
