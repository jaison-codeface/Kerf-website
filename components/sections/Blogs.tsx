"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadTitle } from "@/ui/Typography";
import SingleDoctor from "@/ui/SingleDoctor";
import RosePetalTexture from "@/ui/rosePetalTexture";
import dummi from "@/assets/images/home/hero session e.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { dummiSection } from "@/assets/images";
import { NormalBtn } from "@/ui/buttons";

const Blogs = ({
  blogs,
}: {
  blogs: {
    title: string;
    slug: string;
    date: string;
    author: {
      node: {
        name: string;
      };
    };
    acf: {
      featuredImage: ImageType;
      content: string;
    };
  }[];
}) => {
  function padArrayToFour() {
    const result = [...blogs]; // Create a copy of the original array
    while (result.length < 4) {
      result.push({
        title: "",
        date: "",
        author: {
          node: {
            name: "",
          },
        },
        acf: {
          featuredImage: {
            sourceUrl: "",
            altText: "",
            mediaDetails: {
              width: 0,
              height: 0,
            },
          },
          content: "",
        },
        slug: "",
      }); // Add empty objects until the length is 4
    }
    return result;
  }

  return (
    <SectionWrapper
      classTop="overflow-hidden relative z-0"
      classBottom={`${main_padding.t} flex-col overflow-visible`}>
      <HeadTitle className="mt-1">Blogs</HeadTitle>
      <div data-aos="fade-up" className="flex mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          data-aos-duration="700"
          loop
          autoplay={{
            stopOnLastSlide: true,
            delay: 3500,
          }}
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
          speed={1200}
          modules={[Autoplay]}
          className="mySwiper !ml-0">
          {padArrayToFour().map((item, idx) => (
            <>
              {item.title ? (
                <SwiperSlide key={idx}>
                  <div className="relative z-0 !flex flex-col items-start justify-end px-4 py-8 group aspect-[9/10] overflow-hidden rounded-lg after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t to-transparent from-black/90 after:bottom-0 after:left-0 after:-z-10 max-h-[470px] ">
                    <h3 className="font-bold capitalize text-base line-clamp-3 text-white leading-tight">
                      {item.title}
                    </h3>
                    <Image
                      src={item?.acf.featuredImage.sourceUrl ?? dummiSection}
                      alt={item?.acf.featuredImage.altText}
                      fill
                      loading="lazy"
                      className="-z-10 object-cover opacity-70 group-hover:scale-105 duration-300"
                    />
                    <div className="group-hover:max-h-96 max-h-0 flex  overflow-hidden duration-500">
                      <NormalBtn className="mt-4" href={`/blogs/${item.slug}`}>
                        Read More
                      </NormalBtn>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={idx}></SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
