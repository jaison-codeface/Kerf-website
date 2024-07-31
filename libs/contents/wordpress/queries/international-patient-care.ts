import { imageQuery } from "./modules";
const data = `{

  page( id :"cG9zdDo2MTQ=") {
    title
    acf: acfDepartments {
      bannerImage {
        ${imageQuery}
      }
      content
    }
    cta : acfCta {
          backgroundImage {
            ${imageQuery}
          }
          title
  }}
}`;

export default data;
