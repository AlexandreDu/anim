import type { ThemesProviderProps } from '../../types';
import type { FullTheme } from '../../styles/themes';

import { ThemeProvider } from 'styled-components';

import { createContext, useState, useEffect } from 'react';
import { base, light, dark } from '../../styles/themes';

import { useLocalStorage } from '../../hooks/useLocalStorage';

export const DarkModeContext = createContext(true);
export const DarkModeUpdateContext = createContext<() => void>(() =>
  console.log()
);

export function ThemesProvider({ children }: ThemesProviderProps) {
  const [darkMode, setDarkMode] = useLocalStorage({
    key: 'mode',
    initialValue: 'true',
  });

  const fullTheme: FullTheme = {
    ...base,
    colors: darkMode === 'true' ? dark : light,
  };

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => {
      return prevDarkMode === 'true' ? 'false' : 'true';
    });
  }

  return (
    <ThemeProvider theme={fullTheme}>
      <DarkModeContext.Provider value={darkMode === 'true'}>
        <DarkModeUpdateContext.Provider value={toggleDarkMode}>
          {children}
        </DarkModeUpdateContext.Provider>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}
