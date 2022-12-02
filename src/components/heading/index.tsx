import styled from "styled-components"

type HeadingProps<T extends React.ElementType> = {
    renderAs?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>

const StyledHeading = styled.h1<{as: keyof JSX.IntrinsicElements}>`
    font-size: 2.5rem;

    ${({ as }) => {
        switch (as) {
          case 'h1':
            return `
                    font-size: 2.5rem;
                    `
          default:
            return ``
        }
      }}
`

export const Heading = <T extends React.ElementType>({
    children, 
    renderAs, 
    ...rest
}: HeadingProps<T>) => {

   
    return (
        <StyledHeading
            as={renderAs}
            {...rest}
        >
            {children}
        </StyledHeading>
    )
}