import React from "react"

import * as S from "./styles"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  )
}
export default Sidebar
