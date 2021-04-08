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
  {
    path: '/dashboard/',
    component: DashBoard,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: '/auth/',
    component: Login,
  },
  {
    path: '/auth/register/',
    component: Register,
  },
];

export const profileRoutes: IRoute[] = [
  {
    path: '/profile/',
    component: Profile,
  },
  {
    path: '/profile/settings/',
    component: Profile,
  },
];
