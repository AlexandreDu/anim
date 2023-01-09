import type { UseLocalStorageProps } from '../../types';
import { useState, useEffect } from 'react';

export function useLocalStorage<T>({
  key,
  initialValue,
}: UseLocalStorageProps<T>): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
