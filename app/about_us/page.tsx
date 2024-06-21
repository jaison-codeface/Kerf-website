import Chairman from "@/components/about_us/Chairman";
import ExploreOurWorld from "@/components/about_us/ExploreOurWorld";
import HeroSection from "@/components/sections/HeroSection";
import Partnering from "@/components/about_us/Partnering";
import ResearchFoundation from "@/components/about_us/ResearchFoundation";
import Testimonials from "@/components/about_us/Testimonials";
import VisionMission from "@/components/about_us/VisionMission";
import Layout from "@/components/layout";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

const page = async () => {
  const data: AboutUsPageType = await getContentFromWordPress("about");
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Overview",
      link: "javascript:void(0)",
    },
  ];
  return (
    <Layout>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={data.page.acf.bannerImage.sourceUrl}
        title={
          <>
            {" "}
            About Us - <span className="">Overview</span>
          </>
        }
      />
      <ExploreOurWorld data={data} />
      <ResearchFoundation data={data} />
      <Chairman data={data} />
      <VisionMission data={data} />
      <Partnering data={data} />
      <Testimonials data={data} />
    </Layout>
  );
};

export default page;
