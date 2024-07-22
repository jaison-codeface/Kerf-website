import { imageQuery } from "./modules";

const data = `
{
  page(id: "cG9zdDo0NzM=") {
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
