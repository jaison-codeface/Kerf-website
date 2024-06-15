import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import React from "react";
import Left from "./Left";
import Right from "./Right";

const Content = () => {
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} grid md:grid-cols-[1fr_0.5fr] grid-cols-1 lg:gap-20 gap-10 items-start`}>
      <Left /> <Right />
    </SectionWrapper>
  );
};

export default Content;
