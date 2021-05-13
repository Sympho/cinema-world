import { IRoute } from './types';

export const publicRoutes: IRoute[] = [
  {
    exact: true,
    path: '/',
    componentPath: 'views/Home',
  },
  {
    exact: true,
    path: '/schedule',
    componentPath: 'views/Schedule',
  },
  {
    path: '/about',
    componentPath: 'views/About',
  },
  {
    path: '/contacts',
    componentPath: 'views/Contacts',
  },
];

export const authRoutes: IRoute[] = [
  {
    exact: true,
    url: '/auth/',
    path: '/:page(auth)/',
    componentPath: 'views/Auth/Login',
  },
  {
    path: '/auth/:page(login)/',
    componentPath: 'views/Auth/Login',
  },
  {
    path: '/auth/:page(register)/',
    componentPath: 'views/Auth/Register',
  },
];

export const profileRoutes: IRoute[] = [
  {
    url: '/profile/',
    path: '/:page(profile)/',
    componentPath: 'views/Profile',
  },
  {
    path: '/:page(profile)/settings/',
    componentPath: 'views/Profile',
  },
  {
    path: '/:page(dashboard)/',
    componentPath: 'views/Dashboard',
  },
];
