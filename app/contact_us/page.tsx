import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import OurCenters from "@/components/contact_us/OurCenters ";
import GetDirection from "@/components/contact_us/GetDirection";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { dummiSectionHead } from "@/assets/images";

const page = async () => {
  const data: ContactUsType = await getContentFromWordPress("contact-us");
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: data.page.title,
      link: "javascript:void(0)",
    },
  ];
  return (
    <Layout pageTitle={breadcrumbs[1].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={
          data.page?.acf.pageHeader.headerBanner.sourceUrl ?? dummiSectionHead
        }
        title={data.page.title}
      />
      <OurCenters data={data} />
      <GetDirection data={data} />
    </Layout>
  );
};

export default page;
