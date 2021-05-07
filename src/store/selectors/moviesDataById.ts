import { selector } from 'recoil';

import { getItem } from 'api/services/movies';
import { movieStateById } from '../atoms';

export const moviesDataById = selector({
  key: 'movieDataById',
  get: async ({ get }) => {
    const response = await getItem(get(movieStateById));
    return response;
  },
});
