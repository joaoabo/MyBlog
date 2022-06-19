import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Avatar from  "../Avatar";
import * as S from "./styled";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author }
    },
  } = useStaticQuery(graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

    return (
      <S.ProfileWrapper>
        <S.ProfileLink>
          <Avatar />
          <S.ProfileTitle>
            {title}
          </S.ProfileTitle>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
        <S.ProfileAuthor></S.ProfileAuthor>
      </S.ProfileWrapper>
      
    ) 
  }

export default Profile
