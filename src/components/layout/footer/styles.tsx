import styled from 'styled-components';
export const footerHeight = '3.5rem';
export const Footer = styled.footer`
  width: 100%;
  height: ${footerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
    background-color: ${theme.colors.text};
    color: ${theme.colors.background};
  `}
`;
