import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.5s;
`;
export const PageWrapper = styled.div`
  padding: 8.5rem 1.5rem 1.5rem 1.5rem;
  flex-grow: 1;
`;
