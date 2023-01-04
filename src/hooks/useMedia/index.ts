import { useEffect, useState, useCallback } from 'react';
import type { BreakPoints } from '../../types';
import { useTheme } from 'styled-components';

export const useMedia = (media: BreakPoints) => {
  const theme = useTheme();
  const query = `(min-width: ${theme.breakpoints[media]})`;

  const getMatches = useCallback(() => {
    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = useState<boolean | null>(null);

  const handleChange = useCallback(() => {
    setMatches(getMatches());
  }, [getMatches]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setMatches(getMatches());
    matchMedia.addEventListener('change', handleChange);
    // clean up
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [media, handleChange, getMatches, theme.breakpoints, query]);

  return matches;
};
