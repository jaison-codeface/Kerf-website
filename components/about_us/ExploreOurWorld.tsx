"use client";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import second from "@/assets/images/about_us/secod session.webp";
import CountUp from "react-countup";

const ExploreOurWorld = () => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}
    >
      <div className="flex flex-col h-full justify-center">
        <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
        <HeadTitle className="mt-1">Explore Our World</HeadTitle>
        <SectionDescription className="mt-4">
          Kerala ENT Research Foundation (KERF) evolved as a part of independent
          health concepts among us. We are trying to bring all the recent
          advances in Oto Rhino Laryngology to our home town. We are mainly
          looking forward for compe- tent care and research in head and neck
          diseases. A Hospi- tal is an Institution for healthcare providing
          patient treat- ment by specialized staff and equipment, often but not
          always providing for longer term patient stays. Our hospital (KERF)
          provides quality and efficient treatment using the modern technique
          and facilities
        </SectionDescription>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-end justify-center h-full w-full relative z-0"
      >
        <svg
          className="flex w-ful"
          viewBox="0 0 895 791"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M625.15 33C625.15 14.7746 610.376 0 592.15 0H35C15.67 0 0 15.67 0 35V489C0 507.225 14.7746 522 33 522H230C257.062 522 279 543.938 279 571V758C279 776.225 293.775 791 312 791H860C879.33 791 895 775.33 895 756V326.411C895 308.185 880.225 293.411 862 293.411H674.15C647.089 293.411 625.15 271.473 625.15 244.411V33Z"
            fill="url(#pattern0_42_15)"
          />
          <defs>
            <pattern
              id="pattern0_42_15"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_42_15"
                transform="matrix(0.00390625 0 0 0.00441984 0 -0.0657396)"
              />
            </pattern>
            <image
              id="image0_42_15"
              width="371"
              height="300"
              xlinkHref={second.src}
            />
          </defs>
        </svg>
        <div className="bg-[#d7ece3] rounded-[20px] p-4 absolute left-0 bottom-0 w-[28%] aspect-square">
          <div className="border-2 border-white rounded-[16px] h-full w-full justify-center flex flex-col items-center text-center text-[#415061]">
            <h2 className="font-black text-[133%] ">
              {" "}
              <CountUp
                duration={2}
                enableScrollSpy
                scrollSpyOnce
                className="counter"
                end={5000}
              />
              +
            </h2>
            <p className="text-[62%] leading-[130%] font-light uppercase ">
              Patient&apos;s <br /> review
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExploreOurWorld;
