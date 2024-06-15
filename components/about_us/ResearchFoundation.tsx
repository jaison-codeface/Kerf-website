import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { HeadTitle, SectionDescription } from "@/ui/Typography";

const ResearchFoundation = () => {
  return (
    <SectionWrapper
      classTop={`relative z-0 ${main_padding.y}`}
      classBottom={` bg-[#dffeff] rounded-3xl md:py-20 py-12 md:px-14 px-8 flex-col gap-8 `}>
      <HeadTitle className=" md:w-3/4">
        Kerala ENT Research Foundation(KERF) is a SIngle Specialty hospital with
        critical care for Ear Nose and Throat
      </HeadTitle>
      <SectionDescription className="[column-count:2] [column-gap:20px] [column-width:250px] z-20">
        Our institution provides an extensive infrastructure of fully
        Computerized and Network Hospital Information System (HIS), Clinical
        Laboratory, Speech & Voice Thera- py, Audiology and Physiotherapy
        departments. Our team is comprised of ENT Surgeons, Physician and other
        pro- fessional of high caliber and experience.Our hospital dedicates its
        advance facilities and knows how to research and development making
        further inwards in the field of health and medicines. Our Research
        Foundation is based on the very essence of life care, compassion and
        com- mitment. We work forward enriching lives, to promote good health
        and make every moment count.
      </SectionDescription>
      {/* textures */}
      <RosePetalTexture className="rotate-180 -top-20 right-0 z-10 opacity-60" />
    </SectionWrapper>
  );
};

export default ResearchFoundation;
