"use client"
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { NormalBtn } from "@/ui/buttons";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const About = ({
  description,
  logo,
}: {
  description: string | JSX.Element;
  logo: StaticImageData;
}) => {
  const router = useRouter();
  return (
    <SectionWrapper
      classTop="bg-off-white"
      classBottom={`${main_padding.y} grid `}
    >
      <div className="lg:gap-16 md:gap-12 gap-6 grid md:grid-cols-2 items-center max-w-[1440px] ">
        <Image src={logo} alt="" loading="lazy" className="aspect-square max-h-[400px] w-auto object-contain" />
        <div>
          <p>{description}</p>
          <NormalBtn onClick={() => router.push("/contact-us")} className="mt-6 max-sm:w-full">
            Contact Us
          </NormalBtn>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
