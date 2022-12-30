import type { StackProps } from '../../types';
import * as Styled from './styles';

export function Stack({ children, direction, space }: StackProps) {
  return (
    <>
      <Styled.Stack direction={direction} space={space}>
        {children}
      </Styled.Stack>
    </>
  );
}
