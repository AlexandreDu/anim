import styled from "styled-components";

const navItems = [
    'Motion',
    'Handshake',
    'Guides',
    'API Documentation'
]

const StyledNavigation = styled.nav`
    margin-top: 0.5rem;
`

const StyledNavList = styled.ul`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    list-style: none;
`

export const Navigation: React.FC = () => {

    return (
        <StyledNavigation>
            <StyledNavList>
                {navItems.map(navItem => (
                    <li key={navItem}>{navItem}</li>
                ))}
            </StyledNavList>
        </StyledNavigation>
    )
}