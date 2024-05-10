import React from "react";
import { HeadSubtitle, HeadTitle } from "./Typography";
import { NormalBtn } from "./buttons";

type Props = {
  title?: string;
  subtitle?: string | JSX.Element;
  description?: string;
  btn1?: { title?: string; link?: string };
  btn2?: { title?: string; link?: string };
};
const HeroSectionBottom = ({
  btn1,
  btn2,
  description,
  subtitle,
  title,
}: Props) => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:gap-20 md:gap-14 sm:gap-6 gap-4">
      <div className="flex flex-col gap-1">
        {subtitle && (
          <HeadSubtitle className="md:text-xl text-lg text-secondary font-bold md:hidden">
            {subtitle}
          </HeadSubtitle>
        )}
        {title && <HeadTitle>{title}</HeadTitle>}
        {subtitle && (
          <HeadSubtitle className="text-xl text-secondary font-bold max-md:hidden">
            {subtitle}
          </HeadSubtitle>
        )}
      </div>
      <div className="flex flex-col gap-6">
        {description && <HeadSubtitle>{description}</HeadSubtitle>}
        {(btn1 || btn2) && (
          <div className="flex items-center justify-start md:gap-6 sm:gap-4 gap-2  max-sm:flex-wrap">
            {btn1 && (
              <NormalBtn href={btn1?.link} className="max-sm:w-full">
                {btn1?.title}
              </NormalBtn>
            )}
            {btn2 && (
              <NormalBtn mode="day" href={btn2?.link} className="max-sm:w-full">
                {btn2?.title}
              </NormalBtn>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSectionBottom;
