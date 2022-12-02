import styled from "styled-components"
import { Header } from "./header"
import { Footer } from './footer'

type LayoutProps = {
    children: JSX.Element
}

const StyledLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #1A1A1A;
`
const StyledPageWrapper = styled.div`
    padding: 150px 20px 20px 20px;
    flex-grow: 1;
`
export const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <StyledLayout>
            <Header />
            <StyledPageWrapper>
                {children}
            </StyledPageWrapper>
            <Footer />
        </StyledLayout>
    )
}