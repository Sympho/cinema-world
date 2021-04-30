import axios from 'axios';

import { getFromLS } from 'shared/helpers/localStorage';
import { KEY_ACCESS_TOKEN } from 'shared/constants/auth';

const createClient = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    config => {
      const accessToken = getFromLS<string>(KEY_ACCESS_TOKEN, '');
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      /*
      const originalRequest = error.config;
      if (error.response.status === 403 && !originalRequest._retry) {
      // You should try to refresh ACCESS_TOKEN
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      return axiosApiInstance(originalRequest);
      }
      */
      return Promise.reject(error);
    },
  );

  return instance;
};

export const createCancel = axios.CancelToken.source;

export default createClient();
