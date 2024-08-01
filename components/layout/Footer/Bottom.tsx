import React from "react";
import Link from "next/link";
import Image from "next/image";

const Bottom = ({ data }: { data: FooterType }) => {
  return (
    <div className="flex items-center justify-between md:gap-20 gap-3 w-full py-8 max-md:flex-col-reverse">
      <p className="text-base max-md:text-center">
        &#9400; 2024 KERF Hospital. All rights reserved | Designed by{" "}
        <a href="https://codefacetech.com/" target="_blank" className="hover:text-[#f9d10d] duration-300">
          Codeface Technologies
        </a>
      </p>
      <div className="flex items-center justify-center gap-4">
        {data?.utility?.acf.socialMedia.map((item, idx) => (
          <Link rel="noindex" 
            key={idx}
            suppressHydrationWarning
            href={item.link ? item.link : "javascript:void(0)"}
            shallow
            target="_blank">
            <Image
              src={item.icon.sourceUrl}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              className="object-contain aspect-square w-auto h-8"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
