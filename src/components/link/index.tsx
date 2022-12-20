import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from '../../types';

const StyledLink = styled(RouterLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #c1b;
`;

export const Link: React.FC<LinkProps> = ({ children, to, ...rest }) => {
  return (
    <StyledLink {...rest} to={to}>
      {children}
    </StyledLink>
  );
};
