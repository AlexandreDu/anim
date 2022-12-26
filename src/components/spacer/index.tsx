
import type { SpacerProps } from '../../types'
import * as Styled from './styles'
export const Spacer: React.FC<SpacerProps> = ({space, direction}) => {


    return (
        <Styled.Spacer space={space} direction={direction} />
    )
}