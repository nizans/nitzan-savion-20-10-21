import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Home from "features/home/Home";
import Favorites from "features/favorites/Favorites";

export const ROUTE_PREFIX = "/nitzan-savion-20-10-21/";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_PREFIX}>
        <Home />
      </Route>
      <Route path={ROUTE_PREFIX + "favorites"}>
        <Favorites />
      </Route>
      <Redirect from="*" to={ROUTE_PREFIX} />
    </Switch>
  );
};

export default AppRoutes;
