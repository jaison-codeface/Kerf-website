type ImageType = {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
};
interface HomePageType {
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
      sectionContactUs: {
        sectionDescription: string;
        sectionTitle: string;
        subtitle: string;
        title: string;
        sectionImage: ImageType;
        links: {
          icon: ImageType;
          link: string;
          linkTitle: string;
          title: string;
        }[];
      };
      sectionSpecialties: {
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink: string;
        specialties: {
          image: ImageType;
          title: string;
        }[];
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
  blogs: {
    nodes: Array<{
      title: string;
      slug: string;
      excerpt: string;
      date: string;
      author: {
        node: {
          name: string;
        };
      };
      featuredImage: ImageType;
    }>;
  };
}

interface AboutUsPageType {
  page: {
    id: string;
    title: string;
    acf: {
      bannerImage: ImageType;
      sectionAboutKerf: {
        title: string;
        content: string;
      };
      sectionChairman: {
        title: string;
        subtitle: string;
        description: string;
        image: ImageType;
      };
      sectionMedicalInsurance: {
        title: string;
        description: string;
        companyLogo: Array<{
          logoImage: ImageType;
        }>;
      };
      exploreOurWorld: {
        sectionTitle: string;
        sectionSubtitle: string;
        sectionImage: {
          image: ImageType;
          sizes: {
            hight: string;
            width: number;
          };
        };
        description: string;
        boxContentText1: number;
        boxContentText2: string;
      };
      sectionTestimonials: {
        title: string;
        subtitle: string;
        testimonials: Array<{
          name: any;
          comment: any;
          designation: any;
          image: ImageType;
        }>;
      };
      sectionVision: {
        sectionImage: ImageType;
        visionAndMission: Array<{
          title: string;
          subtitle: string;
          description: string;
        }>;
      };
    };
  };
}
