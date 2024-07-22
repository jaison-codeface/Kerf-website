import { imageQuery } from "./modules";

const contact_us = `{
  page(id: "cG9zdDoxMjc=") {
    title
    acf : acfContactUs {
      pageHeader {
        headerBanner {
          ${imageQuery}
        }
        pageTitle
      }
      firstSection {
        subtitle
        sectionTitle
        locations {
          title
          links {
            icon {
              ${imageQuery}
            }
            link
            title
          }
        }
        backgroundColors {
          color
        }
      }
      secondSection {
        sectionImage {
          ${imageQuery}
        }
        locations {
          title
          link
          image {
            ${imageQuery}
          }
        }
      }
    }
  }
}`;
export default contact_us;
