import { imageQuery } from "./modules";

const footer = `{
  utility(id: "cG9zdDoyMDY=") {
    id
    title
    acf: acfFooter {
      logo {
        ${imageQuery}
      }
      description
      footerLinks {
        title
        links {
          link
          text
        }
      }
      socialMedia {
        link
        icon {
          ${imageQuery}
        }
      }
    }
  }
}`;
const header = `{
  utility(id: "cG9zdDoyMjM=") {
    id
    title
    acf: acfHeader {
      logo {
        ${imageQuery}
      }
      headerLinks {
        title
        link
      }
    }
  }
}`;

const data = (type: "footer" | "header") => {
  const query = {
    footer: footer,
    header: header,
  };

  // @ts-ignore
  return query[type];
};

export default data;
