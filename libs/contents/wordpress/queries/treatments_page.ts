import { imageQuery } from "./modules";

const data = `
  {
    page(id: "cG9zdDo1NTA=") {
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
  }
`;

export default data;
