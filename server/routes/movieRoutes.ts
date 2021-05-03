import MovieController from '../controllers/MovieController.ts';
import GenreController from '../controllers/GenreController.ts';
import { Route } from './types.ts';

export const movieRoutes: Route[] = [
  {
    method: 'get',
    path: '/movies',
    action: MovieController.getItems,
  },
  {
    method: 'post',
    path: '/movies',
    action: MovieController.createItem,
  },
  {
    method: 'get',
    path: '/movies/:id',
    action: MovieController.getItem,
  },
  {
    method: 'get',
    path: '/genres',
    action: GenreController.getItems,
  },
  {
    method: 'get',
    path: '/genres/:id',
    action: GenreController.getItem,
  },
];
