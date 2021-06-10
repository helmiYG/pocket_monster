import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import * as Routes from 'config/routes'
import { Home, About, Pokemons } from 'container/pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exact
          component={Home}
          path={Routes.Home}
        />
        <Route 
          exact
          component={About}
          path={Routes.About}
        />
        <Route 
          exact
          component={Pokemons}
          path={Routes.Pokemons}
        />
      </Switch>
    </Router>
  );
}

export default App;
