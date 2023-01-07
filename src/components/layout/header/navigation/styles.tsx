import styled from 'styled-components';

export const Navigation = styled.nav`
  flex-grow: 1;
`;

export const NavList = styled.ul`
  width: 85%;
  height: 100%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  list-style: none;
  overflow-x: auto;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  > li {
    padding-right: 1rem;
    white-space: nowrap;
  }
  > li > a {
    text-decoration: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 95%;
    justify-content: flex-start;
  }
`;
