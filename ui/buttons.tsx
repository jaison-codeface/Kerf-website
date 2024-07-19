"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import phoneFill from "@/assets/icons/phone fill.svg";

const NormalBtn = ({
  children,
  onClick,
  href,
  mode = "blue",
  className,
  // @ts-ignore
  props,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  mode?: "blue" | "green";
  className?: string;
}) => {
  const router = useRouter();

  return (
    <Link
      // @ts-ignore

      onClick={onClick}
      data-aos="fade-up"
      {...props}
      href={href ? href : "javascript:void(0)"}
      className={twMerge(
        `px-8 py-3  font-bold rounded-lg capitalize ${
          mode === "blue"
            ? "bg-secondary border-secondary text-white bg-gradient-to-r from-[#539fbd] to-[#3682a0] duration-300 hover:hue-rotate-[24deg]"
            : "bg-white text-black hover:bg-secondary hover:border-secondary hover:text-white duration-300"
        }`,
        className
      )}>
      {children}
    </Link>
  );
};

const BookAppointmentBtn = ({
  type,
  className,
}: {
  type?: "hero section";
  className?: string;
}) => {
  return type === "hero section" ? (
    <Link
      href=""
      suppressHydrationWarning
      data-aos="fade-up"
      data-aos-anchor="#top"
      className={twMerge(
        "flex items-center max-md:w-full justify-start  gap-4 px-4 py-3 bg-white rounded-full font-bold text-base group [&_*]:duration-300 hover:text-kerf-blue",
        className
      )}>
      <span className="h-[45px] w-[45px] shrink-0 bg-[#5eb996] group-hover:bg-kerf-blue flex items-center justify-center rounded-full">
        <Image
          src={phoneFill}
          alt=""
          width={18}
          height={18}
          className="object-contain aspect-square"
        />
      </span>
      Book your Appointment
    </Link>
  ) : (
    <Link
      data-aos="fade-up"
      href={""}
      className={twMerge(
        "px-10 py-4 rounded-lg bg-gradient-to-r from-[#539fbd] to-[#3682a0] sm:max-w-max text-center mt-6 font-bold text-white uppercase hover:opacity-90 duration-500",
        className
      )}>
      book appointment
    </Link>
  );
};

export { NormalBtn, BookAppointmentBtn };
