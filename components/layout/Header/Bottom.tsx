import SectionWrapper from "@/components/SectionWrapper";
import React, { useMemo, useState } from "react";
import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Arrow from "@/assets/icons/ArrowRightDouble";

const Bottom = ({
  links,
}: {
  links: Array<{
    title: string;
    link?: string;
    dropDown?: Array<{
      title: string;
      links: Array<{
        title: string;
        link: string;
      }>;
    }>;
    singleDropDown?: Array<{
      title: string;
      link: string;
    }>;
  }>;
}) => {
  const [index, setIndex] = useState<number | null>(0);
  const [dropDownIndex, setDropDownIndex] = useState(0);
  const pathname = usePathname();

  useMemo(() => {
    for (let i = 0; i < links?.length; i++) {
      if (
        links[i].link?.includes(
          pathname.split("/").length > 0 ? pathname : pathname.split("/")[1]
        )
      ) {
        return setIndex(i);
      } else if (
        links[i].dropDown?.some((item) =>
          item.links.some((i) => i.link === decodeURIComponent(pathname))
        )
      ) {
        return setIndex(i);
      } else if (
        links[i].singleDropDown?.some(
          (item) => item.link === decodeURIComponent(pathname)
        )
      ) {
        return setIndex(i);
      } else if (
        links[i].link?.includes(
          pathname.split("/").length > 0 ? pathname.split("/")[1] : pathname
        )
      ) {
        return setIndex(i);
      }
    }
  }, [links, pathname]);

  return (
    <div className="flex  items-center justify-between xl:gap-20 gap-12 w-full">
      <Link href="/">
        <Image
          src={logo}
          alt=""
          priority
          height={60}
          width={200}
          className="object-contain h-[50px] object-left"
        />
      </Link>
      <div className="lg:flex hidden items-center justify-center gap-4 font-medium ">
        {links?.map((item, idx) => (
          <div
            key={idx}
            className="relative z-0 flex items-center justify-center group">
            <Link
              onClick={() => setIndex(idx)}
              href={item.link ? item.link : "javascript:void(0)"}
              shallow
              prefetch={true}
              className={`px-4 py-2  rounded-md duration-300 text-[clamp(0.75rem,0.5135rem+0.5405vw,1rem)] hover:bg-kerf-blue-light inline-flex items-center justify-center gap-2 ${
                index === idx ? "bg-kerf-blue-light" : ""
              }`}>
              {item.title}{" "}
              {(item.dropDown || item.singleDropDown) && (
                <svg
                  className={`h-[10px] w-auto group-hover:rotate-90`}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z"
                    fill="#292D32"
                  />
                </svg>
              )}
            </Link>
            {(item.dropDown || item.singleDropDown) && (
              <div className="pt-16 absolute  z-50 top-0 group-hover:translate-y-0 -translate-y-[900px] duration-500 pointer-events-none">
                <div className="flex flex-col gap-3 pointer-events-auto bg-white border border-gray-300 px-4 min-w-80 py-5 rounded-b-2xl ">
                  {item.dropDown && (
                    <>
                      <div className="flex items-center justify-center gap-10 px-3">
                        {item.dropDown.map((drop, dropIdx) => (
                          <button
                            key={dropIdx}
                            onClick={() => setDropDownIndex(dropIdx)}
                            className={`capitalize text-base font-bold px-6 py-1 rounded-lg ${
                              dropDownIndex === dropIdx
                                ? "bg-kerf-blue-light/50"
                                : ""
                            }`}>
                            {drop.title}
                          </button>
                        ))}
                      </div>
                      <hr />
                    </>
                  )}
                  <div className="flex flex-col w-full gap-3 pt-2 ">
                    {/* @ts-ignore */}
                    {(item.dropDown
                      ? item.dropDown[dropDownIndex].links
                      : item.singleDropDown && item.singleDropDown
                    ).map((drop, dropIdx) => (
                      <Link
                        key={dropIdx}
                        href={drop.link}
                        className={`text-sm font-bold flex items-center gap-2 hover:bg-kerf-blue-light/50 px-6 py-2 rounded-lg `}>
                        <Arrow width={14} height={20} />
                        {drop.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
