import { Router } from '../deps.ts';
import { routes } from './routes.ts';
import { Route } from './types.ts';

const router = new Router();

routes.forEach(({ method, path, action }: Route) => {
  // @ts-ignore
  router[method](path, action);
});

export default router;
