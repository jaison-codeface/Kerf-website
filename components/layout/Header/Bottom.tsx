import SectionWrapper from "@/components/SectionWrapper";
import React, { useMemo, useState } from "react";
import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Bottom = ({
  links,
}: {
  links: {
    title: string;
    link: string;
    dropDown?: {
      title: string;
      links: {
        title: string;
        link: string;
      }[];
    }[];
    singleDropDown?: {
      title: string;
      link: string;
    }[];
  }[];
}) => {
  const [index, setIndex] = useState<number | null>(0);
  const [dropDownIndex, setDropDownIndex] = useState(0);
  const pathname = usePathname();

  useMemo(() => {
    for (let i = 0; i < links.length; i++) {
      if (
        links[i].link.includes(
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
      }
    }
  }, [links, pathname]);

  return (
    <div className="flex  items-center justify-between gap-20 w-full">
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
      <div className="lg:flex hidden items-center justify-center gap-2 font-medium ">
        {links.map((item, idx) => (
          <div
            key={idx}
            className="relative z-0 flex items-center justify-center group">
            <Link
              onClick={() => setIndex(idx)}
              href={item.link}
              shallow
              className={`text-sm px-4 py-2  rounded-md duration-300 hover:bg-kerf-blue-light inline-flex items-center justify-center gap-2 ${
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
              <div className="pt-16 absolute  z-50 top-0 group-hover:translate-y-0 -translate-y-[900px] duration-500">
                <div className="flex flex-col gap-3  bg-white border border-gray-300 px-4 py-5 rounded-2xl ">
                  {item.dropDown && (
                    <>
                      <div className="flex items-center justify-center gap-10">
                        {item.dropDown.map((drop, dropIdx) => (
                          <button
                            key={dropIdx}
                            onClick={() => setDropDownIndex(dropIdx)}
                            className={`capitalize text-base font-medium px-6 py-1 rounded-lg ${
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
                  <div className="flex flex-col w-full gap-3 ">
                    {(!item.dropDown
                      ? item.singleDropDown
                      : item.dropDown[dropDownIndex].links
                    ).map((drop, dropIdx) => (
                      <Link
                        key={dropIdx}
                        href={drop.link}
                        className={`text-sm font-medium ${item.singleDropDown && "hover:bg-kerf-blue-light/50 px-6 py-2 rounded-lg"}`}>
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
