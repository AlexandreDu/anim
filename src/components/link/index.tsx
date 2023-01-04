import type { LinkProps, NavLinkProps } from '../../types';

import * as Styled from './styles';
export function Link({ children, to, color, ...rest }: LinkProps) {
  return (
    <Styled.Link {...rest} color={color} to={to}>
      {children}
    </Styled.Link>
  );
}

export function NavLink({ children, to, color, ...rest }: NavLinkProps) {
  return (
    <Styled.NavLink {...rest} color={color} to={to}>
      {children}
    </Styled.NavLink>
  );
}
