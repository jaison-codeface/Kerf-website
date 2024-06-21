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

interface ContactUsType {
  page: {
    title: string;
    slug: string;
    acf: {
      bannerImage: ImageType;
      ourCenters: {
        title: string;
        subtitle: string;
        centners: Array<{
          backgroundColor: string;
          title: any;
          links: Array<{
            title: string;
            icon: ImageType;
            link: string;
          }>;
        }>;
      };
      getDirections: {
        title: any;
        map: {
          link: string;
          image: ImageType;
        };
        leftImage: ImageType;
      };
    };
  };
}

interface DepartmentsType {
  departments: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        slug: string;
        acf: {
          bannerImage: ImageType;
          sectionImage: ImageType;
          content: string;
        };
      };
    }>;
  };
}
interface BlogsType {
  blogs: {
    nodes: Array<{
      title: string;
      date: string;
      author: {
        node: {
          name: string;
        };
      };
      acf: {
        featuredImage: ImageType;
        content: string;
      };
    }>;
  };
}
