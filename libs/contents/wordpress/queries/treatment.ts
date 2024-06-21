import { departmentQuery, doctorQuery, imageQuery } from "./modules";

const data = (type: "all" | "single" | "related", id?: string) => {
  switch (type) {
    case "all":
      return `{
        treatmentCategorys {
            nodes {
              id
              name
              slug
              treatments {
                nodes {
                  title
                  slug
                }
              }
            }
          }
        }`;
    case "single":
      return `{
              treatments(where: {name: "${id}"}) {
                nodes {
                  title
                  treatmentCategorys {
                    nodes {
                      name
                      id
                      slug
                    }
                  }
                  acf: acfTreatment {
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
            }`;
    case "related":
      return `{
                treatmentCategory(id: "dGVybTo1") {
                  id
                  name
                  slug
                  treatments {
                    nodes {
                      title
                      slug
                    }
                  }
                }
              }`;
  }
};
export default data;
