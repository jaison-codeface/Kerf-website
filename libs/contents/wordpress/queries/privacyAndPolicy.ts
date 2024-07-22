import { imageQuery } from "./modules";

const data = `
{
  page(id: "cG9zdDoz") {
    acf: acfPrivacyAndPolicy {
      bannerImage {
        ${imageQuery}
      }
      content
    }
  }
}
`;

export default data;
