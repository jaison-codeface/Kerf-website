import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, SectionDescription } from "@/ui/Typography";

import dummi from "@/assets/images/home/hero session e.png";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";

const HeroSection = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper
      classTop="bg-gradient-to-tl from-kerf-blue via-transparent to-transparent via-40% relative z-0"
      classBottom="h-full justify-center min-h-svh grid md:grid-cols-2 max-md:pt-40 md:gap-0 gap-10 items-center">
      <div className="flex flex-col ">
        <h1
          data-aos="fade-up"
          data-aos-anchor="#top"
          className="text-kerf-blue-dark md:text-5xl text-4xl font-bold  ">
          {data.page.acf.homeBanner.sectionTitle.split(",").map((item, idx) => (
            <React.Fragment key={idx}>
              {item} <br />
            </React.Fragment>
          ))}
        </h1>
        <SectionDescription className="md:mt-4 mt-2">
          {data.page.acf.homeBanner.sectionDescription}
        </SectionDescription>
      </div>
      <div className="flex items-center justify-center w-full h-full relative z-0 overflow-visible ">
        <Image
          src={data.page.acf.homeBanner.sectionImage.sourceUrl}
          alt={data.page.acf.homeBanner.sectionImage.altText}
          width={data.page.acf.homeBanner.sectionImage.mediaDetails.width}
          height={data.page.acf.homeBanner.sectionImage.mediaDetails.height}
          priority
          className="object-contain h-full -z-0  object-bottom"
        />
      </div>

      {/* textures */}
      <RosePetalTexture className="rotate-180 top-0 right-0" />
      <RosePetalTexture className="-bottom-40 left-0" />
    </SectionWrapper>
  );
};

export default HeroSection;
