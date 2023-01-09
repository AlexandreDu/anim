import type { StackProps } from '../../types';
import styled from 'styled-components';

export const Stack = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['direction', 'space'].includes(prop) && defaultValidatorFn(prop),
})<StackProps>`
  & > *:not(:last-child) {
    ${({ direction, space, theme }) =>
      direction === 'vertical'
        ? `margin-bottom: ${theme.space[space]}`
        : `margin-right: ${theme.space[space]}`}
  }
`;
