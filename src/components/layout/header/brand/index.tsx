import styled from "styled-components"

const StyledBrand = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px #474747 solid;
`

const StyledTitle = styled.span`
font-size: 18px;
`
export const Brand: React.FC = () => {


    return (
            <StyledBrand>
                <StyledTitle>Developers</StyledTitle>
            </StyledBrand>
    )

}