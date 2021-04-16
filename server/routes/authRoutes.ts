import { RouterContext } from '../deps.ts';
import { Route } from './types.ts';

export const authRoutes: Route[] = [
  {
    method: 'get',
    path: '/auth/login',
    action: ({ response }: RouterContext) => {
      response.body = {
        message: 'login',
      };
    },
  },
  {
    method: 'get',
    path: '/auth/register',
    action: ({ response }: RouterContext) => {
      response.body = {
        message: 'register',
      };
    },
  },
  {
    method: 'get',
    path: '/auth/forgot-password',
    action: ({ response }: RouterContext) => {
      response.body = {
        message: 'forgot-password',
      };
    },
  },
];
