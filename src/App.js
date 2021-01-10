import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePersonContainer from './container/CreatePersonContainer';
import PersonsContainer from './container/PersonsContainer';

function App() {
  return (
    <>
      <h1>React + Apollo Client</h1>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={(props) => PersonsContainer(props)} exact/>
          <Route path={"/create"} component={(props) => CreatePersonContainer(props)} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
