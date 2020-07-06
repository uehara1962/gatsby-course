const PostsQuery = `{
  Posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        id
        frontmatter {
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: PostsQuery,
    // transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
    transformer: ({ data }) => flatten(data.Posts.edges), // optional
    indexName: "Posts", // overrides main index name, optional
    settings: {
      attributesToSnippet: ["excerpt:20"], // optional, any index settings
    },
    // matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
]

module.exports = queries
