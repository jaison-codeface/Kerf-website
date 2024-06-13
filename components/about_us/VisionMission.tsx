import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import ImageInBorder from "@/ui/ImageInBorder";
import mainImage from "@/assets/images/home/our philosophy.webp";

const VisionMission = () => {
  const data = [
    {
      title: "explore our world",
      subtitle: "our vision",
      description:
        "This example creates a simple search bar with an input field and a button. When the button is clicked, theThis example creates a simple search bar with an input field and a button. When the button is clicked, the ",
    },
    {
      title: "explore our world",
      subtitle: "our mission",
      description:
        "This example creates a simple search bar with an input field and a button. When the button is clicked, the This example creates a simple search bar with an input field and a button. When the button is clicked, the ",
    },
  ];
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-2 md:gap-20 gap-10 items-center  z-50`}
    >
      <div data-aos="fade-up" className=" grid max-h-[620px]">
        <ImageInBorder mainImage={mainImage} className="overflow-hidden" />
      </div>
      <div className="grid grid-rows-2 gap-6 ">
        {data.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={50*idx}
            className={`${
              idx === 0 ? "bg-[#dffeff]" : "bg-[#e9ecf1]"
            } px-8 py-10 w-full h-full rounded-2xl`}
          >
            <p className="text-xs uppercase"> {item.subtitle}</p>
            <h3 className="text-xl capitalize mt-1 font-medium">
              {item.title}
            </h3>

            <p className="mt-2 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisionMission;
