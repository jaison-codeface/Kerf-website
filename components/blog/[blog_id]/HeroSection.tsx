import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import Image, { StaticImageData } from "next/image";
import React from "react";

const HeroSection = ({
  heroSectionImage,
  subtitle,
  title,
  author,
  imageContain,
}: {
  title: string;
  subtitle: string;
  heroSectionImage: StaticImageData;
  author: string | JSX.Element;
  imageContain?: boolean | undefined;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      {imageContain ? (
        <SectionWrapper>
          <div className=" mt-28">
            <Image
              src={heroSectionImage}
              alt=""
              className="object-contain object-left h-full w-max -z-10 sm:max-h-[80vh] rounded-[10px] overflow-hidden"
            />
          </div>
        </SectionWrapper>
      ) : (
        <Image
          src={heroSectionImage}
          alt=""
          className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh]"
        />
      )}

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom
          title={title}
          description={subtitle}
          subtitle={author}
        />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
