import { FC } from 'react';
import Link from 'shared/components/Link';

const Register: FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        <Link to="/auth/login/">login</Link>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Register;
