import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  display: block;
  max-width: 100%;
  height: 400px;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
  }
`;
