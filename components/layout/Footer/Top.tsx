import main_padding from "@/styles/padding";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo white.webp";

const links = [
  {
    title: "INDIA",
    links: [
      {
        title: "Madhavam,Thevally, Near Ramavarma Club, Kollam,Kerala, India",
        link: "",
      },
      {
        title: "Call: +971 4 5730700",
        link: "tel:+97145730700",
      },
      {
        title: "Toll free: 800674",
        link: "tel:800674",
      },
    ],
  },
  {
    title: "SHARJAH",
    links: [
      {
        title: "Ideal Medical Centre Rolla, Sharjah United Arab Emrites",
        link: "",
      },
      {
        title: "Mobile: +971506689832",
        link: "tel:+971506689832",
      },
      {
        title: "Toll free: 800674",
        link: "tel:800674",
      },
    ],
  },

  {
    title: "QUICK LINKS",
    links: [
      {
        title: "Audiology",
        link: "",
      },
      {
        title: "Otology ",
        link: "",
      },
      {
        title: "Rhinology",
        link: "",
      },
    ],
  },
];

const Top = () => {
  return (
    <div
      className={`w-full bg-kerf-teal ${main_padding.x} ${main_padding.y} rounded-t-[50px] text-white flex items-start justify-between lg:gap-20 gap-8 max-lg:flex-wrap`}
    >
      <div  className="flex flex-col gap-4 w-full max-md:items-center max-md:text-center">
        <Link  data-aos="fade-up" href="/" shallow>
          <Image
            src={logo}
            alt=""
            loading="lazy"
            height={60}
            width={200}
            className="h-[50px] w-auto object-contain"
          />
        </Link>
        <p  data-aos="fade-up" className="font-normal text-sm md:max-w-[200px]">
          Neuro Spinal Hospital is a pioneer by bringing the best and the latest
          in Medicine, Technology and Education to serve and heal the community.
        </p>
      </div>
      <div className="flex items-start justify-between lg:gap-16 md:gap-12 gap-6 max-md:flex-wrap ">
        {links.map((item, idx) => (
          <div  data-aos="fade-up" key={idx} className="flex flex-col gap-4">
            <h3 className="font-bold text-base shrink-0 w-max">{item.title}</h3>
            <div className="flex flex-col gap-2 w-full">
              {item.links.map((link) => (
                <Link
                  href={link.link}
                  shallow
                  key={idx + link.title}
                  className="text-sm font-normal w-full min-w-[140px]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
