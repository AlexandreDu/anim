import type { SpacerProps } from '../../types';
import * as Styled from './styles';

export function Spacer({ space, direction }: SpacerProps) {
  return space !== 'none' ? (
    <Styled.Spacer space={space} direction={direction} />
  ) : null;
}
