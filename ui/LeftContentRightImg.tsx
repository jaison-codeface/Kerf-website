import Image, { StaticImageData } from "next/image";
import React from "react";
import { HeadSubtitle, HeadTitle } from "./Typography";
import { NormalBtn } from "./buttons";

type Props = {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  btn1?: { title?: string; link?: string };
  btn2?: { title?: string; link?: string };
  direction?: "opposite" | "normal";
  image: StaticImageData;
};

const LeftContentRightImg = ({
  btn1,
  btn2,
  subtitle,
  title,
  direction = "normal",
  image,
}: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:gap-20 md:gap-14 gap-6 items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className={`flex flex-col justify-start ${
          direction === "opposite" && "md:order-1"
        } `}
      >
        <HeadTitle>{title}</HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2">{subtitle}</HeadSubtitle>
        <div>
          {(btn1 || btn2) && (
            <div className="flex items-center justify-start md:gap-6 gap-3 md:mt-6 mt-3">
              {btn1 && (
                <NormalBtn href={btn1?.link} className="max-md:w-full">
                  {btn1?.title}
                </NormalBtn>
              )}
              {btn2 && (
                <NormalBtn
                  mode="day"
                  href={btn2?.link}
                  className="max-md:w-full"
                >
                  {btn2?.title}
                </NormalBtn>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="bg-red-400 aspect-square rounded-[10px] overflow-hidden flex items-center justify-center relative z-0"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          placeholder="empty"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LeftContentRightImg;
