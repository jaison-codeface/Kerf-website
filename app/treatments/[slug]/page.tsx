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
  const [data, blogs]: [TreatmentType, BlogsType] = await Promise.all([
    getContentFromWordPress("treatment", params.slug),
    getContentFromWordPress("blogs"),
  ]);
  const isData = data.treatments.nodes[0];

  const relatedTreatmentsData = () => {
    // @ts-ignore
    const d = [];
    if (isData.treatmentCategorys.nodes.length > 0) {
      isData.treatmentCategorys.nodes.map(async (item) => {
        const t: TreatmentsRelatedType = await getContentFromWordPress(
          "treatments-related",
          item.id
        );

        d.push(...t.treatmentCategory.treatments.nodes);
      });
    }
    // @ts-ignore
    return [...d];
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
      {/* <Doctor doctors={doctors} /> */}
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default page;
