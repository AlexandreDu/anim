export type BaseTheme = {
  breakpoints: { [key: string]: string };
  space: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  fonts: {
    [key: string]: string;
  };
  fontSizes: { [key: string]: string };
  lineHeights: { [key: string]: string };
};

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
    '2xl': '1536px',
  },
  space: {
    sm: '0.25rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    '2xl': '6rem'
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
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '3.25rem',
  },
};
export const light = {
  primary: '#4851f4',
  background: '#fff',
  text: '#000',
};

export const dark = {
  primary: '#4851f4',
  background: '#1a1a1a',
  text: '#fff',
};
