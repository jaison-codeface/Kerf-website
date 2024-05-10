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
        `px-8 py-2 border border-tertiary  font-semibold sm:text-sm text-xs rounded-md capitalize ${
          mode === "night" ? "bg-tertiary text-white" : "bg-white text-tertiary"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export { NormalBtn };
