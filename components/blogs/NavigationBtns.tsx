import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { NormalBtn } from "@/ui/buttons";
import Link from "next/link";
import React from "react";

const NavigationBtns = ({
  buttons,
}: {
  buttons: {
    title: string;
    link: string;
  }[];
}) => {
  return (
    <SectionWrapper
      classBottom={` ${main_padding.y} flex w-full justify-between gap-6 items-center`}>
      {buttons.map((item, idx) => (
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={idx * 300}
          key={idx}>
          {item.link && (
            <NormalBtn
              href={item.link}
              className="">
              {item.title}
            </NormalBtn>
          )}
        </div>
      ))}
    </SectionWrapper>
  );
};

export default NavigationBtns;
