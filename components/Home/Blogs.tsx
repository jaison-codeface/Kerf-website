"use client";
import React, { Fragment } from "react";
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
import Link from "next/link";
import { dummiSection } from "@/assets/images";
import { NormalBtn } from "@/ui/buttons";

const sdata = [
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

const Blogs = ({ data, blogs }: { data: HomePageType; blogs: BlogsType }) => {
  const isData = data.page?.acf.sectionBlog;
  const isBlogs = blogs.blogs.nodes;

  function padArrayToFour() {
    const result = [...isBlogs]; // Create a copy of the original array
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
          subtitle: "",
        },
        slug: "",
      }); // Add empty objects until the length is 4
    }
    return result;
  }
  return (
    <SectionWrapper
      classTop="overflow-hidden"
      classBottom={`${main_padding.y} flex-col overflow-visible`}>
      <HeadSubtitle className="uppercase">
        {isData.sectionSubtitle}
      </HeadSubtitle>
      <HeadTitle className="mt-1">{isData.sectionTitle}</HeadTitle>
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
          {padArrayToFour().map((item, idx) => (
            <Fragment  key={idx}>
              {item.title ? (
                <SwiperSlide>
                  <div
                
                    className="relative z-0 !flex flex-col items-start justify-end px-4 py-8 group aspect-[9/10] overflow-hidden rounded-lg after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t to-transparent from-black/90 after:bottom-0 after:left-0 after:-z-10 max-h-[470px] ">
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
                    <div className="group-hover:max-h-96  max-h-0 flex  overflow-hidden duration-500">
                      <NormalBtn className="mt-4" href={`/blogs/${item.slug}`}>
                        Read More
                      </NormalBtn>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <SwiperSlide key={idx}></SwiperSlide>
              )}
            </Fragment>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};

export default Blogs;
