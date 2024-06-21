import { departmentQuery, doctorQuery, imageQuery } from "./modules";

const data = (type: "all" | "single", id?: string) =>
  type === "all"
    ? `{
        departmentsTaxonomies {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }`
    : `{
        departmentsTaxonomies(where: {slug: "${id}"}) {
          edges {
            node {
              id
              name
              slug
              doctors {
                  nodes {
                   ${doctorQuery}
                  }
              }
              departments {
                nodes {
                  ${departmentQuery}
                }
              }
            }
          }
        }
      }`;

export default data;
