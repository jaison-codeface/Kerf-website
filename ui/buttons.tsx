"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import phoneFill from "@/assets/icons/phone fill.svg";
import useStore from "@/libs/store";

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
      shallow
      {...props}
      suppressHydrationWarning
      href={href ? href : "javascript:void(0)"}
      className={twMerge(
        `px-8 py-3  font-bold rounded-lg capitalize ${
          mode === "blue"
            ? "bg-secondary border-secondary text-white hover:from-[#72a3f3] hover:to-[#6692d8] bg-gradient-to-r from-[#5880bf] to-[#456597] duration-300"
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
  const { utilities } = useStore();
  return type === "hero section" ? (
    <Link
      href={
        utilities.bookAndAppointment?.utility?.acf.link ?? "javascript:void(0)"
      }
      suppressHydrationWarning
      data-aos="fade-up"
      data-aos-anchor="#top"
      shallow
      className={twMerge(
        "flex items-center max-md:w-full justify-start  gap-4 px-4 py-3 bg-white rounded-[15px] leading-[1.5rem] font-bold text-[1.1rem] group [&_*]:duration-300 text-kerf-blue hover:bg-slate-600/20 duration-300",
        className
      )}>
      <span className="h-[45px] w-[45px] shrink-0 bg-kerf-blue  flex items-center justify-center rounded-[12px]">
        <Image
          src={phoneFill}
          alt=""
          width={18}
          height={18}
          className="object-contain aspect-square"
        />
      </span>
      {utilities.bookAndAppointment?.utility?.acf.title}
    </Link>
  ) : (
    <Link
      data-aos="fade-up"
      suppressHydrationWarning
      href={
        utilities.bookAndAppointment?.utility?.acf.link ?? "javascript:void(0)"
      }
      shallow
      className={twMerge(
        "px-10 py-4 rounded-lg hover:from-[#72a3f3] hover:to-[#6692d8] bg-gradient-to-r from-[#5880bf] to-[#456597] sm:max-w-max text-center mt-6 font-bold text-white  duration-500",
        className
      )}>
      {utilities.bookAndAppointment?.utility?.acf.title}
    </Link>
  );
};

export { NormalBtn, BookAppointmentBtn };
