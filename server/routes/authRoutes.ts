import AuthController from '../controllers/AuthController.ts';
import { Route } from './types.ts';

export const authRoutes: Route[] = [
  {
    method: 'get',
    path: '/auth/login',
    action: AuthController.login,
  },
  {
    method: 'get',
    path: '/auth/register',
    action: AuthController.register,
  },
  {
    method: 'get',
    path: '/auth/forgot-password',
    action: AuthController.forgotPassword,
  },
];
