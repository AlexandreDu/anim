
import React from "react"
import styled from "styled-components"
import { Brand } from "./brand"
import { Navigation } from "./navigation"

const StyledHeader = styled.header`
    background-color: #1A1A1A;
    font-weight: bold;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`


export const Header: React.FC = () => {


    return (
        <StyledHeader>
            <Brand />
            <Navigation />
        </StyledHeader>
    )

}