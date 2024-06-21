import { imageQuery } from "./modules";

const data = (type: "all" | "single", id?: string) =>
  type === "all"
    ? `{
  departments {
    edges {
      node {
        id
        title
        slug
        acf : acfDepartments {
          bannerImage {
            ${imageQuery}
          }
          sectionImage {
             ${imageQuery}
          }
          content
        }
      }
    }
  } 
}`
    : `{
  departments(where: {name: "${id}"}) {
    edges {
      node {
        id
        title
        slug
        acf : acfDepartments {
          bannerImage {
            ${imageQuery}
          }
          sectionImage {
             ${imageQuery}
          }
          content
        }
      }
    }
  } 
}`;

export default data;
