import { httpClient } from 'api';

export const getItems = async () => {
  const res = await httpClient.get('/movies');
  return res.data;
};
