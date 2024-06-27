import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import dummiIcon from "@/assets/icons/facebook.svg";
import Link from "next/link";
import Image from "next/image";


const OurCenters = ({ data }: { data: ContactUsType }) => {
  const isData = data.page.acf.firstSection;
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-start z-50`}>
      <HeadSubtitle>{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1">{isData.sectionTitle}</HeadTitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-20 sm:gap-10 gap-6 md:mt-16 mt-6">
        {isData.locations.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            style={{
              backgroundColor: isData.backgroundColors[idx].color,
            }}
            className="px-4 py-8 rounded-xl flex flex-col text-black">
            <h2 className="font-medium text-lg relative z-0 after:absolute after:w-[40px] after:h-[2px] after:bg-black after:left-0 after:-bottom-1 after:rounded-full">
              {item.title}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {item.links.map((link, i) => (
                <Link
                  key={i}
                  suppressHydrationWarning
                  href={link.link ? link.link : "javascript:void(0)"}
                  className="flex  items-start text-sm gap-2">
                  <Image
                    src={link.icon.sourceUrl ? link.icon.sourceUrl : dummiIcon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[14px] w-auto aspect-square object-contain"
                  />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurCenters;
