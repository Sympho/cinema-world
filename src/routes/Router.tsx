import { ReactNode, FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DashBoard from 'views/Dashboard';
import Home from 'views/Home';

interface RouterProps {
  app: ReactNode;
}

const Router: FC<RouterProps> = ({ app: App }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={DashBoard} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
