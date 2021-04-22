import MovieController from '../controllers/MovieController.ts';
import { Route } from './types.ts';

export const movieRoutes: Route[] = [
  {
    method: 'get',
    path: '/movies',
    action: MovieController.getItems,
  },
  {
    method: 'post',
    path: '/movies/',
    action: MovieController.createItem,
  },
  {
    method: 'get',
    path: '/movies/:id',
    action: MovieController.getItem,
  },
];
