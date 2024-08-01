"use client";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import Image from "next/image";
import { dummiDoctor } from "@/assets/images";
import WordPressRichText from "../WordPressRichText";
import { useState } from "react";
import { NormalBtn } from "@/ui/buttons";

const Chairman = ({ data }: { data: AboutUsPageType }) => {
  const [readMore, setReadMore] = useState(false);
  const isData = data.page?.acf.sectionChairman;

  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-start h-max z-50`}>
      <div className="flex flex-col h-full justify-center">
        <HeadSubtitle>{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 md:text-5xl">{isData.title}</HeadTitle>
        <div
          className={`mt-4 duration-300 md:text-[1.2rem] text-base md:leading-[1.8] leading-[180%] overflow-hidden ${readMore ? "max-md:max-h-[99999px]" : "md:line-clamp-[14] max-md:max-h-[300px]"}`}>
          <WordPressRichText htmlString={isData.description} />
        </div>
        <button
          name="kerf btn"
          onClick={() => setReadMore(!readMore)}
          className="-mt-4 pt-8 flex items-center justify-start w-full bg-gradient-to-t from-white  to-transparent">
          <NormalBtn>{readMore ? "Read Less" : "Read More"}</NormalBtn>
        </button>
      </div>

      <Image
        data-aos="fade-up"
        src={isData.image.sourceUrl ?? dummiDoctor}
        alt={isData.image.altText}
        width={isData.image.mediaDetails.width}
        height={isData.image.mediaDetails.height}
        className="w-full h-auto object-center overflow-hidden rounded-lg"
      />
    </SectionWrapper>
  );
};

export default Chairman;
