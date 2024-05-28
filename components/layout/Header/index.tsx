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
    link: "",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Services",
    link: "",
  },
  {
    title: "Facilities",
    link: "",
  },
  {
    title: "Blog",
    link: "",
  },
  {
    title: "Contact Us",
    link: "",
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
