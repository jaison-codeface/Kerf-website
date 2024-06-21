import { imageQuery } from "./modules";

const contact_us = `{
  page(id: "cG9zdDoxMjc=") {
    title
    slug
    acf: acfContactUsPage {
      bannerImage {
        ${imageQuery}
      }
      ourCenters {
        title
        subtitle
        centners {
          backgroundColor
          title
          links {
            title
            icon {
              ${imageQuery}
            }
            link
          }
        }
      }
      getDirections {
        title
        map {
          link
          image {
            ${imageQuery}
          }
        }
        leftImage {
          ${imageQuery}
        }
      }
    }
  }
}`;
export default contact_us;
