import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Doctor from "@/components/sections/Doctor";
import Blogs from "@/components/sections/Blogs";
import Content from "@/components/treatments/[slug]/Content";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

const page = async ({ params }: { params: { slug: string } }) => {
  const [data, treatments, treatmentsRelatedDoctors, blogs]: [
    TreatmentType,
    TreatmentCategoriesType,
    TreatmentsRelatedDoctorsType,
    BlogsType,
  ] = await Promise.all([
    getContentFromWordPress("treatment", params.slug),
    getContentFromWordPress("treatments"),
    getContentFromWordPress("treatments-related doctors", params.slug),
    getContentFromWordPress("blogs"),
  ]);
  const isData = data.treatments.nodes[0];

  const relatedTreatmentsData = () => {
    if (isData) {
      return isData.treatmentCategorys.nodes.flatMap((category) => {
        const matchingCategory = treatments.treatmentCategorys.nodes.find(
          (item) => item.id === category.id
        );
        return matchingCategory
          ? matchingCategory.treatments.nodes
          : treatments.treatmentCategorys.nodes.flatMap(
              (item) => item.treatments.nodes
            );
      });
    }
  };

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Treatments",
      link: "",
    },
    {
      title: isData.title,
      link: "",
    },
  ];

  const doctors = [
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/gdggdgg",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/gdggdgg",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/iufcvt",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/wwdfcgg",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
  ];

  return (
    <Layout>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData.acf.bannerImage.sourceUrl}
        title={isData.title}
      />
      <Content
        leftData={isData}
        relatedTreatmentsData={relatedTreatmentsData()}
      />
      <Doctor
        doctors={
          treatmentsRelatedDoctors.treatmentsTaxonomies.nodes[0].doctors.nodes
        }
      />
      <Blogs blogs={blogs.blogs.nodes} />
    </Layout>
  );
};

export default page;
