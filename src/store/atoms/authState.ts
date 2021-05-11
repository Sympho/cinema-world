import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: false,
});

export const loggedUserData = atom({
  key: 'loggedUserData',
  default: {},
});
