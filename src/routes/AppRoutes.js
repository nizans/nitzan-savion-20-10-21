import React from "react";
import { Route, Switch } from "react-router";

import Home from "features/home/Home";
import Favorites from "features/favorites/Favorites";

export const ROUTE_PREFIX = "/weather-app/";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_PREFIX}>
        <Home />
      </Route>
      <Route path={ROUTE_PREFIX + "favorites"}>
        <Favorites />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
