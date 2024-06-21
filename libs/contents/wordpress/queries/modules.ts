const imageQuery = `sourceUrl
          altText
          mediaDetails {
            width
            height
          }`;

const blogsQuery = `
      title
      date
      author {
        node {
          name
        }
      }
      acf: acfBlog {
        featuredImage {
          id
        }
        content
      }
`

export { imageQuery, blogsQuery };
