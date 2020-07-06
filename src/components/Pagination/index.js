// import React from "react"
// import { Link } from "gatsby"
// import propTypes from "prop-types"

// import * as S from "./styles"

// const Pagination = ({
//   isFirst,
//   isLast,
//   currentPage,
//   numPages,
//   prevPage,
//   nextPage,
// }) => (
//   <S.PaginationWrapper>
//     {!isFirst && <Link to={prevPage}> página anterior </Link>}
//     <p>
//       {currentPage} de {numPages}
//     </p>
//     {!isLast && <Link to={nextPage}> próxima página </Link>}
//   </S.PaginationWrapper>
// )

// Pagination.propTypes = {
//   isFirst: propTypes.bool.isRequired,
//   isLast: propTypes.bool.isRequired,
//   currentPage: propTypes.number.isRequired,
//   numPages: propTypes.number.isRequired,
//   prevPage: propTypes.string,
//   nextPage: propTypes.string,
// }

// export default Pagination

// S>----------------------------------------------------------------------------------------<//

import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import AniLink from "gatsby-plugin-transition-link"
import propTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styles"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        {" "}
        página anterior{" "}
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        {" "}
        próxima página{" "}
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
