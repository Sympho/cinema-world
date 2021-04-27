import { isNil } from 'lodash';
import { useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (v: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item: string | null = localStorage.getItem(key);
      return !isNil(item) ? JSON.parse(item) : initialValue;
    } catch (error) {
      // console.log('We have error getting item from localStorage: ', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((v: T) => T)): void => {
    try {
      // if you use setValue((storedValue) => {}), value can be function
      const newValue = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      // console.log('We have error setting to localStorage: ', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
