import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Svg = styled(motion.svg).attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  border: 1px solid red;
`;
