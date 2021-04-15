import { RouterContext } from '../deps.ts';
import UserController from '../controllers/UserController.ts';
import { Route } from './types.ts';

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
    path: '/users',
    action: UserController.getList,
  },
  {
    method: 'get',
    path: '/users/:id',
    action: UserController.getItem,
  },
  {
    method: 'post',
    path: '/users/create',
    action: UserController.createItem,
  },
  {
    method: 'get',
    path: '/about',
    action: function ({ response }: RouterContext) {
      response.body = 'Hello about!';
    },
  },
];
