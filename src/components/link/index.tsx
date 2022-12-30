import type { LinkProps } from '../../types';

import * as Styled from './styles';
export function Link({ children, to, color, ...rest }: LinkProps) {
  return (
    <Styled.Link {...rest} color={color} to={to}>
      {children}
    </Styled.Link>
  );
}
