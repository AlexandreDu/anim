import type { LayoutProps } from '../../types';

import * as Styled from './styles';

import { Header } from './header';
import { Switch } from '../switch';
import { Footer } from './footer';

export const Layout: React.FC<LayoutProps> = ({
  children,
  darkMode,
  setDarkMode,
}) => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.PageWrapper>
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </Styled.PageWrapper>
      <Footer />
    </Styled.Layout>
  );
};
