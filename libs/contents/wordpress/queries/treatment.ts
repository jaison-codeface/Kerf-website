import { departmentQuery, doctorQuery, imageQuery } from "./modules";

const data = (
  type: "all" | "single" | "related" | "related doctors",
  id?: string
) => {
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
                  id
                  acf: acfTreatment {
                    treatmentTitle {
                      name
                    }
                    content
                    bannerImage {
                      ${imageQuery}
                    }
                  }
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
                    treatmentTitle {
                      id
                      name
                      slug
                    }
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
    case "related doctors":
      return `{
              treatmentsTaxonomies(where: {slug: "${id}"}) {
                nodes {
                  id
                  name
                  slug
                  doctors {
                    nodes {
                      ${doctorQuery}
                    }
                  }
                }
              }
            }`;
  }
};
export default data;
