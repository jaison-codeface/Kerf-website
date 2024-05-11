import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import IntercessoryPrayerMinistry from "@/assets/icons/our programs/Intercessory Prayer Ministry.webp";
import MarriageMinistry from "@/assets/icons/our programs/Marriage Ministry.webp";
import MediaMinistry from "@/assets/icons/our programs/Media Ministry.webp";
import MenOfValor from "@/assets/icons/our programs/Men of Valor.webp";
import MusicMinistry from "@/assets/icons/our programs/Music Ministry.webp";
import Outreach from "@/assets/icons/our programs/Outreach.webp";
import SinglesMinistry from "@/assets/icons/our programs/Singles Ministry.webp";
// import second from '@/assets/icons/our programs/Women Of Destiny.webp'
import YouthMission from "@/assets/icons/our programs/Youth Mission.webp";
import Image from "next/image";
import { programsData } from "@/libs/contents";
import Link from "next/link";

const OurMinistries = () => {
  const data = programsData.filter((item) => item.email);
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle className="text-center max-w-[800px]">
        Connect With Our Ministries
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[600px] text-secondary">
        Tap into the vast spiritual resources we offer through engaging
        ministries that guide, uplift, and bring souls together.
      </HeadSubtitle>
      <div className="grid md:grid-cols-2  lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.map((item, idx) => (
          <Link
            href={`/contact-us/${item.slug}`}
            shallow
            key={idx}
            suppressHydrationWarning
            className="flex items-center justify-start gap-4 bg-off-white rounded-[10px] sm:px-8 px-2 py-6 w-full"
          >
            <Image
              src={item.logo}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              loading="lazy"
              className="h-24 w-auto aspect-square object-contain"
            />
            <div className="flex flex-col ">
              <h4
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-xl text-primary font-bold"
              >
                {item.title}
              </h4>
              <a
                data-aos="fade-up"
                data-aos-duration="700"
                href={`mailto:${item.email}`}
                className="font-medium max-sm:text-sm"
              >
                {item.email}
              </a>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurMinistries;
