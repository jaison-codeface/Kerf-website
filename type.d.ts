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
  id: string;
  title: string;
  slug: string;
  acf: {
    bannerImage: ImageType;
    sectionImage: ImageType;
    content: string;
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

interface DoctorType {
  doctors: {
    nodes: Array<{
      title: string;
      slug: string;
      acf: {
        designation: string;
        bannerImage: ImageType;
        image: ImageType;
        content: string;
      };
    }>;
  };
}
interface DoctorPageType {
  page: {
    id: string;
    title: string;
    acf: {
      bannerImage: ImageType;
      doctorSection: {
        title: string;
        subtitle: string;
      };
    };
  };
}

interface DepartmentsTaxonomiesType {
  departmentsTaxonomies: {
    edges: Array<{
      node: {
        id: string;
        name: string;
        slug: string;
        doctors: {
          nodes: Array<{
            title: string;
            slug: string;
            acf: {
              designation: string;
              bannerImage: ImageType;
              image: ImageType;
              content: string;
            };
          }>;
        };
        departments: {
          nodes: DepartmentsType[];
        };
      };
    }>;
  };
}

interface TreatmentCategoriesType {
  treatmentCategorys: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
      treatments: {
        nodes: Array<{
          title: string;
          slug: string;
        }>;
      };
    }>;
  };
}
interface TreatmentType {
  treatments: {
    nodes: Array<{
      title: string;
      treatmentCategorys: {
        nodes: Array<{
          name: string;
          id: string;
          slug: string;
        }>;
      };
      acf: {
        bannerImage: ImageType;
        sectionImage: ImageType;
        content: string;
        treatmentTitle: {
          id: string;
          name: string;
          slug: string;
        };
      };
    }>;
  };
}
interface TreatmentsRelatedType {
  treatmentCategory: {
    id: string;
    name: string;
    slug: string;
    treatments: {
      nodes: Array<{
        title: string;
        slug: string;
      }>;
    };
  };
}
interface TreatmentsRelatedDoctorsType {
  treatmentsTaxonomies: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
      doctors: {
        nodes: Array<{
          title: string;
          slug: string;
          acf: {
            designation: string;
            bannerImage: ImageType;
            image: ImageType;
            content: string;
          };
        }>;
      };
    }>;
  };
}

interface FooterType {
  utility: {
    id: string;
    title: string;
    acf: {
      logo: ImageType;
      description: string;
      footerLinks: Array<{
        title: string;
        links: Array<{
          link?: string;
          text: string;
        }>;
      }>;
      socialMedia: Array<{
        link: any;
        icon: ImageType;
      }>;
    };
  };
}
interface HeaderType {
  utility: {
    id: string;
    title: string;
    acf: {
      logo: {
        id: string;
      };
      headerLinks: Array<{
        [x: string]: { title: string; link: string }[];
        dropDown: { title: string; links: { title: string; link: string }[] }[];
        title: string;
        link?: string;
      }>;
    };
  };
}
interface SeoType {
  utility: {
    acf: {
      favIcon: ImageType;
      description: string;
      keyWords: string;
      title: string;
    };
  };
}

interface UtilitiesType {
  treatments: TreatmentCategoriesType;
  departments: DepartmentsTaxonomiesType;
  footer: FooterType;
  header: HeaderType;
  seo: SeoType;
}
