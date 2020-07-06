// import React from "react"
// const Profile = () => (
//   <div className="Profile-wrapper">
//     <h1>Carlos Uehara</h1>
//     <h2>Programados Frontend</h2>
//     <p>
//       Membro da empresa InfoProc, escrevo sobre Frontend e Backend e outras
//       coisas mais
//     </p>
//   </div>
// )

// export default Profile

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             title
//             position
//             description
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="Profile-wrapper">
//         <h1>{data.site.siteMetadata.title}</h1>
//         <h2>{data.site.siteMetadata.position}</h2>
//         <p>{data.site.siteMetadata.description}</p>
//       </div>
//     )}
//   />
// )

// export default Profile

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             title
//             position
//             description
//           }
//         }
//       }
//     `}
//     // render={data => (
//     render={({
//       site: {
//         siteMetadata: { title, position, description },
//       },
//     }) => (
//       <div className="Profile-wrapper">
//         <h1>{title}</h1>
//         <h2>{position}</h2>
//         <p>{description}</p>
//       </div>
//     )}
//   />
// )

// export default Profile

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Profile = () => {
//   const {
//     site: {
//       siteMetadata: { title, position, description },
//     },
//   } = useStaticQuery(graphql`
//     query MySiteMetadata {
//       site {
//         siteMetadata {
//           title
//           position
//           description
//         }
//       }
//     }
//   `)

//   return (
//     <div className="Profile-wrapper">
//       <h1>{title}</h1>
//       <h2>{position}</h2>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default Profile

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Avatar from "../Avatar"

// const Profile = () => {
//   const {
//     site: {
//       siteMetadata: { title, position, description },
//     },
//   } = useStaticQuery(graphql`
//     query MySiteMetadata {
//       site {
//         siteMetadata {
//           title
//           position
//           description
//         }
//       }
//     }
//   `)

//   return (
//     <div className="Profile-wrapper">
//       <Avatar />
//       <h1>{title}</h1>
//       <h2>{position}</h2>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default Profile

// S>----------------------------------------------------------------------------------------<//

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styles"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile
