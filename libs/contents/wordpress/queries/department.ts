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
        departmentsTaxonomies(where: {name: "${id}"}) {
          edges {
            node {
              id
              name
              doctors {
                edges {
                  node {
                   ${doctorQuery}
                  }
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
