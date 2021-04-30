import { useState } from 'react';

import { getFromLS, setToLS } from 'shared/helpers/localStorage';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (v: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getFromLS<T>(key, initialValue);
  });

  const setValue = (value: T | ((v: T) => T)): void => {
    // if you use setValue((storedValue) => {}), value can be function
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStoredValue(setToLS<T>(key, newValue));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
