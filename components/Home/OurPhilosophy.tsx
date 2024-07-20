import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import { NormalBtn } from "@/ui/buttons";
import mainImage from "@/assets/images/home/our philosophy.webp";
import Image from "next/image";
import ImageInBorder from "@/ui/ImageInBorder";
import ItalicizeLastLetters from "@/libs/hooks/ItalicizeLastLetters";

const OurPhilosophy = ({ data }: { data: HomePageType }) => {
  const isData = data.page?.acf.sectionAbout;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}>
      <div className="flex flex-col h-full justify-center">
        <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1">
          {ItalicizeLastLetters(isData.title, 2, true)}
        </HeadTitle>
        <SectionDescription className="mt-4">
          {isData.description}
        </SectionDescription>
        <NormalBtn href={`/${isData.buttonLink}`} className="mt-5 max-w-max">
          {isData.buttonText}
        </NormalBtn>
      </div>
      <ImageInBorder mainImage={isData.sectionImage.sourceUrl} />
    </SectionWrapper>
  );
};

export default OurPhilosophy;
