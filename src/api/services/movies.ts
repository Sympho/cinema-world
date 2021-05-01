import { httpClient } from 'api';

export const getItems = async () => {
  const res = await httpClient.get('/movies');
  return res.data;
};

export const getItem = async (id: number) => {
  const res = await httpClient.get(`/movies/${id}`);
  return res.data;
};
