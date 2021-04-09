import Home from 'views/Home';
import DashBoard from 'views/Dashboard';
import { Login, Register } from 'views/Auth';
import Profile from 'views/Profile';

import { IRoute } from './types';

export const publicRoutes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
];

export const authRoutes: IRoute[] = [
  {
    exact: true,
    url: '/auth/',
    path: '/:page(auth)/',
    component: Login,
  },
  {
    path: '/auth/:page(login)/',
    component: Login,
  },
  {
    path: '/auth/:page(register)/',
    component: Register,
  },
];

export const profileRoutes: IRoute[] = [
  {
    url: '/profile/',
    path: '/:page(profile)/',
    component: Profile,
  },
  {
    path: '/:page(profile)/settings/',
    component: Profile,
  },
  {
    path: '/:page(dashboard)/',
    component: DashBoard,
  },
];
