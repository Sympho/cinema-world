import { createContext } from 'react';

export const AuthContext = createContext<{
  isAuth: any;
  setAuth: any;
}>({
  isAuth: false,
  setAuth: () => {},
});
