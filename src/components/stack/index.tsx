import type { StackProps } from "../../types"
import * as Styled from './styles'

export const Stack: React.FC<StackProps> = ({children, direction, space}) => {

    return (
        <>
            <Styled.Stack direction={direction} space={space}>
                {children}
            </Styled.Stack>
        </>
    )
}