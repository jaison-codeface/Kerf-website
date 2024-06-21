import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleDoctor = ({
  item,
  idx,
}: {
  item: {
    title: string;
    slug: string;
    acf: {
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
    <div
      data-aos="fade-up"
      data-aos-delay={50 * idx}
      className="relative z-0 w-full bg-[#e6e6e6] rounded-lg overflow-hidden flex flex-col items-start justify-end text-white  group px-6 pt-10 min-h-[260px]">
      <div className="absolute w-full flex flex-col overflow-hidden left-0 bottom-0 px-4 py-6">
        <h2 className="font-bold text-base ">{item.title}</h2>
        <p className="text-sm font-light mt-1">{item.title}</p>
        <div className="grid gap-1  mt-3 max-h-0 overflow-hidden group-hover:max-h-[900px] duration-700 ">
          {buttons.map((btn, btnIdx: any) => (
            <Link
              key={btnIdx}
              href={btn.link ? btn.link : "javascript:void(0)"}
              className="w-full bg-[#369de0] px-2 py-2 font-normal rounded-full grid place-content-center text-center sm:text-sm text-xs">
              {btn.title}
            </Link>
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
  );
};

export default SingleDoctor;
