import styled from "styled-components"

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    display: grid;
    grid-area: posts;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`