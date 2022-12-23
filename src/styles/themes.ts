export type BaseTheme = {
  breakpoints: { [key: string]: string };
  space: string[];
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
  space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px'],
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
