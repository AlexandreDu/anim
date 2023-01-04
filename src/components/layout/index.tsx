import type { LayoutProps } from '../../types';

import * as Styled from './styles';

import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children }: LayoutProps) {
  return (
    <Styled.Layout>
      <Header />
      <Styled.PageWrapper>{children}</Styled.PageWrapper>
      <Footer />
    </Styled.Layout>
  );
}
