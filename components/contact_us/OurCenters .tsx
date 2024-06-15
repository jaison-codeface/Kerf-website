import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import dummiIcon from "@/assets/icons/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "uae",
    links: [
      {
        icon: dummiIcon,
        title:
          "nly five centuries, but also the leap into electronic typesetting, remaining essent",
        link: "nly five centuries, but also the leap into electronic typesetting, remaining essent",
      },
      {
        icon: dummiIcon,
        title: "nly five centuries",
        link: "nly five centuries, but also the le",
      },
      {
        icon: dummiIcon,
        title: "9 94242 9249 42",
        link: "",
      },
    ],
    bgColor: "#DFFEFF",
  },
  {
    title: "uae",
    links: [
      {
        icon: dummiIcon,
        title:
          "nly five centuries, but also the leap into electronic typesetting, remaining essent",
        link: "nly five centuries, but also the leap into electronic typesetting, remaining essent",
      },
      {
        icon: dummiIcon,
        title: "nly five centuries",
        link: "nly five centuries, but also the le",
      },
      {
        icon: dummiIcon,
        title: "9 94242 9249 42",
        link: "",
      },
    ],
    bgColor: "#EAE7F8",
  },
  {
    title: "uae",
    links: [
      {
        icon: dummiIcon,
        title:
          "nly five centuries, but also the leap into electronic typesetting, remaining essent",
        link: "nly five centuries, but also the leap into electronic typesetting, remaining essent",
      },
      {
        icon: dummiIcon,
        title: "nly five centuries",
        link: "nly five centuries, but also the le ",
      },
      {
        icon: dummiIcon,
        title: "nly five centuries",
        link: "nly five centuries, but also the le ",
      },
      {
        icon: dummiIcon,
        title: "9 94242 9249 42",
        link: "",
      },
    ],
    bgColor: "#DFFEFF",
  },
];

const OurCenters = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-start z-50`}>
      <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
      <HeadTitle className="mt-1">Our Centers</HeadTitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-20 sm:gap-10 gap-6 md:mt-16 mt-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            style={{
              backgroundColor: item.bgColor,
            }}
            className="px-4 py-8 rounded-xl flex flex-col text-black"
          >
            <h2 className="uppercase font-medium text-lg relative z-0 after:absolute after:w-[40px] after:h-[2px] after:bg-black after:left-0 after:-bottom-1 after:rounded-full">
              {item.title}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {item.links.map((link, i) => (
                <Link
                  key={i}
                  suppressHydrationWarning
                  href={link.link ? link.link : "javascript:void(0)"}
                  className="flex  items-start text-sm gap-2"
                >
                  <Image
                    src={link.icon ? link.icon : dummiIcon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-[14px] w-auto aspect-square object-contain saturate-0 brightness-0"
                  />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurCenters;
