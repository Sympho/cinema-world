import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashBoard from '../modules/dashboard';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={DashBoard} exact />
  </Switch>
);

export default Routes;
