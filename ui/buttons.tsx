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

export { NormalBtn };
