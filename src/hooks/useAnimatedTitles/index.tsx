import { useState, useCallback } from 'react';

export function useAnimatedTitles(): [boolean, () => void] {
  const [isSecondTitleDisplayed, setIsSecondTitleDisplayed] = useState(false);
  const switchTitle = useCallback(() => {
    setIsSecondTitleDisplayed((prevState) => !prevState);
  }, []);

  return [isSecondTitleDisplayed, switchTitle];
}
