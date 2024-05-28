import SectionWrapper from "@/components/SectionWrapper";
import React, { useState } from "react";
import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import Image from "next/image";



const Bottom = ({links}:{links : {
  title: string;
  link: string;
}[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex  items-center justify-between gap-20">
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
      <div className="lg:flex hidden items-center justify-center gap-4 ">
        {links.map((item, idx) => (
          <Link
            onClick={() => setIndex(idx)}
            key={idx}
            href={item.link}
            shallow
            className={`text-sm px-4 py-2  rounded-md duration-300 ${
              index === idx ? "bg-kerf-blue-light" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
