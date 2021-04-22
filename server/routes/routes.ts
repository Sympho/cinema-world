import { RouterContext } from '../deps.ts';
import { Route } from './types.ts';
import { authRoutes } from './authRoutes.ts';
import { movieRoutes } from './movieRoutes.ts';

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
  ...movieRoutes,
  ...authRoutes,
];
