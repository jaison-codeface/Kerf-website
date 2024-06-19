type ImageType = {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
};
interface homePageType {
  page: {
    title: string;
    slug: string;
    id: string;
    acf: {
      homeBanner: {
        sectionImage: ImageType;
        sectionTitle: string;
        sectionDescription: string;
      };
      sectionAbout: {
        title: string;
        subtitle: string;
        sectionImage: ImageType;
        description: string;
        buttonText: string;
        buttonLink: string;
      };
      sectionBlog: {
        sectionTitle: string;
        sectionSubtitle: string;
      };
      sectionPhilosophy: {
        sectionDescription: string;
        sectionTitle: string;
        subtitle: string;
        title: string;
        sectionImage: ImageType;
      };
      sectionSpecialties: {
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink: string;
      };
      sectionTreatments: {
        title: string;
        subtitle: string;
        services: Array<{
          image: ImageType;
          service: string;
        }>;
      };
    };
  };
}
