import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreatePersonContainer from './container/CreatePersonContainer';
import PersonsContainer from './container/PersonsContainer';

function App() {
  return (
    <>
      <h1>React + Apollo Client</h1>
      <BrowserRouter>
        <Route path={"/"} component={() => PersonsContainer()} exact/>
        <Route path={"/create"} component={() => CreatePersonContainer()} />
      </BrowserRouter>
    </>
  );
}

export default App;
