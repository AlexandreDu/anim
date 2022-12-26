import type { SwitchProps } from '../../types';

import { motion } from 'framer-motion';
import * as Styled from './styles';

const MotionBall = motion(Styled.Ball);

export const Switch: React.FC<SwitchProps> = ({ on, setOn, offIcon, onIcon }) => {
  return (
    <Styled.Switch
      on={on}
      onClick={() => setOn((prevState) => !prevState)}
    >
      <Styled.OffIconWrapper on={on}>
        {on ? offIcon : onIcon}
      </Styled.OffIconWrapper>
      <MotionBall layout on={on}>
        {on ? onIcon : offIcon}
      </MotionBall>
    </Styled.Switch>
  );
};
