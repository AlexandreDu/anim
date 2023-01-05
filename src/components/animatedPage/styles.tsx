import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  flex-grow: 1;
`;
