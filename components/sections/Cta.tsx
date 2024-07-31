"use client";
import { dummiSection } from "@/assets/images";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import Image from "next/image";
import { BookAppointmentBtn } from "@/ui/buttons";
import { HeadTitle } from "@/ui/Typography";

const Cta = ({
  data,
}: {
  data: {
    backgroundImage: ImageType;
    title: string;
  };
}) => {
  return (
    <SectionWrapper
      classTop={`overflow-hidden ${main_padding.y}`}
      classBottom={`md:py-14 py-6 relative z-0 rounded-[20px] overflow-hidden ${main_padding.x} text-white md:gap-20 gap-2 md:items-center justify-between max-md:flex-col`}>
      <HeadTitle className="md:w-[60%]">{data.title}</HeadTitle>
      <BookAppointmentBtn className="" />
      <Image
        src={data.backgroundImage?.sourceUrl ?? dummiSection}
        alt=""
        fill
        className="-z-10 object-cover"
      />
    </SectionWrapper>
  );
};

export default Cta;
