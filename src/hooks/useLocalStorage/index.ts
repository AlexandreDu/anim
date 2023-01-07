import { useState, useEffect } from 'react';
type useLocalStorageProps = {
  key: string;
  initialValue: string;
};

export function useLocalStorage({
  key,
  initialValue,
}: useLocalStorageProps): [
  unknown,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue ? persistedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
