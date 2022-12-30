import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
export const Link = styled(RouterLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({color}) => color ? color : '#c1b'};
`;
