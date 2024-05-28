import React, { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

const HeadTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <h1 data-aos="fade-up" className={twJoin("md:text-5xl text-4xl", className)}> {children}</h1>;
const HeadSubtitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <p data-aos="fade-up" className={twMerge("text-sm", className)}> {children}</p>;
const SectionDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <p data-aos="fade-up" className={twMerge("text-xl leading-[180%]", className)}> {children}</p>;

export { HeadTitle, HeadSubtitle , SectionDescription};
