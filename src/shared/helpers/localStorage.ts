import { isNil } from 'lodash';

export const getFromLS = <T>(key: string, initialValue: T) => {
  try {
    const item: string | null = localStorage.getItem(key);
    return !isNil(item) ? JSON.parse(item) : initialValue;
  } catch (error) {
    // console.log('We have error getting item from localStorage: ', error);
    return initialValue;
  }
};

export const setToLS = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch (error) {
    return value;
  }
};
