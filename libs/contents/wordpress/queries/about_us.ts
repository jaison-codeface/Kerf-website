import { imageQuery } from "./modules";

const data = `{
  page(id: "cG9zdDo2Mg==") {
    id
    title
    acf: acfAboutPage {
      bannerImage {
        ${imageQuery}
      }
      sectionAboutKerf {
        title
        content
      }
      sectionChairman {
        title
        subtitle
        description
        image {
          ${imageQuery}
        }
      }
      sectionMedicalInsurance {
        title
        description
        companyLogo {
          logoImage {
           ${imageQuery}
          }
        }
      }
      exploreOurWorld {
        sectionTitle
        sectionSubtitle
        sectionImage {
          image {
           ${imageQuery}
          }
          sizes {
            hight
            width
          }
          logo {
           ${imageQuery}
          }
        }
        description
        boxContentText1
        boxContentText2
      }
      sectionTestimonials {
        title
        subtitle
        testimonials {
          name
          comment
          designation
          image {
            ${imageQuery}
          }
        }
      }
      sectionVision {
        sectionImage {
          ${imageQuery}
        }
        visionAndMission {
          title
          subtitle
          description
        }
      }
    }
  }
}`;

export default data;
