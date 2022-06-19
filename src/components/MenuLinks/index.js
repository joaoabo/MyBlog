import React from "react";

import links from "./content";

import * as S from "./styled";


const MenuLinks = () => (
    <>
    <S.MenuTitle><h1>Stack utilizada</h1></S.MenuTitle>
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink
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