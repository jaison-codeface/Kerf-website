import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "@/assets/icons/arrow down.svg";

type Props = {
  links: (
    | {
        title: string;
        link: string;
        subLinks?: undefined;
      }
    | {
        title: string;
        link: string;
        subLinks: {
          title: string;
          link: string;
        }[];
      }
  )[];
  setExpand: React.Dispatch<React.SetStateAction<number>>;
  expand: number;
};
const NavMobile = ({ links, expand, setExpand }: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center w-[45px] h-[45px] lg:hidden">
        <svg
          onClick={() => setToggle(!toggle)}
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={toggle ? "12.1994" : "13.97"}
            y1={toggle ? "14.916" : "15.03"}
            x2={toggle ? "58.916" : "49.4213"}
            y2={toggle ? "59.8006" : "15.03"}
            stroke="#DD3333"
            strokeWidth="5.94"
            strokeLinecap="round"
            className="duration-300"
          />
          <line
            x1="23.0244"
            y1="37.03"
            x2="58.4757"
            y2="37.03"
            stroke="#DD3333"
            strokeWidth="5.94"
            strokeLinecap="round"
            className={`${toggle && "opacity-0"} `}
          />
          <line
            x1={toggle ? "14" : "13.97"}
            y1={toggle ? "57.7998" : "59.03"}
            x2={toggle ? "56.7998" : "49.4213"}
            y2={toggle ? "15" : "59.03"}
            stroke="#DD3333"
            strokeWidth="5.94"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/*  */}

      <div
        className={`flex flex-col left-0 items-start justify-start gap-4 absolute top-20 bg-white/90 backdrop-blur-sm  px-2 py-4 rounded-[10px] shadow-md z-50 w-[90vw] lg:hidden duration-300 ${
          toggle ? "translate-x-[0%]" : "translate-x-[200%]"
        }`}
      >
        <menu className="flex flex-col items-start justify-start gap-2 ">
          {links.map((item, idx) => (
            <li
              onClick={() => (expand !== idx ? setExpand(idx) : setExpand(0))}
              key={idx}
              className="font-semibold text-sm cursor-pointer"
            >
              {item.subLinks ? (
                <div className="relative z-0 flex flex-col items-start justify-center">
                  <span className="flex items-center justify-start gap-1">
                    {item.title}
                    <Image
                      src={arrowDown}
                      alt={""}
                      width={12}
                      height={7}
                      className={`h-[7px] w-auto object-contain duration-300 ${
                        expand === idx && "rotate-180"
                      }`}
                    />
                  </span>
                  {/*  */}
                  {expand === idx && (
                    <div className="flex flex-col items-start pl-4 justify-center gap-3 py-2">
                      {item.subLinks.map((subLink, subLinkIdx) => (
                        <Link
                          key={subLinkIdx}
                          onClick={() => {
                            setExpand(0), setToggle(false);
                          }}
                          href={subLink.link}
                          shallow
                          className="text-center "
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.link} onClick={() => setToggle(false)}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </menu>
        <NormalBtn
          mode="day"
          onClick={() => setToggle(false)}
          className="bg-transparent w-full "
        >
          Live
        </NormalBtn>
      </div>
    </>
  );
};

export default NavMobile;
