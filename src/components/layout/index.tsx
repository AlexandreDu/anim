import * as Styled from './styles';

import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.PageWrapper>{children}</Styled.PageWrapper>
      <Footer />
    </Styled.Layout>
  );
};
