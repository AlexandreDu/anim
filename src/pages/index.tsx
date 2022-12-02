import styled from "styled-components"
import { Description } from "../components/description"
import { Heading } from "../components/heading"

const StyledHighlight = styled.span`
    background: linear-gradient(145deg, #72f, #c1b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
`

export const Home: React.FC = () => {

    return (
        <>
            <Description 
                title={
                    <Heading
                        renderAs="h1"
                    >
                        Framer <StyledHighlight>Motion</StyledHighlight>
                    </Heading>
                } 
                content={<p>blabla</p>}
            />
        </>
    )
}