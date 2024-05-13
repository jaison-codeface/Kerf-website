import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import mainImage from "@/assets/images/Home/Women Of Destiny Breakfast main.webp";

import Image from "next/image";

const WomenOfDestinyBreakfast = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[900px]">
        Women Of Destiny Breakfast
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        A gathering where women unite to find strength, wisdom, and
        encouragement as they explore their unique paths and divine purposes
        through uplifting fellowship, inspiring stories, and spiritual
        nourishment.
      </HeadSubtitle>
      <Image
        src={mainImage}
        alt=""
        data-aos="fade-up"
        data-aos-duration="700"
        loading="lazy"
        placeholder="blur"
        className="w-full rounded-[10px] ld:mt-16 md:mt-14 sm:mt-12 mt-6 lg:aspect-[16/7] aspect-video object-cover"
      />
    </SectionWrapper>
  );
};

export default WomenOfDestinyBreakfast;
