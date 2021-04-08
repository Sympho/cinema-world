import { FC } from 'react';
import Link from 'shared/components/Link';

const Login: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        <Link to="/register/">login</Link>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Login;
