import { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from 'views/NotFound';
import { availableLangs, defaultLang } from 'shared/constants/locales';
import { publicRoutes } from './publicRoutes';

const langPath = `:lang(${availableLangs.join('|')})`; //[a-z]{2}

interface RouterProps {
  app: FC;
}

const Router: FC<RouterProps> = ({ app: App }) => (
  <BrowserRouter>
    <Switch>
      <Route path={`/${langPath}/`}>
        <Switch>
          {publicRoutes.map(({ path, component: Component, ...params }) => (
            <Route
              key={`/${langPath}${path}`}
              path={`/${langPath}${path}`}
              {...params}
            >
              <App>
                <Component />
              </App>
            </Route>
          ))}

          <Route path={`/${langPath}/*`} exact>
            {/*<Redirect to={`/${defaultLang}/`} />*/}
            <NotFound />
          </Route>
        </Switch>
      </Route>
      <Route path="/" exact>
        <Redirect to={`/${defaultLang}/`} />
      </Route>

      <Route path="*">
        {/*<Redirect to={`/${defaultLang}/`} />*/}
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
