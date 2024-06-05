import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import { NormalBtn } from "@/ui/buttons";
import mainImage from "@/assets/images/home/our philosophy.webp";
import Image from "next/image";
import ImageInBorder from "@/ui/ImageInBorder";

const OurPhilosophy = () => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}
    >
      <div className="flex flex-col h-full justify-center">
        <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
        <HeadTitle className="mt-1">We will treat you well</HeadTitle>
        <SectionDescription className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </SectionDescription>
        <NormalBtn className="mt-5 max-w-max">MORE ABOUT US</NormalBtn>
      </div>
      <ImageInBorder mainImage={mainImage} />
    </SectionWrapper>
  );
};

export default OurPhilosophy;
