import type { SpacerProps } from "../../types";
import styled from "styled-components";

export const Spacer = styled.div<SpacerProps>`
    display: inline-block;
    width: ${({theme, direction, space}) => direction === 'vertical' ? '1px' : theme.space[space]};
    height: ${({theme, direction, space}) => direction === 'vertical' ? theme.space[space] : '1px'};
    
`