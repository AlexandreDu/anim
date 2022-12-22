import type { LinkProps } from '../../types';

import * as Styled from './styles';
export const Link: React.FC<LinkProps> = ({ children, to, ...rest }) => {
  return (
    <Styled.Link {...rest} to={to}>
      {children}
    </Styled.Link>
  );
};
