import type { SwitchProps } from '../../types';

import { motion } from 'framer-motion';
import * as Styled from './styles';

const MotionBall = motion(Styled.Ball);

export function Switch({ on, setOn, offIcon, onIcon }: SwitchProps) {
  return (
    <Styled.Switch $on={on} onClick={setOn}>
      <Styled.OffIconWrapper $on={on}>
        {on ? offIcon : onIcon}
      </Styled.OffIconWrapper>
      <MotionBall layout $on={on}>
        {on ? onIcon : offIcon}
      </MotionBall>
    </Styled.Switch>
  );
}
