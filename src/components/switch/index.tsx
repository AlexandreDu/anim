import type { SwitchProps } from '../../types';

import * as Styled from './styles';

export function Switch({ on, setOn, offIcon, onIcon }: SwitchProps) {
  return (
    <Styled.Switch $on={on} onClick={setOn}>
      <Styled.OffIconWrapper $on={on}>
        {on ? offIcon : onIcon}
      </Styled.OffIconWrapper>
      <Styled.Ball layout $on={on}>
        {on ? onIcon : offIcon}
      </Styled.Ball>
    </Styled.Switch>
  );
}
