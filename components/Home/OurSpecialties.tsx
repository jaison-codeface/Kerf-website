import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import dummi from "@/assets/icons/our specialities.webp";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";

const data = [
  { title: "Audiology", icon: dummi },
  { title: "AOTOLOGY", icon: dummi },
  { title: "RHINOLOGY", icon: dummi },
];

const OurSpecialties = ({ data }: { data: HomePageType }) => {
   const isData = data.page.acf.sectionSpecialties;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center  bg-kerf-teal-light  rounded-3xl`}>
      <div className={`flex flex-col w-full  items-center px-6`}>
        <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 text-center">
          {isData.title}
        </HeadTitle>
        <div className="grid md:grid-cols-3 md:w-max w-full gap-10 md:mt-16 mt-8">
          {isData.specialties.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white flex flex-col items-center px-10 py-8 gap-6 rounded-3xl w-full">
              <Image src={item.image.sourceUrl} alt={item.image.altText} width={130} height={130} />
              <p className="font-bold uppercase text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        <NormalBtn href={`/${isData.buttonLink}`} className="md:mt-16 mt-6">{isData.buttonText}</NormalBtn>
      </div>
    </SectionWrapper>
  );
};

export default OurSpecialties;
