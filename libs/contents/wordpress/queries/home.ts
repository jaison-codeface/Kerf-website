import { blogsQuery, imageQuery } from "./modules";
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
      sectionContactUs {
        sectionDescription
        sectionTitle
        subtitle
        title
        sectionImage {
           ${imageQuery}
        }
        links {
          icon {
           ${imageQuery}
          }
          link
          linkTitle
          title
        }
      }
      sectionSpecialties {
        title
        subtitle
        buttonText
        buttonLink
        specialties {
          image {
           ${imageQuery}
          }
          title
        }
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
  blogs(where: {orderby: {field: MODIFIED, order: DESC}}, last: 14)  {
  nodes { 
    ${blogsQuery}
    }
  }
}`;

export default data;
