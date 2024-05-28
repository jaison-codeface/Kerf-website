import React from "react";

import main_padding from "@/styles/padding";
import SectionWrapper from "@/components/SectionWrapper";
import Bottom from "./Bottom";
import Top from "./Top";

const Footer = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.t} flex-col items-center `}>
      <Top />
      <Bottom />
    </SectionWrapper>
  );
};

export default Footer;
