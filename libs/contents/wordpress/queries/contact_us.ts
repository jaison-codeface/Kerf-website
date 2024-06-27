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
        title
        sectionImage {
          ${imageQuery}
        }
        mapImage {
          ${imageQuery}
        }
        directionLink
      }
    }
  }
}`;
export default contact_us;
