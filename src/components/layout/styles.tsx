import styled from 'styled-components';
import { headerHeight } from './header/styles';
export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.5s;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
  }
`;
export const pageWrapperPaddingTop = headerHeight;
export const pageWrapperPaddingBottom = '1.5rem';
export const PageWrapper = styled.div`
  padding: ${pageWrapperPaddingTop} 1.5rem 1.5rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
  }
`;
