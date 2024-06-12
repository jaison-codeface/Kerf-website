import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Doctor from "@/components/sections/Doctor";
import Blogs from "@/components/sections/Blogs";
import Content from "@/components/departments/[slug]/Content";

const page = () => {
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Departments",
      link: "",
    },
    {
      title: "Otology",
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
          link: "",
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
  const blogs = [
    {
      title:
        "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
      image: dummi,
      written: "onship between",
    },
    {
      title:
        "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
      image: dummi,
      written: "onship between",
    },
    {
      title:
        "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
      image: dummi,
      written: "onship between",
    },
    {
      title:
        "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
      image: dummi,
      written: "onship between",
    },
    {
      title:
        "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
      image: dummi,
      written: "onship between",
    },
  ];
  return (
    <Layout>
      <HeroSection breadcrumbs={breadcrumbs} bgImage={dummi} title="Otology" />
      <Content />
      <Doctor doctors={doctors} />
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default page;
