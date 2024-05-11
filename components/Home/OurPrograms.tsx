import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import MenOfValorLogo from "@/assets/icons/our programs/Men of Valor.webp";
import MusicMinistryLogo from "@/assets/icons/our programs/Music Ministry.webp";
import OutreachLogo from "@/assets/icons/our programs/Outreach.webp";
import WomenOfDestinyLogo from "@/assets/icons/our programs/Women Of Destiny.webp";
import YouthMissionLogo from "@/assets/icons/our programs/Youth Mission.webp";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "Outreach",
    link: "",
    icon: OutreachLogo,
  },
  {
    title: "Music Ministry",
    link: "",
    icon: MusicMinistryLogo,
  },
  {
    title: "Men of Valor",
    link: "",
    icon: MenOfValorLogo,
  },
  {
    title: "Youth Mission",
    link: "",
    icon: YouthMissionLogo,
  },
  {
    title: "Women of destiny",
    link: "",
    icon: WomenOfDestinyLogo,
  },
];

const OurPrograms = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle className="max-w-[600px] text-center">
        Ministries at Loving grace assembly
      </HeadTitle>
      <HeadSubtitle className="text-center text-secondary sm:mt-4 mt-2 max-w-[600px]">
        Offering expatriates nurturing pathways to deepen their faith, discover
        divine purpose through immersive study of sacred texts, and cultivate
        spiritual growth guided by transformative teachings.
      </HeadSubtitle>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={idx * 300}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col  items-center justify-between pt-4"
          >
            <div />
            <Image
              src={item.icon}
              alt=""
              loading="lazy"
              className="h-[120px] w-auto aspect-square object-contain px-3"
            />
            <p className="bg-secondary px-4 py-2  w-full text-center text-white font-semibold text-sm">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurPrograms;
