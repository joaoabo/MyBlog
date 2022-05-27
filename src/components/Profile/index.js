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
            <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileTitle>
        </S.ProfileLink>
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
      </S.ProfileWrapper>
      
    ) 
  }

export default Profile
