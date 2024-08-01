import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, SectionDescription } from "@/ui/Typography";

import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiSectionHead } from "@/assets/images";
import { BookAppointmentBtn } from "@/ui/buttons";
import Banner from "@/assets/images/home/Banner";
import bannerImg from "@/assets/images/home/banner.webp";

const HeroSection = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper
      classTop="bg-gradient-to-tl from-kerf-blue via-transparent to-transparent via-40% relative z-0"
      classBottom="h-full justify-start min-h-svh grid  max-md:pt-40 md:gap-0 gap-10 items-center">
      <div className="flex flex-col md:pt-24">
        <h1
          data-aos="fade-up"
          data-aos-anchor="#top"
          className="text-kerf-blue-dark md:text-[3.7rem] !leading-[1.2] text-4xl font-extrabold md:max-w-[700px]">
          {data.page?.acf.homeBanner.sectionTitle}
        </h1>
        <SectionDescription className="md:mt-4 mt-2 md:max-w-[400px]">
          {data.page?.acf.homeBanner.sectionDescription}
        </SectionDescription>
        <BookAppointmentBtn />
      </div>
      <div className="flex items-end justify-end w-full h-full right-0 bottom-0 md:absolute -z-10 overflow-visible ">
        <Image
          src={data.page?.acf.homeBanner.sectionImage.sourceUrl ?? bannerImg}
          alt={data.page?.acf.homeBanner.sectionImage.altText}
          width={data.page?.acf.homeBanner.sectionImage.mediaDetails.width}
          height={data.page?.acf.homeBanner.sectionImage.mediaDetails.height}
          priority
          className="object-contain md:h-[calc(100%-125px)] h-full -z-0  object-right-bottom"
        />
        <Banner className="md:h-[calc(100%-125px)] h-max z-10 md:w-auto w-full absolute bottom-0 right-0" />
      </div>

      {/* textures */}
      <RosePetalTexture className="rotate-180 top-0 right-0 -z-20" />
      <RosePetalTexture className="-bottom-40 left-0 -z-20" />
    </SectionWrapper>
  );
};

export default HeroSection;
