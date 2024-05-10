import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import bg from "@/assets/images/Home/joins us.webp";
import Image from "next/image";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import insta from "@/assets/icons/instagram.svg";
import fb from "@/assets/icons/facebook.svg";
import Link from "next/link";

const socialMedia = [
  { link: "", icon: fb },
  { link: "", icon: insta },
];

const JoinUs = () => {
  return (
    <SectionWrapper
      classTop="relative z-0 bg-black"
      classBottom={`${main_padding.y} flex-col items-center`}
    >
      <Image
        src={bg}
        fill
        loading="lazy"
        placeholder="blur"
        className="-z-10 object-cover opacity-30"
        alt={""}
      />
      <HeadTitle>Join Us Online</HeadTitle>
      <HeadSubtitle className="text-center text-off-white mt-6 leading-[200%]">
        Worship Service: Sunday 10 am, Taj Hotel JLT, Dubai
        <br />
        Bible Study each Wednesday at 7 pm via Zoom. <br />
        Please email us at{" "}
        <a href="mailto:lovinggraceassembly@gmail.com">
          lovinggraceassembly@gmail.com
        </a>{" "}
        to receive login details
      </HeadSubtitle>

      <div className="flex items-center justify-center gap-4 w-max max-w-full mt-6">
        {socialMedia.map((item, idx) => (
          <Link key={idx} href={item.link} target="_blank" className="p-3  rounded-md bg-off-white aspect-square shrink-0 flex items-center justify-center ">
            <Image src={item.icon} alt=""  className="h-4 w-auto object-contain aspect-square"/>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default JoinUs;
