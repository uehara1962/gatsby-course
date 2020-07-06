// import React from "react"
// import { graphql } from "gatsby"

// const BlogPost = ({ data }) => {
//   const post = data.markdownRemark

//   return (
//     <>
//       <h1>title: {post.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
//     </>
//   )
// }

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//       }
//       html
//       fields {
//         slug
//       }
//     }
//   }
// `

// export default BlogPost

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import SEO from "../components/seo"

// const BlogPost = ({ data }) => {
//   const post = data.markdownRemark

//   return (
//     <Layout>
//       <SEO title={post.frontmatter.title} />
//       <h1>title: {post.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         description
//         date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//       }
//       html
//       timeToRead
//       fields {
//         slug
//       }
//     }
//   }
// `

// export default BlogPost

// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import SEO from "../components/seo"

// import * as S from "../components/Post/styles"

// const BlogPost = ({ data }) => {
//   const post = data.markdownRemark

//   return (
//     <Layout>
//       <SEO title={post.frontmatter.title} />
//       <S.PostHeader>
//         <S.PostDate>
//           {post.frontmatter.date} * {post.timeToRead} min de leitura
//         </S.PostDate>
//         <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
//         <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
//       </S.PostHeader>
//       <S.MainContent>
//         <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
//       </S.MainContent>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         description
//         date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//       }
//       html
//       timeToRead
//       fields {
//         slug
//       }
//     }
//   }
// `

// export default BlogPost
// S>----------------------------------------------------------------------------------------<//

// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/Layout"
// import SEO from "../components/seo"
// import RecommendedPosts from "../components/RecommendedPosts"

// import * as S from "../components/Post/styles"

// const BlogPost = ({ data, pageContext }) => {
//   const post = data.markdownRemark
//   const next = pageContext.nextPost
//   const previous = pageContext.previousPost

//   // console.log("BlogPost_next: ", next)
//   // console.log("BlogPost_previous: ", previous)

//   return (
//     <Layout>
//       <SEO title={post.frontmatter.title} />
//       <S.PostHeader>
//         <S.PostDate>
//           {post.frontmatter.date} * {post.timeToRead} min de leitura
//         </S.PostDate>
//         <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
//         <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
//       </S.PostHeader>
//       <S.MainContent>
//         <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
//       </S.MainContent>
//       <RecommendedPosts next={next} previous={previous} />
//     </Layout>
//   )
// }

// S>----------------------------------------------------------------------------------------<//

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from "../components/Post/styles"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  // console.log("BlogPost_next: ", next)
  // console.log("BlogPost_previous: ", previous)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} * {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
      fields {
        slug
      }
    }
  }
`

export default BlogPost
