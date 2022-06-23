import React from "react";

import links from "./content";
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled";


const MenuLinks = () => (
    <>
    <S.MenuTitle><h1>Stack utilizada</h1></S.MenuTitle>
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink
                        tcover
                        direction="left"
                        bg={getThemeColor()}
                        duration={0.6}
                        to={link.url}
                        target="_blank"
                        activeClassName="active">
                        {link.label}
                    </S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
    </>
)

export default MenuLinks