import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashBoard from '../modules/dashboard';
import Home from '../modules/home';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={DashBoard} exact />
    <Route path="/" component={Home} exact />
  </Switch>
);

export default Routes;
