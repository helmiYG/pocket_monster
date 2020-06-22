import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import * as Routes from 'config/routes'
import { Home } from 'container/pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          exac
          component={Home}
          path={Routes.Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
