import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const ImageInBorder = ({
  mainImage,
  className,
}: {
  mainImage: any;
  className?: string;
}) => {
  return (
    <div
      data-aos="fade-up"
      className={twMerge(
        "flex items-center justify-center h-full w-full py-5 px-4 border rounded-[16px] border-[#919191]",
        className
      )}>
      <Image
        src={mainImage}
        alt=""
        width={100}
        height={100}
        loading="lazy"
        className="object-cover w-full h-full rounded-[10px]"
      />
    </div>
  );
};

export default ImageInBorder;
