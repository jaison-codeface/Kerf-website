import React from "react";
import SectionWrapper from "../SectionWrapper";
import RosePetalTexture from "@/ui/rosePetalTexture";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BookAppointmentBtn } from "@/ui/buttons";
import { dummiSectionHead } from "@/assets/images";

type Props = {
  breadcrumbs: {
    title: string;
    link: string;
  }[];
  bgImage: string | StaticImageData;
  title: string | JSX.Element;
  hideBookAppointment?: boolean;
  isDoters?: boolean;
};

const HeroSection = ({
  breadcrumbs,
  bgImage,
  title,
  hideBookAppointment = true,
  isDoters = false,
}: Props) => {
  return (
    <>
      <SectionWrapper
        classTop="bg-gradient-to-tl from-kerf-blue via-transparent to-transparent via-40% relative z-0 overflow-x-clip "
        classBottom="h-[550px] flex-col  max-md:pt-40 md:gap-0 gap-10  items-center ">
        <div className={`flex items-end justify-end  h-full relative z-0 ${!isDoters ? "w-max" : "w-full"} `}>
          <Image
            src={bgImage ?? dummiSectionHead}
            alt=""
            priority
            width={1000}
            height={600}
            className={`object-contain h-[420px] -z-0   ${!isDoters ? "object-right-top" : "object-center"} `}
          />
        </div>

        {/* textures */}
        <RosePetalTexture className="rotate-180 top-0 right-0" />
        <RosePetalTexture className="-bottom-40 left-0" />
      </SectionWrapper>
      <SectionWrapper classTop="-translate-y-1/2">
        <div className="bg-[#e9eef2] bg-off-gray md:px-20 px-8 md:py-10 py-6  w-full rounded-3xl flex items-center  justify-between max-md:flex-col gap-6">
          <div className="flex flex-col md:items-start items-center">
            <h1
              data-aos="fade-up"
              data-aos-anchor="#top"
              className="md:text-3xl text-2xl font-extrabold text-[#020c2a] [&_span]:font-medium">
              {title}
            </h1>
            <span className="flex items-center md:mt-6 mt-2">
              {breadcrumbs.map((item, idx) => (
                <Link
                  rel="noindex"
                  key={idx}
                  suppressHydrationWarning
                  href={item.link ? item.link : "javascript:void(0)"}
                  data-aos="fade-up"
                  shallow
                  data-aos-delay={50 * idx}
                  data-aos-anchor="#top"
                  className={` sm:text-base text-sm font-medium ${
                    idx === 0 ? "text-blue-600" : "text-[#4b5175]"
                  }`}>
                  {item.title}{" "}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="text-[#4b5175]">&nbsp; &#62; &nbsp;</span>
                  )}
                </Link>
              ))}
            </span>
          </div>
          {hideBookAppointment && <BookAppointmentBtn type="hero section" />}
        </div>
      </SectionWrapper>
    </>
  );
};

export default HeroSection;
