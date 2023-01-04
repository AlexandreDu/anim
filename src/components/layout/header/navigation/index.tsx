import * as Styled from './styles';

import { NavLink } from '../../../link';

const navItems = [
  {
    children: 'Home',
    to: '/',
  },
  {
    children: 'Paintings',
    to: '/paintings',
  },
  {
    children: 'About',
    to: '/about',
  },
];

export function Navigation() {
  return (
    <Styled.Navigation>
      <Styled.NavList>
        {navItems.map(({ children, to }) => (
          <li key={to}>
            <NavLink to={to}>{children}</NavLink>
          </li>
        ))}
      </Styled.NavList>
    </Styled.Navigation>
  );
}
