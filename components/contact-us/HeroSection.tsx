import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import address from "@/assets/icons/address.svg";
import email from "@/assets/icons/email.svg";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Email",
    subtitle: "lovinggrace assembly@gmail.com",
    link: "mailto:lovinggraceassembly@gmail.com",
    icon: email,
  },
  {
    title: "Address",
    subtitle: "Taj Hotel JLT, Dubai",
    link: "",
    icon: address,
  },
];

const HeroSection = () => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center mt-40`}
    >
      <HeadTitle className="text-center max-w-[600px]">Contact us</HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[600px] text-secondary">
        Join our faith community by getting in touch - we&apos;re here to
        listen, support, and guide you towards personal and spiritual growth.
      </HeadSubtitle>
      <div className="grid md:grid-cols-2 sm:w-max w-full max-w-full lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col items-center justify-center px-1 py-8"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              src={item.icon}
              alt=""
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="text-primary font-bold text-2xl mt-3"
            >
              {item.title}
            </h2>
            <Link
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              href={item.link}
              target="_blank"
              className="mt-2 text-base max-w-[200px] text-center "
            >
              {item.subtitle}
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
