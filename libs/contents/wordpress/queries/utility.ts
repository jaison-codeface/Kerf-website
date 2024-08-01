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
      phoneNumber {
        link
        title
      }
      opTime {
        time
        title
      }
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

const bookAndAppointment = `{
  utility(id: "cG9zdDo0NTQ=") {
    acf: acfBookAndAppointment {
      title
      link
      backgroundImageForTreatmentSection {
      ${imageQuery}
      }
    }
  }
}`;

const data = (type: "footer" | "header" | "seo" | "bookAndAppointment") => {
  const query = {
    footer,
    header,
    seo,
    bookAndAppointment,
  };

  // @ts-ignore
  return query[type];
};

export default data;
