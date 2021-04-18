import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: { 'X-Custom-Header': 'foobar' },
  /*
  cancelToken: new CancelToken(function (cancel) {
  }),
   */
});

export default service;
