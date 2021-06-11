import { selector } from 'recoil';

import { getItem } from 'api/services/movies';
import { movieStateById } from '../atoms';

export const moviesDataById = selector({
  key: 'movieDataById',
  get: async ({ get }) => {
    const response = await getItem(get(movieStateById));
    // console.log('response', response);
    return response;
  },
});
