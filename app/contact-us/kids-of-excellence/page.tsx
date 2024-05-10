import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";
import React from "react";
import bg from "@/assets/images/our programmes/Kids Of Excellence bg.webp";
import Events from "@/components/contact-us/kids-of-excellence/Events";
import Guiding from "@/components/contact-us/kids-of-excellence/Guiding";

const page = () => {
  return (
    <Layout>
      <HeroSection
        heroSectionImage={bg}
        title="Kids Of Excellence"
        subtitle="Empowering the Next Generation through Unwavering Faith, Virtuous Character, and Divine Purpose: Raising Our Kids of Excellence as Beacons of Spiritual Fortitude."
      />
      <Guiding />
      <Events />
    </Layout>
  );
};

export default page;
