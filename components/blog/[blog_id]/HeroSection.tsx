import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import Image, { StaticImageData } from "next/image";
import React from "react";

const HeroSection = ({
  heroSectionImage,
  title,
  author,
}: {
  title: string;
  heroSectionImage: StaticImageData;
  author?: string | JSX.Element;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={heroSectionImage}
        alt=""
        className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh]"
      />

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom title={title} subtitle={author} />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
