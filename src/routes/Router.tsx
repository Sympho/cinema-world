import { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from 'App';
import NotFound from 'views/NotFound';
import { availableLangs, defaultLang } from 'shared/constants/locales';

import { publicRoutes, authRoutes, profileRoutes } from './routes';
import { IRoute, RouterProps } from './types';

const loginUrl = authRoutes[0].url || '';
const profUrl = profileRoutes[0].url || '';
const langPath = `:lang(${availableLangs.join('|')})`; //[a-z]{2}

const withLang = (path: string, lang?: string) => `/${lang || langPath}${path}`;

// We use function because component doesn't render in Switch
const renderRoutes = (
  routes: IRoute[],
  renderComponent: (Comp: FC) => any = (Comp: FC) => <Comp />,
) => {
  return routes.map(({ path, component: Component, ...params }) => (
    <Route key={withLang(path)} path={withLang(path)} {...params}>
      <App>{renderComponent(Component)}</App>
    </Route>
  ));
};

const Routes: FC<RouterProps> = ({ isAuth, lang }) => {
  return (
    <Switch>
      {renderRoutes(publicRoutes)}

      {renderRoutes(profileRoutes, Comp => {
        return isAuth ? <Comp /> : <Redirect to={withLang(loginUrl, lang)} />;
      })}
      {renderRoutes(authRoutes, Comp => {
        return !isAuth ? <Comp /> : <Redirect to={withLang(profUrl, lang)} />;
      })}

      <Route path={withLang('/*')} exact>
        <NotFound />
      </Route>
    </Switch>
  );
};

const Router: FC<RouterProps> = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={withLang('/')}
          render={({
            match: {
              params: { lang },
            },
          }) => <Routes isAuth={isAuth} lang={lang} />}
        />

        <Route path="/" exact>
          <Redirect to={`/${defaultLang}/`} />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
