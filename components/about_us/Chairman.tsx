import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle, SectionDescription } from "@/ui/Typography";
import sunil from "@/assets/images/about_us/Dr.Sunil K.jpg";
import Image from "next/image";

const Chairman = () => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} grid md:grid-cols-[1.4fr_1fr] md:gap-20 gap-10 items-center h-max z-50`}
    >
      <div className="flex flex-col h-full justify-center">
        <HeadTitle className="mt-1">Dr.Sunil K</HeadTitle>
        <HeadSubtitle>Chairman</HeadSubtitle>
        <SectionDescription className="mt-4">
          Passed MS (ENT) from Madras Medical College in 2001. <br />
          Got Membership ERS in 2002
          <br />
          Was working as ENT surgeon at District Hospital Kollam from 2001-2006.
          <br />
          More than 7000 surgeries was done and initiated audiology and speech
          therapy.
          <br />
          Got fellowship from IRS and was trained under Prof.P.J. Wormald
          (Adelaide Australia). Mali Visiting Consultant to AMDC Maldives (Over-
          seas).
          <br />4 publications and more than 20 paper presenta
        </SectionDescription>
      </div>

      <Image
        data-aos="fade-up"
        src={sunil}
        alt=""
        className="w-full h-full object-cover overflow-hidden rounded-lg"
      />
    </SectionWrapper>
  );
};

export default Chairman;
