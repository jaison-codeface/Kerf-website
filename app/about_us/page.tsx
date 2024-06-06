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

const page = () => {
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
        bgImage={dummi}
        title={
          <>
            {" "}
            About Us - <span className="">Overview</span>
          </>
        }
      />
      <ExploreOurWorld />
      <ResearchFoundation />
      <Chairman />
      <VisionMission />
      <Partnering />
      <Testimonials />
    </Layout>
  );
};

export default page;
