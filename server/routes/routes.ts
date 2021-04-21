import { RouterContext } from '../deps.ts';
import UserController from '../controllers/UserController.ts';
import { Route } from './types.ts';
import { authRoutes } from './authRoutes.ts';

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    action: ({ response }: RouterContext) => {
      response.body = 'Hello world!';
    },
  },
  {
    method: 'get',
    path: '/about',
    action: ({ response }: RouterContext) => {
      response.body = 'Hello world!';
    },
  },
  ...authRoutes,
];
