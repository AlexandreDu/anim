import GlobalStyle from './styles/global';

import { ThemesProvider } from './components/themesProvider';
import { Layout } from './components/layout';
import { AnimatedRoutes } from './components/animatedRoutes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemesProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ThemesProvider>
    </>
  );
};

export default App;
