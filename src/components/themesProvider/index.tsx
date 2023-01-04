import type { ThemesProviderProps } from '../../types';
import type { FullTheme } from '../../styles/themes';

import { ThemeProvider } from 'styled-components';

import { createContext, useState } from 'react';
import { base, light, dark } from '../../styles/themes';

export const DarkModeContext = createContext(true);
export const DarkModeUpdateContext = createContext<() => void>(() =>
  console.log()
);

export function ThemesProvider({ children }: ThemesProviderProps) {
  const [darkMode, setDarkMode] = useState(true);
  const fullTheme: FullTheme = { ...base, colors: darkMode ? dark : light };
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <ThemeProvider theme={fullTheme}>
      <DarkModeContext.Provider value={darkMode}>
        <DarkModeUpdateContext.Provider value={toggleDarkMode}>
          {children}
        </DarkModeUpdateContext.Provider>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}
