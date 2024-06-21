import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import dummi from "@/assets/images/home/ear.webp";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";

const data = [
  {
    title: "Our Ear",
    icon: dummi,
  },
  {
    title: "Our Ear",
    icon: dummi,
  },
  {
    title: "Our Ear",
    icon: dummi,
  },
];

const TreatmentsAndServices = ({ data }: { data: HomePageType }) => {
  const isData = data.page.acf.sectionTreatments
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} flex-col md:items-center `}>
      <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1">{isData.title}</HeadTitle>
      <div className="grid md:grid-cols-3 md:gap-10 gap-8 w-full max-w-[900px] mt-8">
        {isData.services.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className="flex flex-col  justify-between items-center bg-kerf-teal-light md:rounded-3xl rounded-2xl overflow-hidden">
            <div />
            <Image
              src={item.image.sourceUrl}
              alt={item.image.altText}
              width={200}
              height={200}
              className="object-contain aspect-square md:px-11 md:my-10 px-6 my-7"
            />
            <p className="flex items-center justify-center text-center px-4 py-3 bg-kerf-teal w-full text-white font-bold uppercase text-xl">
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
