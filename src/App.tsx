import type { FullTheme } from './styles/themes';

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { base, light, dark } from './styles/themes';

import { Layout } from './components/layout';
import {AnimatedRoutes} from './components/animatedRoutes'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const fullTheme: FullTheme = { ...base, colors: darkMode ? dark : light };

  return (
    <>
      <ThemeProvider theme={fullTheme}>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <AnimatedRoutes />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
