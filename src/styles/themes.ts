import type { BaseTheme } from '../types';

export type ColorTheme = typeof light;
type Colors = {
  colors: ColorTheme;
};
export type FullTheme = BaseTheme & Colors;
export const base: BaseTheme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  space: {
    none: '0rem',
    sm: '0.25rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '6rem',
  },
  fonts: {
    heading: 'Mukta Mahee, sans-serif',
    body: 'Mukta Mahee, sans-serif',
  },
  fontSizes: {
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '2.875rem',
  },
  lineHeights: {
    sm: '2.5rem',
    md: '3rem',
    lg: '3.5rem',
    xl: '4rem',
  },
};
export const light = {
  background: '#fff',
  text: '#000',
};

export const dark = {
  background: '#1a1a1a',
  text: '#fff',
};
