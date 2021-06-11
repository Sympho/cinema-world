import { selector } from 'recoil';

import { getItems } from 'api/services/movies';

export const moviesData = selector({
  key: 'moviesData',
  get: async () => {
    const response = await getItems();
    // console.log('response', response);
    return response;
  },
});
