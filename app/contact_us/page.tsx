import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import OurCenters from "@/components/contact_us/OurCenters ";
import GetDirection from "@/components/contact_us/GetDirection";

const page = () => {
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "javascript:void(0)",
    },
  ];
  return (
    <Layout>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={dummi}
        title="Contact Us"
      />
      <OurCenters />
      <GetDirection />
    </Layout>
  );
};

export default page;
