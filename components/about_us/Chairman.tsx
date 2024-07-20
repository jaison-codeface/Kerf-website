import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import sunil from "@/assets/images/about_us/Dr.Sunil K.jpg";
import Image from "next/image";
import { dummiDoctor } from "@/assets/images";

const Chairman = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page?.acf.sectionChairman;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}>
      <div className="flex flex-col h-full justify-center">
        <HeadTitle className="mt-1">{isData.title}</HeadTitle>
        <HeadSubtitle>{isData.subtitle}</HeadSubtitle>
        <SectionDescription className="mt-4">
          {isData.description.split("\r\n").map((item, idx) => (
            <React.Fragment key={idx}>
              {item} <br />
            </React.Fragment>
          ))}
        </SectionDescription>
      </div>

      <Image
        data-aos="fade-up"
        src={isData.image.sourceUrl ?? dummiDoctor}
        alt={isData.image.altText}
        width={isData.image.mediaDetails.width}
        height={isData.image.mediaDetails.height}
        className="w-full h-full object-cover overflow-hidden rounded-lg"
      />
    </SectionWrapper>
  );
};

export default Chairman;
