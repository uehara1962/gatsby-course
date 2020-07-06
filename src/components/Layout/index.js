// import React from "react"
// import PropTypes from "prop-types"
// import Profile from "./Profile"

// const Layout = ({ children }) => {
//   return (
//     <>
//       <aside>
//         <Profile />
//       </aside>
//       <main>{children}</main>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
// S>----------------------------------------------------------------------------------------<//

import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal levl="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
