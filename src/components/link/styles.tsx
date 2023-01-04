import styled, { css } from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

const linkCss = css<{ color?: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;
export const Link = styled(RouterLink)<{ color?: string }>`
  ${linkCss};
`;

export const NavLink = styled(RouterNavLink)<{
  color?: string;
  active?: string;
}>`
  ${linkCss};
  &.active {
    color: #c1b;
    transition: color 2s;
  }
`;
