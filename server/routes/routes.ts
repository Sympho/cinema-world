import { RouterContext } from '../deps.ts';
import AuthController from '../controllers/AuthController.ts';

export interface Route {
  method: 'get' | 'patch' | 'post' | 'put' | 'delete';
  path: string;
  action: (ctx: RouterContext) => void;
}

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    action: function ({ response }: RouterContext) {
      response.body = 'Hello world!';
    },
  },
  {
    method: 'get',
    path: '/users',
    action: AuthController.getList,
  },
  {
    method: 'get',
    path: '/users/:id',
    action: AuthController.getItem,
  },
  {
    method: 'post',
    path: '/users/create',
    action: AuthController.createItem,
  },
  {
    method: 'get',
    path: '/about',
    action: function ({ response }: RouterContext) {
      response.body = 'Hello about!';
    },
  },
];
