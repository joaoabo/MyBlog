import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem 1rem;
  `}
`
// border-bottom: 1px solid #38444d; caso deseja usar border nos posts
export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 1rem 1rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 50%;
    font-size: 0.7rem;
    min-height: 50px;
    min-width: 50px;
    padding: .1rem .3rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  margin: 0.2rem 0px 0.3rem;
`

export const PostItemDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.2;
`