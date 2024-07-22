import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiSection } from "@/assets/images";

const OurSpecialties = ({ data }: { data: HomePageType }) => {
  const isData = data.page?.acf.sectionSpecialties;
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} px-10 flex-col items-center  bg-gradient-to-t from-kerf-teal via-kerf-teal-light to-kerf-teal-light  rounded-3xl relative z-0`}>
      <div className={`flex flex-col w-full  items-center px-6`}>
        <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 text-center">
          {" "}
          {isData.title}
        </HeadTitle>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full gap-10 md:mt-16 mt-8">
          {isData.specialties.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white flex flex-col items-center px-10 pt-8 gap-6 rounded-3xl w-full">
              <Image
                src={item.image.sourceUrl ?? dummiSection}
                alt={item.image.altText}
                width={130}
                height={130}
              />
              <p className="font-bold uppercase text-lg text-center py-2 bg-black/10 rounded-t-xl px-5 w-full h-full">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <NormalBtn href={`/${isData.buttonLink}`} className="md:mt-16 mt-6">
          {isData.buttonText}
        </NormalBtn>
      </div>

      {/* textures */}
      <RosePetalTexture className="bottom-0 left-0  opacity-40 " />
    </SectionWrapper>
  );
};

export default OurSpecialties;
