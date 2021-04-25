import { httpClient } from 'api';

export type RegisterUserFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const register = async (data: RegisterUserFields) => {
  const res = await httpClient.post('/auth/register', data);
  return res.data;
};
