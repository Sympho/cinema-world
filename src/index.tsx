import { StrictMode, FC } from 'react';
import { render } from 'react-dom';
import { RecoilRoot, useRecoilState } from 'recoil';

import Router from 'routes/Router';
import { AuthContext } from 'shared/contexts/auth';
import { authState } from 'store/atoms';

import 'assets/css/index.css';

const Root: FC = () => {
  const [isAuth, setAuth] = useRecoilState<boolean>(authState);
  // const [loggedUser, setLoggedUser] = useRecoilState(loggedUserData);

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
