import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
    color: #8899a6;
    display: flex;
    margin-top: 60px;
    flex-direction: column;
`

export const ProfileLink = styled(Link)`
    color: #8899a6;
    text-decoration:  none;
    transition: color 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`
export const ProfileTitle = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 1.5rem
`

export const ProfileDescription = styled.small`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4;
`
export const ProfileAuthor = styled.p`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;

`
