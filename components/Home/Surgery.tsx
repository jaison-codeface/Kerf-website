import React from "react";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiSection, dummiSectionHead } from "@/assets/images";

const Surgery = ({ data }: { data: HomePageType }) => {
  const isData = data.page?.acf.sectionSurgery;

  const dimmu = [
    {
      title: "Ear Surgeries",
      image: dummiSection,
      surgeries: [
        "Microear surgeries",
        "cochlear  implant",
        "endoscopic ear surgeries",
        "Lateral skull base surgeries",
      ],
    },
    {
      title: "Ear Surgeries",
      image: dummiSection,
      surgeries: [
        "Microear surgeries",
        "cochlear  implant",
        "endoscopic ear surgeries",
        "Lateral skull base surgeries",
      ],
    },
    {
      title: "Ear Surgeries",
      image: dummiSection,
      surgeries: [
        "Microear surgeries",
        "cochlear  implant",
        "endoscopic ear surgeries",
        "Lateral skull base surgeries",
      ],
    },
  ];
  return (
    <SectionWrapper
      classTop="relative z-0 md:mt-14"
      classBottom={`${main_padding.y} flex-col md:items-center `}>
      <HeadSubtitle className="">{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1 ">{isData.title}</HeadTitle>
      <div className="grid md:grid-cols-3 md:gap-10 gap-8 w-full mt-8">
        {isData.content.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
            className="flex items-start flex-col justify-start gap-8 bg-kerf-teal p-4 rounded-xl text-white pb-8 duration-500 group hover:!rotate-1">
            <div className="h-auto aspect-video w-full  relative z-0  overflow-hidden rounded-lg ">
              <Image
                src={item.image.sourceUrl}
                alt=""
                fill
                className=" object-cover inset-0  size-full"
              />
            </div>
            <div className="flex w-full justify-center  flex-col gap-4">
              <h2 className="font-bold text-3xl text-white">{item.title}</h2>
              <menu className="flex items-start justify-start flex-wrap gap-2">
                {item.surgeries.map((i, d) => (
                  <li
                    key={d}
                    className="px-3 py-1 text-base bg-[#05a5a5] text-white  rounded-lg overflow-hidden">
                    {i.title}
                  </li>
                ))}
              </menu>
            </div>
          </div>
        ))}
      </div>
      <RosePetalTexture className="-bottom-32 right-0 rotate-180 -z-10" />
    </SectionWrapper>
  );
};

export default Surgery;
