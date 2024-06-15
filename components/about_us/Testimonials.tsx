"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import second from "@/assets/images/about_us/Dr.Sunil K.jpg";
import Image from "next/image";
import quote from "@/assets/icons/quote.svg";
import arrow from "@/assets/icons/arrow small.svg";

// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const data = [
  {
    content:
      "Arbitrary variants are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like hover:{utility} or responsive variants like md:{utility} but using square bracket notation directly in your H",
    name: "rbitrary variants are",
    designation: "tility} or respons",
    image: second,
  },
  {
    content:
      "Arbitrary variants are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like hover:{utility} or responsive variants like md:{utility} but using square bracket notation directly in your H",
    name: "rbitrary variants are",
    designation: "tility} or respons",
    image: second,
  },
  {
    content:
      "Arbitrary variants are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like hover:{utility} or responsive variants like md:{utility} but using square bracket notation directly in your H",
    name: "rbitrary variants are",
    designation: "tility} or respons",
    image: second,
  },
];

const arrows = ["left", "right"];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef<any>();
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-start  z-50`}
    >
      <HeadSubtitle className="uppercase">Testimonials</HeadSubtitle>
      <HeadTitle className="mt-1">Explore Our World</HeadTitle>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        data-aos="fade-up"
        data-aos-duration="700"
        loop
        autoplay={{
          delay: 3500,
        }}
        speed={1200}
        navigation={{
          enabled: true,
          // prevEl: navigationPrevRef.current,
          // nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded-2xl mt-16 w-full"
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className={`${
              index === idx ? "bg-[#ebe8f9]" : "bg-[#e9ecf1]"
            } md:!w-[70%] !w-[90%] duration-500 flex flex-col md:px-10 px-6 md:py-10 py-8 rounded-2xl items-start text-[#081332]`}
          >
            <Image
              src={quote}
              alt=""
              height={60}
              width={60}
              className="h-[35px] w-auto object-contain"
            />
            <p className="mt-4 text-lg font-medium">
              &ldquo;{item.content}&ldquo;
            </p>
            <div className="w-full flex items-center justify-between gap-10 mt-10">
              <div className="flex items-center justify-start gap-4">
                <Image
                  src={item.image}
                  alt=""
                  height={40}
                  width={40}
                  className="h-[60px] w-auto  object-cover aspect-square rounded-full"
                />
                <div className="capitalize flex flex-col gap-1 text-base">
                  <strong>{item.name}</strong>
                  <p className="text-sm">{item.designation}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 max-md:hidden">
                {arrows.map((item, idx) => (
                  <button
                    key={idx}
                    ref={
                      item === "left" ? navigationPrevRef : navigationNextRef
                    }
                    onClick={() =>
                      swiperRef.current && item === "left"
                        ? swiperRef.current.slidePrev()
                        : swiperRef.current.slideNext()
                    }
                    className={`${
                      item === "left" ? "rotate-180" : ""
                    } p-3 rounded-full border-white border flex items-center justify-center aspect-square`}
                  >
                    <Image src={arrow} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default Testimonials;
