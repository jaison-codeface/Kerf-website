import React from "react";
import fb from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin-with-circle.svg";
import telegram from "@/assets/icons/telegram-fill.svg";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
  {
    icon: fb,
    link: "",
  },
  {
    icon: instagram,
    link: "",
  },
  {
    icon: telegram,
    link: "",
  },
  {
    icon: linkedin,
    link: "",
  },
];

const Bottom = () => {
  return (
    <div className="flex items-center justify-between md:gap-20 gap-3 w-full py-8 max-md:flex-col-reverse">
      <p className="text-sm max-md:text-center">
        © 2024 KERF Hospital. All rights reserved. <br />
        Designed by{" "}
        <a href="https://codefacetech.com/" target="_blank">
          Codeface
        </a>
      </p>
      <div className="flex items-center justify-center gap-4">
        {socialMedia.map((item, idx) => (
          <Link key={idx} href={item.link} shallow target="_blank">
            <Image
              src={item.icon}
              alt=""
              loading="lazy"
              className="object-contain aspect-square w-auto h-8"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
