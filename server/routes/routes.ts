import { RouterContext, HTTPMethods } from '../deps.ts';

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
    path: '/about',
    action: function ({ response }: RouterContext) {
      response.body = 'Hello about!';
    },
  },
  {
    method: 'get',
    path: '/posts',
    action: ({ response }: RouterContext) => {
      response.body = [];
    },
  },
  {
    method: 'get',
    path: '/posts/:id',
    action: ({ params: { id }, response }: RouterContext) => {
      response.body = {
        id,
      };
    },
  },
];
