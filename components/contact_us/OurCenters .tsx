import React, { Fragment } from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import dummiIcon from "@/assets/icons/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const OurCenters = ({ data }: { data: ContactUsType }) => {
  const isData = data.page?.acf.firstSection;

  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col sm:items-center items-start z-50`}>
      <HeadSubtitle>{isData.subtitle}</HeadSubtitle>
      <HeadTitle className="mt-1 sm:text-center">
        {isData.sectionTitle}
      </HeadTitle>
      <div className="flex items-start justify-center flex-wrap lg:gap-20 sm:gap-10 gap-6 md:mt-16 mt-6">
        {isData.locations &&
          isData.locations.map((item, idx) => (
            <Fragment key={idx}>
              {item.title && (
                <div
                  data-aos="fade-up"
                  data-aos-delay={50 * idx}
                  style={{
                    backgroundColor: isData.backgroundColors[idx].color,
                  }}
                  className="px-4 py-8 rounded-xl flex flex-col text-black md:h-full sm:w-[300px]">
                  <h2 className="font-bold text-lg relative z-0 after:absolute after:w-[40px] after:h-[2px] after:bg-black after:left-0 after:-bottom-1 after:rounded-full">
                    {item.title}
                  </h2>
                  <div className="mt-8 flex flex-col gap-5">
                    {item.links &&
                      item.links.map((link, i) => (
                        <Link
                          rel="noindex"
                          key={i}
                          suppressHydrationWarning
                          shallow
                          href={link.link ? link.link : "javascript:void(0)"}
                          className="flex  items-start  gap-2 leading-8 text-xl">
                          <Image
                            src={link?.icon?.sourceUrl ?? dummiIcon}
                            alt=""
                            width={20}
                            height={20}
                            className="h-[16px] w-auto aspect-square object-contain translate-y-1.5"
                          />
                          {link.title}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default OurCenters;
