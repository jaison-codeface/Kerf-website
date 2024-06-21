"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadTitle } from "@/ui/Typography";
import SingleDoctor from "@/ui/SingleDoctor";
import RosePetalTexture from "@/ui/rosePetalTexture";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Doctor = ({ doctors }: { doctors: any }) => {
  return (
    <SectionWrapper
      classTop="overflow-hidden relative z-0"
      classBottom={`${main_padding.t} flex-col overflow-visible`}>
      <HeadTitle className="mt-1">Docoters</HeadTitle>
      <div data-aos="fade-up" className="flex mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          data-aos-duration="700"
          loop
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          speed={1200}
          modules={[Autoplay]}
          className="mySwiper !ml-0">
          {[...doctors, ...doctors, ...doctors, ...doctors, ...doctors].map(
            (item: any, idx: any) => (
              <SwiperSlide
                key={idx}
                className="relative z-0 !flex flex-col items-start justify-end overflow-hidden">
                <SingleDoctor key={idx} idx={idx} item={item} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {/* textures */}
      <RosePetalTexture className="rotate-180 bottom-0 right-0" />
    </SectionWrapper>
  );
};

export default Doctor;
