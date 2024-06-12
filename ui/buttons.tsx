"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const NormalBtn = ({
  children,
  onClick,
  href,
  mode = "blue",
  className,
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
      href={href ? href : "javascript:void(0)"}
      className={twMerge(
        `px-8 py-3  font-bold rounded-lg capitalize ${
          mode === "blue"
            ? "bg-secondary border-secondary text-white bg-kerf-blue duration-300 hover:opacity-75"
            : "bg-white text-black hover:bg-secondary hover:border-secondary hover:text-white duration-300"
        }`,
        className
      )}
    >
      {children}
    </Link>
  );
};

const BookAppointmentBtn = () => {
  return (
    <Link
      data-aos="fade-up"
      href={""}
      className="px-10 py-4 rounded-lg bg-[#3398cc] sm:max-w-max text-center mt-6 font-bold text-white uppercase hover:opacity-90 duration-500"
    >
      book appointment
    </Link>
  );
};

export { NormalBtn, BookAppointmentBtn };
