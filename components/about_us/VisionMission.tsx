import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import ImageInBorder from "@/ui/ImageInBorder";
import mainImage from "@/assets/images/home/our philosophy.webp";

const VisionMission = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page?.acf.sectionVision;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-2 md:gap-20 gap-10 items-center  z-50`}>
      <div data-aos="fade-up" className=" grid max-h-[620px]">
        <ImageInBorder
          mainImage={isData.sectionImage.sourceUrl}
          className="overflow-hidden"
        />
      </div>
      <div className="grid grid-rows-2 gap-6 ">
        {isData.visionAndMission.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            className={`${
              idx === 0 ? "bg-[#dffeff]" : "bg-[#e9ecf1]"
            } px-8 py-10 w-full h-full rounded-2xl`}>
            <HeadSubtitle className="text-xs uppercase"> {item.subtitle}</HeadSubtitle>
            <h3 className="text-2xl  capitalize mt-1 font-semibold">
              {item.title}
            </h3>

            <SectionDescription className="mt-2 md:text-[1.2rem] !leading-[2rem] text-base">
              {item.description}
            </SectionDescription>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisionMission;
