import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/gatsby-eu.PNG"
        alt="João Antonio"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar