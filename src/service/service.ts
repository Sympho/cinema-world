import axios from 'axios';

const createService = () => {
  console.log('init createService');
  const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
    },
    cancelToken: new axios.CancelToken(cancel => {}),
  });

  instance.interceptors.request.use(
    config => {
      // get the stored token
      // config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`,
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
      return Promise.reject(error);
    },
  );

  return instance;
};

export default createService();
