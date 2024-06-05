import Chairman from "@/components/about_us/Chairman";
import ExploreOurWorld from "@/components/about_us/ExploreOurWorld";
import HeroSection from "@/components/about_us/HeroSection";
import Partnering from "@/components/about_us/Partnering";
import ResearchFoundation from "@/components/about_us/ResearchFoundation";
import Testimonials from "@/components/about_us/Testimonials";
import VisionMission from "@/components/about_us/VisionMission";
import Layout from "@/components/layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <HeroSection />
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
