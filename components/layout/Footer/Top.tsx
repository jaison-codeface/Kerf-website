import main_padding from "@/styles/padding";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Top = ({ data }: { data: FooterType }) => {
  return (
    <div
      className={`w-full bg-kerf-teal ${main_padding.x} ${main_padding.y} rounded-t-[50px] text-white flex items-start justify-between lg:gap-20 gap-8 max-lg:flex-wrap`}>
      <div className="flex flex-col gap-4 w-full max-md:items-center max-md:text-center">
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
        <p data-aos="fade-up" className="font-normal text-sm md:max-w-[200px]">
        {data.utility.acf.description}
        </p>
      </div>
      <div className="flex items-start justify-between lg:gap-16 md:gap-12 gap-6 max-md:flex-wrap ">
        {data.utility.acf.footerLinks.map((item, idx) => (
          <div data-aos="fade-up" key={idx} className="flex flex-col gap-4">
            <h3 className="font-bold text-base shrink-0 w-max">{item.title}</h3>
            <div className="flex flex-col gap-2 w-full">
              {item.links.map((link) => (
                <Link
                  href={link.link ? link.link : "javascript:void(0)"}
                  shallow
                  key={idx + link.text}
                  className="text-sm font-normal w-full min-w-[180px]">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
