"use client";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import crRadios from "@/assets/images/corner radius.png";

import { dummiLogo, dummiSection } from "@/assets/images";
import Image from "next/image";

const ExploreOurWorld = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page?.acf.exploreOurWorld;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}>
      <div className="flex flex-col h-full justify-center">
        <HeadSubtitle>{isData.sectionSubtitle}</HeadSubtitle>
        <HeadTitle className="mt-1">{isData.sectionTitle}</HeadTitle>
        <SectionDescription className="mt-4">
          {isData.description}
        </SectionDescription>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center h-max w-full relative z-0 rounded-[20px] overflow-hidden">
        <Image
          src={isData.sectionImage.image.sourceUrl}
          alt=""
          width={isData.sectionImage.image.mediaDetails.width}
          height={isData.sectionImage.image.mediaDetails.height}
        />

        <div className="absolute left-0 bottom-0 pt-4 pr-4 rounded-tr-[20px] bg-white w-[28%]">
          <div className="bg-[#d7ece3] rounded-[20px] p-3   aspect-square">
            <div className="border-2 border-white rounded-[16px] ovh h-full w-full justify-center flex flex-col items-center text-center text-[#415061] p-3">
              <Image
                src={isData.sectionImage.logo.sourceUrl ?? dummiLogo}
                alt=""
                width={isData.sectionImage.logo.mediaDetails.width}
                height={isData.sectionImage.logo.mediaDetails.height}
              />
            </div>
          </div>
          <Image
            src={crRadios}
            alt=""
            className="absolute left-0 top-[-24px] h-[24px] w-[24px] aspect-square object-contain rotate-180"
          />
          <Image
            src={crRadios}
            alt=""
            className="absolute bottom-0 right-[-24px] h-[24px] w-[24px] aspect-square object-contain rotate-180"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExploreOurWorld;
