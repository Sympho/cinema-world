import Home from 'views/Home';
import DashBoard from 'views/Dashboard';

import { IRoute } from './types';

export const publicRoutes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/dashboard',
    component: DashBoard,
  },
];
