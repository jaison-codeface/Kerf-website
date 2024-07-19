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
      phoneNumber
      footerLinks {
        title
        links {
          link
          text
           icon {
            ${imageQuery}
           }
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
const seo = `{
  utility(id: "cG9zdDoyMzA=") {
    acf: acfSeo {
      favIcon {
       ${imageQuery}
      }
      description
      keyWords
      title
    }
  }
}`;

const data = (type: "footer" | "header" | "seo") => {
  const query = {
    footer: footer,
    header: header,
    seo: seo,
  };

  // @ts-ignore
  return query[type];
};

export default data;
