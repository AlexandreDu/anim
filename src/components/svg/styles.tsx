import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Svg = styled(motion.svg).attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 100 100',
})`
  stroke: ${({ theme }) => theme.colors.text};
  strokewidth: 0.25rem;
  fill: none;
  width: 100%;
`;
