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
          ${imageQuery}
        }
        content
      }
`;

export { imageQuery, blogsQuery };
