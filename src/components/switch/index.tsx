import type { SwitchProps } from '../../types';

import { motion } from 'framer-motion';
import * as Styled from './styles';

const MotionBall = motion(Styled.Ball);

export const Switch: React.FC<SwitchProps> = ({ darkMode, setDarkMode }) => {
  return (
    <Styled.Container
      darkMode={darkMode}
      onClick={() => setDarkMode((prevState) => !prevState)}
    >
      <MotionBall layout />
    </Styled.Container>
  );
};
