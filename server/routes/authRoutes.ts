import AuthController from '../controllers/AuthController.ts';
import { Route } from './types.ts';

export const authRoutes: Route[] = [
  {
    method: 'post',
    path: '/auth/login',
    action: AuthController.login,
  },
  {
    method: 'post',
    path: '/auth/register',
    action: AuthController.register,
  },
  {
    method: 'post',
    path: '/auth/forgot-password',
    action: AuthController.forgotPassword,
  },
];
