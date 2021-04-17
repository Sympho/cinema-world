import { atom } from 'recoil';

import movies from './constants/movies';

export const authState = atom({
  key: 'authState',
  default: false,
});

export const movieFilterState = atom({
  key: 'movieFilterState',
  default: 'Show All',
});

export const movieState = atom({
  key: 'movieState',
  default: movies,
});
