import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import mission from "@/assets/images/Home/Our Mission.webp";
import vision from "@/assets/images/Home/Our Vision.webp";
import Image from "next/image";

const data = [
  {
    title: "Our Vision",
    subtitle:
      "To nurture a loving community centered on Christ, extending compassion and care to embrace individuals from all walks of life, creating an environment where diverse backgrounds unite in shared faith and spiritual growth.",
    image: vision,
  },
  {
    title: "Our Mission",
    subtitle:
      "Our mission is to establish a welcoming space where the expatriate community can gather, forge connections, and immerse themselves in the study of sacred scriptures. Through this, we aim to empower individuals to discover and live out their unique divine purpose.",
    image: mission,
  },
];

const VisionAndMission = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[700px]">
        Vision and Mission
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[700px] text-secondary">
        He foundational ideals that steer our efforts to uplift lives and foster
        profound connections.
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6  lg:gap-16 md:gap-12 gap-6 grid md:grid-cols-2 max-w-[1440px] ">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="border border-tertiary flex flex-col rounded-[10px] overflow-hidden"
          >
            <Image src={item.image} alt="" loading="lazy" placeholder="blur" className="aspect-[16/12] object-cover" />
            <div className="flex flex-col px-6 py-6">
              <h3 className="font-bold lg:text-3xl md:text-2xl text-xl">{item.title}</h3>
              <p className="md:mt-3 mt-1 text-base leading-[150%]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisionAndMission;
