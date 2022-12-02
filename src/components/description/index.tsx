import styled from "styled-components"



type DescriptionProps = {
    title: React.ReactNode;
    content: React.ReactNode;
}


const StyledHeadingWrapper = styled.div`
    font-size: 1.5rem;
`


export const Description: React.FC<DescriptionProps> = ({title}) => {
    return (
        <div>
        
            {title}


        </div>
    )
}