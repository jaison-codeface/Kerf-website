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
    dropDown?: {
      title: string;
      links: {
        title: string;
        link: string;
      }[];
    }[];
  }[];
}) => {
  const [toggle, setToggle] = useState(true);
  const [dropDown, setDropDown] = useState<any>([0, 0]);
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
          <Link
            key={idx}
            suppressHydrationWarning
            href={item.link ? item.link : "javascript:void(0)"}
            shallow
            className="flex flex-col items-end gap-2"
          >
            <p
              onClick={() =>
                dropDown[0] === idx
                  ? setDropDown([null, null])
                  : setDropDown([idx, dropDown[1]])
              }
              className="inline-flex items-center justify-center gap-1"
            >
              {item.dropDown && (
                <svg
                  className={`h-[10px] w-auto duration-300 rotate-180 ${
                    dropDown[0] === idx && "rotate-90"
                  }`}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z"
                    fill="#292D32"
                  />
                </svg>
              )}
              {item.title}{" "}
            </p>
            {item.dropDown && (
              <menu
                className={`pr-4 flex flex-col items-end gap-1 ${
                  dropDown[0] !== idx && "hidden"
                }`}
              >
                {item.dropDown.map((drop, dropIdx) => (
                  <li
                    onClick={() => setDropDown([dropDown[0], dropIdx])}
                    key={dropIdx}
                    className="flex flex-col items-end"
                  >
                    <p className="inline-flex items-center gap-1">
                      {item.dropDown && (
                        <svg
                          className={`h-[10px] w-auto duration-300 rotate-180 ${
                            dropDown[1] === dropIdx && "rotate-90"
                          }`}
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.02001 5.4919L5.05001 3.52188L1.84001 0.31188C1.16 -0.35812 0 0.12188 0 1.08188V7.3119V12.9219C0 13.8819 1.16 14.3619 1.84001 13.6819L7.02001 8.5019C7.85001 7.6819 7.85001 6.3219 7.02001 5.4919Z"
                            fill="#292D32"
                          />
                        </svg>
                      )}{" "}
                      {drop.title}
                    </p>
                    <span
                      className={` flex-col items-end gap-1 ${
                        dropDown[1] === dropIdx ? "flex" : "hidden"
                      }`}
                    >
                      {drop.links.map((link, linkIdx) => (
                        <Link key={linkIdx} href={link.link} className="pr-4">
                          {link.title}
                        </Link>
                      ))}
                    </span>
                  </li>
                ))}
              </menu>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavMobile;
