import styled from "styled-components"
import { Link } from "gatsby"

export const MenuTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 450;
    color: #8899a6;
    margin-top: 60px;
`
export const MenuLinksWrapper = styled.nav`
    padding: 30px;
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;

`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: #8899a6;
    }
`

export const MenuLinksLink = styled(Link)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`