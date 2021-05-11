import { lazy } from 'react';

import { IRoute } from './types';

const Home = lazy(() => import('views/Home'));
const DashBoard = lazy(() => import('views/Dashboard'));
const Login = lazy(() => import('views/Auth/Login'));
const Register = lazy(() => import('views/Auth/Register'));
const Profile = lazy(() => import('views/Profile'));
const About = lazy(() => import('views/About'));
const Contacts = lazy(() => import('views/Contacts'));
const Schedule = lazy(() => import('views/Schedule'));

export const publicRoutes: IRoute[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/schedule',
    component: Schedule,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contacts',
    component: Contacts,
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
