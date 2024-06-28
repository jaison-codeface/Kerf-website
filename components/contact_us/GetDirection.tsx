import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import directionIcon from "@/assets/icons/get direction.svg";
import arrowIcon from "@/assets/icons/arrow small.svg";
import mapImage from "@/assets/images/contact_us/map.png";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import Link from "next/link";

const GetDirection = ({ data }: { data: ContactUsType }) => {
  const isData = data.page.acf.secondSection;
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} grid md:grid-cols-[1fr_1.4fr] grid-cols-1 lg:gap-20 gap-10 items-center`}>
      <div
        data-aos="fade-up"
        className="bg-[#e8edf1] rounded-xl md:aspect-[16/14] max-md:min-h-[300px]  flex items-center flex-col overflow-hidden">
        <span className="flex items-center justify-between gap-10 w-full md:py-8 md:px-8 py-4 px-4">
          <h2 className="font-bold md:text-xl text-lg">{isData.title}</h2>
          <Image
            src={directionIcon}
            alt=""
            width={40}
            height={40}
            className="p-2 h-[35px] w-auto aspect-square object-contain shrink-0 rounded-full bg-white"
          />
        </span>
        <span className="h-full w-full flex items-end relative z-0 md:px-8 md:py-10 px-4 py-4 flex-1">
          <Image
            src={isData.mapImage.sourceUrl}
            alt={isData.mapImage.altText}
            fill
            className="object-cover -z-10"
          />
          <Link
            href={isData.directionLink ? isData.directionLink : "javascript:void(0)"}
            target="_blank"
            className="flex items-center justify-center rounded-full px-4 py-2.5 bg-[#020d2b] text-white gap-2 font-bold text-sm">
            <Image
              src={arrowIcon}
              alt=""
              width={20}
              height={20}
              className="aspect-square h-[18px] w-auto rounded-full bg-white p-1 object-contain"
            />
            Get Directions
          </Link>
        </span>
      </div>
      <Image
        data-aos="fade-up"
        src={isData.sectionImage.sourceUrl}
        alt={isData.sectionImage.altText}
        width={600}
        height={400}
        className="rounded-xl overflow-hidden h-full w-full object-cover"
      />
      {/* textures */}
      <RosePetalTexture className="rotate-180 bottom-0 right-0" />
    </SectionWrapper>
  );
};

export default GetDirection;
