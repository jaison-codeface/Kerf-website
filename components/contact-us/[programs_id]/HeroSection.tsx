import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import Image, { StaticImageData } from "next/image";
import React from "react";

const HeroSection = ({
  heroSectionImage,
  subtitle,
  title,
  statement,
}: {
  title: string;
  subtitle: string;
  heroSectionImage: StaticImageData;
  statement?: boolean | undefined;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={heroSectionImage}
        alt=""
        className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh]  "
      />

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom
          title={title}
          description={subtitle}
          subtitle={statement ? "Statement" : ""}
        />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
