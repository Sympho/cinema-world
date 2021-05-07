import { atom } from 'recoil';

export const movieFilterState = atom({
  key: 'movieFilterState',
  default: 'Show All',
});
