import useStore from "@/libs/store";
import main_padding from "@/styles/padding";
import { BookAppointmentBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import phoneIcon from "@/assets/icons/phone regular.svg";
import Arrow from "@/assets/icons/ArrowRightDouble";

const Top = ({ data }: { data: FooterType }) => {
  const { utilities } = useStore();

  const phoneNumber = utilities.footer?.utility?.acf.phoneNumber;

  const isQuickLinks = (item: any) =>
    item.title.toLowerCase() === "QUICK LINKS".toLowerCase();
  return (
    <div
      className={`w-full  bg-gradient-to-t from-[#1f7979] via-kerf-teal to-kerf-teal rounded-t-[50px] text-white grid lg:grid-cols-[1fr_2fr]  lg:gap-10 gap-8 max-lg:flex-wrap overflow-hidden`}>
      <div
        className={`flex flex-col gap-4  max-md:items-center max-md:text-center bg-[#539fbd] lg:h-full md:px-10 px-6 lg:pr-16 ${main_padding.y}`}>
        <Link data-aos="fade-up" href="/" shallow>
          <Image
            src={data?.utility?.acf.logo.sourceUrl}
            alt={data?.utility?.acf.logo.altText}
            loading="lazy"
            height={60}
            width={200}
            className="h-[50px] w-auto object-contain"
          />
        </Link>
        <p
          data-aos="fade-up"
          className=" text-[1.1rem] font-semibold tracking-[-0.5px] md:max-w-[300px]">
          {data?.utility?.acf.description}
        </p>
        {phoneNumber && (
          <Link
            href={`${phoneNumber.link}`}
            suppressHydrationWarning
            shallow
            className="text-[1.4rem] mt-4 font-bold tracking-[-0.5px] flex items-center gap-4 border border-white hover:border-opacity-45 hover:bg-slate-600/20 hover:text-white w-max px-3 pb-2 pt-2.5 rounded-lg   text-white group duration-300 ">
            <Image src={phoneIcon} alt="" className="duration-300 " />
            {phoneNumber.title}
          </Link>
        )}
        {data.utility.acf.opTime.time && (
          <p className="mt-4 font-bold">
            {data.utility.acf.opTime.title} : {data.utility.acf.opTime.time}
          </p>
        )}
      </div>
      <div
        className={`flex flex-col items-start md:gap-10 gap-6 justify-between lg:h-full px-10  ${main_padding.y}`}>
        <div className="flex lg:grid grid-cols-3 items-start justify-between lg:gap-12 md:gap-10 gap-8  w-full flex-wrap">
          {data?.utility?.acf.footerLinks.map((item, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className={`flex flex-col gap-4 shrink-0 `}>
              <h3 className="font-bold text-xl shrink-0 w-max relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white">
                {item.title}
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {item.links.map((link) => (
                  <Link
                    suppressHydrationWarning
                    href={link.link ? link.link : "javascript:void(0)"}
                    shallow
                    key={idx + link.text}
                    className={`text-[1.1rem] leading-[2rem] font-semibold w-full min-w-[180px] max-w-[200px]  flex items-center gap-3 group duration-300 [&_*]:duration-300 cursor-default  ${isQuickLinks(item) && "hover:text-black !cursor-pointer"}`}>
                    {link.icon && (
                      <Image
                        src={link.icon.sourceUrl}
                        alt={link.icon.altText}
                        width={20}
                        height={20}
                        className="h-4 w-auto object-contain"
                      />
                    )}
                    {isQuickLinks(item) && (
                      <Arrow
                        width={20}
                        height={20}
                        color="#fff"
                        className="group-hover:invert"
                      />
                    )}
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <BookAppointmentBtn
          type="hero section"
          className="text-[#1c7777] [&_span]:bg-[#1c7777]  hover:text-white"
        />
      </div>
    </div>
  );
};

export default Top;
