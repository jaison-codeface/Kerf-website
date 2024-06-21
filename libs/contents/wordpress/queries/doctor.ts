import { imageQuery } from "./modules";

const data = (type: "all" | "single" | "page", id?: string) => {
  switch (type) {
    case "all":
      return `{
                doctors {
                  nodes {
                    title
                    slug
                    acf: acfDoctor {
                      image {
                        ${imageQuery}
                      }
                    }
                  }
                }
              }`;
    case "single":
      return `{
                doctors (where: {name: "${id}"}) {
                  nodes {
                    title
                    slug
                    acf: acfDoctor {
                      bannerImage {
                      ${imageQuery}
                      }
                      image {
                      ${imageQuery}
                      }
                      content
                    }
                  }
                }
              }`;
    case "page":
      return `{
                page(id: "cG9zdDoxNzk=") {
                  id
                  title
                  acf: acfDoctors {
                    bannerImage {
                      ${imageQuery}
                    }
                    doctorSection {
                      title
                      subtitle
                    }
                  }
                }
              }`;
  }
};

export default data;
