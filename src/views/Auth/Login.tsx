import { useContext, FC } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from 'shared/contexts/auth';

import Link from 'shared/components/Link';

const Login: FC = () => {
  const { setAuth } = useContext(AuthContext);
  const params = useParams();
  console.log('params', params);

  const login = () => {
    setAuth('user');
  };

  return (
    <div>
      <h1>Login</h1>
      <h3>Do you want log in? </h3>
      <p>
        <button onClick={login}>Yes, I do!</button>
      </p>
      <p>
        <Link to="/auth/register/">Register</Link>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Login;
