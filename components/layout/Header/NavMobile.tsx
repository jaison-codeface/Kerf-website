import main_padding from "@/styles/padding";
import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavMobile = ({
  links,
}: {
  links: {
    title: string;
    link: string;
  }[];
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`flex items-center justify-center w-[50px] h-[50px] lg:hidden  p-2 border-2 border-kerf-blue rounded-lg`}
      >
        {/* toggle button */}
        <svg
          onClick={() => setToggle(!toggle)}
          width="48"
          height="36"
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {toggle ? (
            <path
              d="M1.5 26.5L39.75 1.5M1.5 1.5L39.75 26.5"
              stroke="#148FBC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <>
              <path
                d="M1.25 14H38.75"
                stroke="#33CCCC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.25 1.5H26.25M13.75 26.5H38.75"
                stroke="#148FBC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>
      </div>

      {/*  */}

      <div
        className={`flex flex-col right-6 items-end justify-start gap-3 absolute top-32 bg-kerf-blue-light/50 backdrop-blur-sm  pr-4 pl-10 py-6 rounded-[10px] shadow-md z-50 w-max lg:hidden duration-300 ${
          toggle ? "translate-x-[0%]" : "translate-x-[200%]"
        }`}
      >
        {links.map((item, idx) => (
          <Link key={idx} href={item.link} shallow>
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavMobile;
