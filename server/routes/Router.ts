import { Router, RouterContext } from '../deps.ts';
import { routes, Route } from './routes.ts';

const router = new Router();

routes.forEach(({ method, path, action }) => {
  // @ts-ignore
  router[method](path, action);
});

export default router;
