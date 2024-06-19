import { imageQuery } from "./modules";
const data = `{
  page(id: "cG9zdDo3") {
    title
    slug
    id
    acf: acfHomePage {
      homeBanner {
        sectionImage {
          ${imageQuery}
        }
        sectionTitle
        sectionDescription
      }
      sectionAbout {
        title
        subtitle
        sectionImage {
           ${imageQuery}
        }
        description
        buttonText
        buttonLink
      }
      sectionBlog {
        sectionTitle
        sectionSubtitle
      }
      sectionPhilosophy {
        sectionDescription
        sectionTitle
        subtitle
        title
        sectionImage {
           ${imageQuery}
        }
      }
      sectionSpecialties {
        title
        subtitle
        buttonText
        buttonLink
      }
      sectionTreatments {
        title
        subtitle
        services {
          image {
             ${imageQuery}
          }
          service
        }
      }
    }
  }
}`;

export default data;
