import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
    color: var(--texts);
    display: flex;
    margin-top: 40px;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: var(--texts);
    text-decoration:  none;
    transition: color 0.5s;

    &:hover {
        color: var(--highlight);
    }
`
export const ProfileTitle = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem
`

export const ProfileDescription = styled.small`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.8;
`
export const ProfileAuthor = styled.p`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;

`
