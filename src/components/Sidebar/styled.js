import styled from "styled-components";
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
    align-items: auto;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding; 2rem;
    text-align: center;
    width: 20rem;

    ${media.lessThan("large")`
    align-items: center;
    height: 6rem;
    padding: 0rem 1rem;
    width: 100%;
  `}
`