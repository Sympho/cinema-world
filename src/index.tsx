import { StrictMode, useState, FC } from 'react';
import { render } from 'react-dom';
import 'assets/css/index.css';
import Router from 'routes/Router';
import { AuthContext } from 'shared/contexts/auth';

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
    <Root />
  </StrictMode>,
  document.getElementById('root'),
);
