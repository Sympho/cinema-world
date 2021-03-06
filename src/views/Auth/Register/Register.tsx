import { useState, FC, SyntheticEvent, ChangeEvent } from 'react';

import { auth, RegisterUserFields } from 'api';

import useLocalStorage from 'shared/hooks/useLocalStorage';
import { KEY_ACCESS_TOKEN } from 'shared/constants/auth';

import Page from 'shared/components/Page';
import Link from 'shared/components/Link';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

const Register: FC = () => {
  const [accessToken, setAccessToken] = useLocalStorage<string>(
    KEY_ACCESS_TOKEN,
    '',
  );

  console.log('accessToken', accessToken);

  const [isLoading, setIsLoading] = useState(false);

  const submit = (event: SyntheticEvent, formData: FormData) => {
    event.preventDefault();
    setIsLoading(true);

    const data: RegisterUserFields = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    auth
      .register(data)
      .then(({ token }) => {
        setAccessToken(token || '');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const change = (value: any, event: ChangeEvent, name?: string) => {
    console.log(value);
  };

  return (
    <Page>
      <h1>Register</h1>

      <Form onSubmit={submit}>
        <Input
          onChange={change}
          name="firstName"
          label="First name"
          placeholder="First name"
        />
        <Input name="lastName" label="Last name" placeholder="Last name" />
        <Input name="email" label="Email" placeholder="Email" type="email" />
        <Input name="password" label="Password" placeholder="Password" />

        <Button isLoading={isLoading}>Register</Button>
      </Form>

      <p>
        <Link to="/auth/login/">login</Link>
        <Link to="/">Home</Link>
      </p>
    </Page>
  );
};

export default Register;
