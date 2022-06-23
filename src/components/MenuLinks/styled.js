import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 450;
    color: #8899a6;
    margin-top: 60px;

    ${media.lessThan("large")`
    display: none;
  `}
`
export const MenuLinksWrapper = styled.nav`
    padding: 30px;

    ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;

`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: var(--highlight);
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--highlight);
    }
`