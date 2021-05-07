import { atom } from 'recoil';

import movies from '../constants/movies';

export const movieState = atom({
  key: 'movieState',
  default: movies,
});
