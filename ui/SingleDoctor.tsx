import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NormalBtn } from "./buttons";

const SingleDoctor = ({
  item,
  idx,
}: {
  item: {
    title: string;
    slug: string;
    acf: {
      designation: string;
      bannerImage: ImageType;
      image: ImageType;
      content: string;
    };
  };
  idx: any;
}) => {
  const buttons = [
    {
      title: "view profile",
      link: `/doctors/${item.slug}`,
    },
    {
      title: "book an appointment",
      link: "",
    },
  ];
  return (
    <>
      {item.title ? (
        <div
          data-aos="fade-up"
          data-aos-delay={50 * idx}
          className="relative z-0 w-full bg-[#e6e6e6] rounded-lg overflow-hidden flex flex-col items-start justify-end text-white  group  min-h-[260px]">
          <div className="absolute w-full flex flex-col overflow-hidden left-0 bottom-0 px-4 py-6">
            <h2 className="font-bold text-base ">{item.title}</h2>
            <p className="text-sm font-light mt-1">{item.acf.designation}</p>
            <div className="grid gap-1  mt-3 max-h-0 overflow-hidden group-hover:max-h-[900px] duration-700 ">
              {buttons.map((btn, btnIdx: any) => (
                <NormalBtn
                  key={btnIdx}
                  href={btn.link}
                  className="text-sm font-normal text-center py-2">
                  {btn.title}
                </NormalBtn>
              ))}
            </div>
          </div>
          <Image
            src={item.acf.image.sourceUrl}
            alt={item.acf.image.altText}
            width={300}
            height={300}
            className="-z-10 object-contain  object-bottom h-full w-full"
          />
          <span className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t to-transparent from-kerf-blue-dark/90  -z-[5]" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SingleDoctor;
