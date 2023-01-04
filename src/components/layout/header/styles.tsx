import styled from 'styled-components';

export const headerHeight = '9.5rem';
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  left: 0;
  right: 0;
  height: ${headerHeight};
  z-index: 20;
  transition: all 0.5s;
`;
