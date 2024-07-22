import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiSection } from "@/assets/images";

const TreatmentsAndServices = ({ data }: { data: HomePageType }) => {
  const isData = data.page?.acf.sectionTreatments;
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} flex-col md:items-center `}>
      <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1">
        {isData.title}
      </HeadTitle>
      <div className="grid md:grid-cols-3 md:gap-10 gap-8 w-full max-w-[900px] mt-8">
        {isData.services.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className="flex flex-col  justify-between items-center bg-gradient-to-t from-kerf-teal via-kerf-teal-light to-kerf-teal-light md:rounded-3xl rounded-2xl overflow-hidden">
            <div />
            <Image
              src={item.image.sourceUrl ?? dummiSection}
              alt={item.image.altText}
              width={200}
              height={200}
              className="object-contain aspect-square md:px-0 md:my-10 px-6 my-7"
            />
            <p className="flex items-center justify-center text-center px-4 py-3 bg-gradient-to-r from-[#539fbd] to-[#3682a0] w-full text-white font-black capitalize text-2xl">
              {item.service}
            </p>
          </div>
        ))}
      </div>
      <RosePetalTexture className="-bottom-32 right-0 rotate-180 z-10" />
    </SectionWrapper>
  );
};

export default TreatmentsAndServices;
