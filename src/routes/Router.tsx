import { Suspense, lazy, FC, ReactNode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from 'App';
import NotFound from 'views/NotFound';
import { AVAILABLE_LANGS, DEFAULT_LANG } from 'shared/constants/locales';

import { publicRoutes, authRoutes, profileRoutes } from './routes';
import { IRoute, RouterProps } from './types';

const loginUrl = authRoutes[0].url || '';
const profUrl = profileRoutes[0].url || '';
const langPath = `:lang(${AVAILABLE_LANGS.join('|')})`; //[a-z]{2}

const withLang = (path: string, lang?: string) => `/${lang || langPath}${path}`;

// We use function because component doesn't render in Switch
const renderRoutes = (
  routes: IRoute[],
  renderComponent: (Comp: FC) => ReactNode = (Comp: FC) => <Comp />,
) => {
  return routes.map(({ path, componentPath, ...params }) => (
    <Route key={withLang(path)} path={withLang(path)} {...params}>
      <App>{renderComponent(lazy(() => import(`../${componentPath}`)))}</App>
    </Route>
  ));
};

const Routes: FC<RouterProps> = ({ isAuth, lang }) => {
  return (
    <Switch>
      <Suspense fallback={<span>Loader...</span>}>
        {renderRoutes(publicRoutes)}
        {renderRoutes(profileRoutes, Comp => {
          return isAuth ? <Comp /> : <Redirect to={withLang(loginUrl, lang)} />;
        })}
        {renderRoutes(authRoutes, Comp => {
          return !isAuth ? <Comp /> : <Redirect to={withLang(profUrl, lang)} />;
        })}
        TODO Need to resolve this
        {/*<Route path={withLang('/*')} exact>*/}
        {/*  <NotFound />*/}
        {/*</Route>*/}
      </Suspense>
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
          <Redirect to={`/${DEFAULT_LANG}/`} />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
