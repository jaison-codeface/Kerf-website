import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import bg from "@/assets/images/Home/hero section bg.webp";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import main_padding from "@/styles/padding";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={bg}
        alt="" 
        className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh] object-top "
      />

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom
          title="Welcome to Loving Grace Assembly"
          description="Loving Grace Assembly, born from spiritual fasting, provides expatriates a nurturing community to study scripture, discover purpose, and deepen their faith through transformative teachings and divine wisdom."
          btn1={{
            title: "become a member",
          }}
          btn2={{
            title: "Experience more sermons",
          }}
        />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
