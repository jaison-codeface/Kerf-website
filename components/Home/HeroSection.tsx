import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, SectionDescription } from "@/ui/Typography";

import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";

const HeroSection = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper
      classTop="bg-gradient-to-tl from-kerf-blue via-transparent to-transparent via-40% relative z-0"
      classBottom="h-full justify-start min-h-svh grid  max-md:pt-40 md:gap-0 gap-10 items-center">
      <div className="flex flex-col">
        <h1
          data-aos="fade-up"
          data-aos-anchor="#top"
          className="text-kerf-blue-dark md:text-[3.7rem] !tracking-[0.5px] !leading-[1.2] text-4xl font-bold md:max-w-[600px]">
          {data.page.acf.homeBanner.sectionTitle}
        </h1>
        <SectionDescription className="md:mt-4 mt-2 md:max-w-[500px]">
          {data.page.acf.homeBanner.sectionDescription}
        </SectionDescription>
      </div>
      <div className="flex items-end justify-end w-full h-full right-0 bottom-0 md:absolute -z-10 overflow-visible ">
        <Image
          src={data.page.acf.homeBanner.sectionImage.sourceUrl}
          alt={data.page.acf.homeBanner.sectionImage.altText}
          width={data.page.acf.homeBanner.sectionImage.mediaDetails.width}
          height={data.page.acf.homeBanner.sectionImage.mediaDetails.height}
          priority
          className="object-contain md:h-[calc(100%-115px)] h-full -z-0  object-right-bottom"
        />
      </div>

      {/* textures */}
      <RosePetalTexture className="rotate-180 top-0 right-0 -z-20" />
      <RosePetalTexture className="-bottom-40 left-0 -z-20" />
    </SectionWrapper>
  );
};

export default HeroSection;
