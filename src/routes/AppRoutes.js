import React from 'react';
import { Route, Switch } from 'react-router';

import Home from 'features/home/Home';
import Favorites from 'features/favorites/Favorites';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
