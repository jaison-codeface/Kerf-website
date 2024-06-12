import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import Top from "./Top";
import Bottom from "./Bottom";
import SectionWrapper from "@/components/SectionWrapper";
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about_us",
  },
  {
    title: "Treatments",
    link: "",
    dropDown: [
      {
        title: "Ear",
        links: [
          {
            title: "Tympanoplasty",
            link: "/departments/Tympanoplasty",
          },
          {
            title: "Mastoidectomy",
            link: "/departments/Tympanoplasty",
          },
        ],
      },
      {
        title: "Nose",
        links: [
          {
            title: "Endoscopic sinus surgery",
            link: "/departments/Tympanoplasty",
          },
          {
            title: "Mastoidectomy",
            link: "/departments/Tympanoplasty",
          },
        ],
      },
      {
        title: "throat",
        links: [
          {
            title: "Pain relievers",
            link: "/departments/Pain relievers",
          },
          {
            title: "Decongestants",
            link: "/departments/Decongestants",
          },
          {
            title: "Antibiotics",
            link: "/departments/Antibiotics",
          },
        ],
      },
    ],
  },
  {
    title: "Departments",
    link: "",
  },
  {
    title: "Carers",
    link: "",
  },

  {
    title: "Contact Us",
    link: "/contact_us",
  },
];

const Header = () => {
  return (
    <nav className="w-full absolute top-0 flex flex-col z-50 overflow-x-clip">
      <Top />
      <SectionWrapper classBottom="items-center justify-between gap-20 py-4">
        <Bottom links={links} />
        {/* mobile  */}

        <NavMobile links={links} />
      </SectionWrapper>
    </nav>
  );
};

export default Header;
