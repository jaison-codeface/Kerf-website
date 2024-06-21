const imageQuery = `sourceUrl
          altText
          mediaDetails {
            width
            height
          }`;

const blogsQuery = `
      title
      slug
      excerpt
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
`

export { imageQuery, blogsQuery };
