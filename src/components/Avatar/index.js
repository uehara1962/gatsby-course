// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const Avatar = () => {
//   // // a imagem se comporta como GatsbyImageSharpFixed
//   // const { avatarImage } = useStaticQuery(
//   //   graphql`
//   //     query {
//   //       avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
//   //         childImageSharp {
//   //           fixed(width: 60, height: 60) {
//   //             ...GatsbyImageSharpFixed
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `
//   // )

//   // a imagem se comporta como GatsbyImageSharpFixed_tracedSVG
//   const { avatarImage } = useStaticQuery(
//     graphql`
//       query {
//         avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
//           childImageSharp {
//             fixed(width: 60, height: 60) {
//               ...GatsbyImageSharpFixed_tracedSVG
//             }
//           }
//         }
//       }
//     `
//   )
//   return <Img fixed={avatarImage.childImageSharp.fixed} />
// }

// export default Avatar

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const Avatar = () => {
//   // // a imagem se comporta como GatsbyImageSharpFluid
//   // const { avatarImage } = useStaticQuery(
//   //   graphql`
//   //     query {
//   //       avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
//   //         childImageSharp {
//   //           fluid(width: 60, height: 60) {
//   //             ...GatsbyImageSharpFluid
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `
//   // )

//   // a imagem se comporta como GatsbyImageSharpFluid_tracedSVG
//   const { avatarImage } = useStaticQuery(
//     graphql`
//       query {
//         avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 60, maxHeight: 60) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     `
//   )
//   return (
//     <Img fluid={avatarImage.childImageSharp.fluid} style={{ width: "60px" }} />
//   )
// }

// export default Avatar
// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import * as S from "./styles"

// const Avatar = () => {
//   // a imagem se comporta como GatsbyImageSharpFixed_tracedSVG
//   const { avatarImage } = useStaticQuery(
//     graphql`
//       query {
//         avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
//           childImageSharp {
//             fixed(width: 60, height: 60) {
//               ...GatsbyImageSharpFixed_tracedSVG
//             }
//           }
//         }
//       }
//     `
//   )
//   return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
// }

// export default Avatar

// S>----------------------------------------------------------------------------------------<//

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styles"

const Avatar = () => {
  // a imagem se comporta como GatsbyImageSharpFixed_tracedSVG
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
