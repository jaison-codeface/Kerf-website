"use client";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import main_padding from "@/styles/padding";

import { dummiLogo, dummiSection } from "@/assets/images";
import Image from "next/image";
import IconBox from "@/ui/IconBox";

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

        <IconBox
          image={isData?.sectionImage?.logo?.sourceUrl}
          sizes={{ main: "w-[28%]" }}
        />
      </div>
    </SectionWrapper>
  );
};

export default ExploreOurWorld;
