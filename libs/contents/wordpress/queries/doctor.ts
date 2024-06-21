import { doctorQuery, imageQuery } from "./modules";

const data = (type: "all" | "single" | "page", id?: string) => {
  switch (type) {
    case "all":
      return `{
                doctors {
                  nodes {
                    ${doctorQuery}
                    }
                  }
                }
              }`;
    case "single":
      return `{
                doctors (where: {name: "${id}"}) {
                  nodes {
                     ${doctorQuery}
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
