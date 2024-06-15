import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import dummi from "@/assets/images/home/our philosophy.webp";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title:
      "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
    image: dummi,
    written: "onship between",
  },
  {
    title:
      "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
    image: dummi,
    written: "onship between",
  },
  {
    title:
      "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
    image: dummi,
    written: "onship between",
  },
  {
    title:
      "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
    image: dummi,
    written: "onship between",
  },
  {
    title:
      "onship between the current document and another resource. Although LINK has no content, the relationships it defines may be ...",
    image: dummi,
    written: "onship between",
  },
];

const Blogs = () => {
  return (
    <SectionWrapper
      classTop="overflow-hidden"
      classBottom={`${main_padding.y} flex-col overflow-visible`}>
      <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
      <HeadTitle className="mt-1">Blogs</HeadTitle>
      <div data-aos="fade-up" className="flex w-screen md:mt-16 mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          data-aos="fade-up"
          data-aos-duration="700"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          loop
          autoplay={{
            delay: 3500,
          }}
          speed={1200}
          modules={[Autoplay]}
          className="mySwiper">
          {data.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="relative z-0 !flex flex-col items-start justify-end px-4 py-4 aspect-[9/13] overflow-hidden rounded-lg">
              <h3 className="font-bold capitalize text-base line-clamp-3 text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-white font-normal inline line-clamp-1 mt-1">
                Written by :{" "}
                <span className="font-bold capitalize ">{item.written}</span>
              </p>
              <Image
                src={item.image}
                alt=""
                fill
                loading="lazy"
                className="-z-10 object-cover opacity-70"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
