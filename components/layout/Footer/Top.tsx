import useStore from "@/libs/store";
import main_padding from "@/styles/padding";
import { BookAppointmentBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import phoneIcon from "@/assets/icons/phone regular.svg";
import Arrow from "@/assets/icons/ArrowRightDouble";

const Top = ({ data }: { data: FooterType }) => {
  const {
    utilities: {
      footer: {
        utility: {
          acf: { phoneNumber },
        },
      },
    },
  } = useStore();

  const isQuickLinks = (item: any) =>
    item.title.toLowerCase() === "QUICK LINKS".toLowerCase();
  return (
    <div
      className={`w-full  bg-gradient-to-t from-[#1f7979] via-kerf-teal to-kerf-teal rounded-t-[50px] text-white flex items-start justify-between lg:gap-20 gap-8 max-lg:flex-wrap overflow-hidden`}>
      <div
        className={`flex flex-col gap-4 w-full max-md:items-center max-md:text-center bg-[#539fbd] lg:h-full px-10  ${main_padding.y}`}>
        <Link data-aos="fade-up" href="/" shallow>
          <Image
            src={data.utility.acf.logo.sourceUrl}
            alt={data.utility.acf.logo.altText}
            loading="lazy"
            height={60}
            width={200}
            className="h-[50px] w-auto object-contain"
          />
        </Link>
        <p
          data-aos="fade-up"
          className=" text-[1.1rem] font-semibold tracking-[-0.5px] md:max-w-[300px]">
          {data.utility.acf.description}
        </p>
        {phoneNumber && (
          <Link
            href={`tel:${phoneNumber}`}
            suppressHydrationWarning
            className="text-[1.1rem] font-semibold tracking-[-0.5px] flex items-center gap-4 border border-white hover:border-opacity-45 w-max px-3 py-2 rounded-lg bg-transparent hover:bg-white/45 hover:text-black group duration-300">
            <Image
              src={phoneIcon}
              alt=""
              className="group-hover:invert duration-300"
            />
            {phoneNumber}
          </Link>
        )}
      </div>
      <div
        className={`flex flex-col items-start md:gap-10 gap-6 justify-between lg:h-full px-10  ${main_padding.y}`}>
        <div className="flex items-start justify-between lg:gap-12 md:gap-10 gap-6 max-md:flex-wrap ">
          {data.utility.acf.footerLinks.map((item, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className={`flex flex-col gap-4 ${isQuickLinks(item) && "md:ml-6"}`}>
              <h3 className="font-bold text-base shrink-0 w-max relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white">
                {item.title}
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {item.links.map((link) => (
                  <Link
                    href={link.link ? link.link : "javascript:void(0)"}
                    shallow
                    key={idx + link.text}
                    className="text-sm font-normal w-full min-w-[180px] flex items-center gap-3 group duration-300 [&_*]:duration-300 hover:text-black">
                    {link.icon && (
                      <Image
                        src={link.icon.sourceUrl}
                        alt={link.icon.altText}
                        width={20}
                        height={20}
                        className="h-4 w-auto object-contain group-hover:invert"
                      />
                    )}
                    {isQuickLinks(item) && <Arrow width={20} height={20} color="#fff" className="group-hover:invert" />}
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <BookAppointmentBtn
          type="hero section"
          className="text-kerf-teal [&_span]:bg-kerf-teal"
        />
      </div>
    </div>
  );
};

export default Top;
