import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { HeadTitle, SectionDescription } from "@/ui/Typography";

const ResearchFoundation = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page.acf.sectionAboutKerf;
  return (
    <SectionWrapper
      classTop={`relative z-0 ${main_padding.y}`}
      classBottom={` bg-[#dffeff] rounded-3xl md:py-20 py-12 md:px-14 px-8 flex-col gap-8 `}>
      <HeadTitle className=" md:w-3/4">{isData.title}</HeadTitle>
      <SectionDescription className="[column-count:2] [column-gap:20px] [column-width:250px] z-20">
        {isData.content}
      </SectionDescription>
      {/* textures */}
      <RosePetalTexture className="rotate-180 -top-20 right-0 z-10 opacity-60" />
    </SectionWrapper>
  );
};

export default ResearchFoundation;
