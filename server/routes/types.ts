import { RouterContext } from '../deps.ts';

export interface Route {
  method: 'get' | 'patch' | 'post' | 'put' | 'delete';
  path: string;
  action: (ctx: RouterContext) => void;
}
