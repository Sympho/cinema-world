import { StrictMode, useState, FC } from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';

import Router from 'routes/Router';
import { AuthContext } from 'shared/contexts/auth';

import 'assets/css/index.css';

const Root: FC = () => {
  const [isAuth, setAuth] = useState<string | boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <Router isAuth={isAuth} />
    </AuthContext.Provider>
  );
};

render(
  <StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);
