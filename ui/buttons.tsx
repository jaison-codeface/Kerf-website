"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NormalBtn = ({
  children,
  onClick,
  href,
  mode = "night",
  className,
}: {
  children: ReactNode;
  onClick?: any;
  href?: string;
  mode?: "night" | "day";
  className?: string;
}) => {
  const router = useRouter();
  const handleClick = () => href && router.push(href);
  return (
    <button
      // @ts-ignore
      onClick={(handleClick, onClick)}
      className={twMerge(
        `px-8 py-2 border border-black font-semibold sm:text-sm text-xs rounded-md capitalize ${
          mode === "night"
            ? "bg-secondary border-secondary text-white hover:bg-transparent hover:border-black hover:text-black duration-300"
            : "bg-white text-black hover:bg-secondary hover:border-secondary hover:text-white duration-300"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export { NormalBtn };
