import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/icons/logo.webp";
import arrowDown from "@/assets/icons/arrow down.svg";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import { blogData } from "@/libs/contents";

const blogSubLinks = [...blogData].slice(0, 3).map((item) => {
  const d = {
    title: item.title,
    link: `/blog/${item.slug}`,
  };
  return d;
});

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Ministries",
    link: "",
    subLinks: [
      {
        title: "Team",
        link: "/our-team",
      },
      {
        title: "Men Of Valor",
        link: "/contact-us/men-of-valor",
      },
      {
        title: "Kids Of Excellence",
        link: "/contact-us/kids-of-excellence",
      },
      {
        title: "Music Ministry",
        link: "/contact-us/music-ministry",
      },
      {
        title: "Women of Destiny",
        link: "/contact-us/women-of-destiny",
      },
      {
        title: "Outreach",
        link: "/contact-us/outreach",
      },
      {
        title: "Youth Mission Statement",
        link: "/contact-us/children-and-youth-mission",
      },
    ],
  },
  {
    title: "Blog",
    link: "",
    subLinks: blogSubLinks,
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

const Header = () => {
  const [expand, setExpand] = useState(0);
  return (
    <nav className="flex items-center lg:justify-center justify-between gap-28 absolute top-5 bg-white/50 backdrop-blur-sm md:px-20 px-2 py-1 rounded-[10px] shadow-md z-50 max-lg:w-[90vw] overflow-x-clip">
      <Link href="/" shallow>
        <Image
          src={logo}
          alt=""
          width={220}
          height={160}
          className="lg:h-[66px] h-[60px] w-auto object-contain"
        />
      </Link>

      <menu className="flex items-center justify-center gap-10  max-lg:hidden">
        {links.map((item, idx) => (
          <li
            onClick={() => (expand !== idx ? setExpand(idx) : setExpand(0))}
            onMouseOver={() => setExpand(idx)}
            key={idx}
            className="font-semibold text-sm cursor-pointer"
          >
            {item.subLinks ? (
              <div className="relative z-0 flex flex-col items-center justify-center">
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
                  <div className="flex flex-col items-start justify-center gap-3 absolute top-[280%] bg-white/50 backdrop-blur-md w-max px-4 py-6 rounded-[10px] shadow-md ">
                    {item.subLinks.map((subLink, subLinkIdx) => (
                      <Link
                        key={subLinkIdx}
                        onClick={() => setExpand(0)}
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
              <Link href={item.link}>{item.title}</Link>
            )}
          </li>
        ))}
      </menu>
      <NormalBtn mode="day" className="bg-transparent max-lg:hidden">
        Live
      </NormalBtn>

      {/* mobile  */}

      <NavMobile links={links} expand={expand} setExpand={setExpand} />
    </nav>
  );
};

export default Header;
