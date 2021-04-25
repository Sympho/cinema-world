import axios from 'axios';

const createClient = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    config => {
      // get the stored token

      config.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem('ACCESS_TOKEN') || '',
      )}`;
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
      const ACCESS_TOKEN = await refreshAccessToken();
      axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
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
