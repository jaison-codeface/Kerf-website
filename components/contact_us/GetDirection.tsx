"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import directionIcon from "@/assets/icons/get direction.svg";
import arrowIcon from "@/assets/icons/arrow small.svg";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import Link from "next/link";
import { dummiSection } from "@/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const GetDirection = ({ data }: { data: ContactUsType }) => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const isData = data.page?.acf.secondSection;

  const arrow = [
    { icon: arrowIcon, ref: navigationPrevRef },
    { icon: arrowIcon, ref: navigationNextRef },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, [index]);

  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} grid md:grid-cols-[1fr_1.4fr] grid-cols-1 lg:gap-20 gap-10 items-center`}>
      <div
        data-aos="fade-up"
        className="bg-[#e8edf1] rounded-xl md:aspect-[16/14] max-md:min-h-[300px]  flex items-center flex-col overflow-hidden">
        <span className="flex items-center justify-between gap-10 w-full md:py-8 md:px-8 py-4 px-4">
          <div className="flex w-1/2 pointer-events-none">
            <Swiper
              speed={800}
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              loop>
              {isData.locations.map((item, idx) => (
                <SwiperSlide key={idx} className="font-bold md:text-xl text-lg">
                  {item.title}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Image
            src={directionIcon}
            alt=""
            width={40}
            height={40}
            className="p-2 h-[35px] w-auto aspect-square object-contain shrink-0 rounded-full bg-white "
          />
        </span>
        <span className="h-full w-full flex items-end relative z-0 md:px-8 md:py-10 px-4 py-4 flex-1">
          <div className="w-full absolute top-0 left-0 h-full -z-10">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3500,
              }}
              speed={800}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              modules={[Autoplay, Navigation]}
              onSlideChange={(swiper) => setIndex(swiper.realIndex)}
              className="h-full">
              {isData.locations.map((item, idx) => (
                <SwiperSlide key={idx} className="font-bold md:text-xl text-lg">
                  <Image
                    src={item.image.sourceUrl ?? dummiSection}
                    alt={item.image.altText}
                    fill
                    className="object-cover h-full w-full -z-10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-between  w-full h-max">
            <Link
              href={isData.locations[index].link ?? "javascript:void(0)"}
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

            <div className="flex items-center h-auto justify-center gap-3 ">
              {arrow.map((item, idx) => (
                <Image
                  key={idx}
                  src={item.icon}
                  ref={item.ref}
                  alt=""
                  width={30}
                  height={30}
                  className={`cursor-pointer aspect-square h-full w-auto object-contain rounded-full bg-white p-3 hover:bg-gray-400 duration-300 ${idx === 0 && "rotate-180"}`}
                />
              ))}
            </div>
          </div>
        </span>
      </div>
      <Image
        data-aos="fade-up"
        src={isData.sectionImage.sourceUrl ?? dummiSection}
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
