import SectionWrapper from "@/components/SectionWrapper";
import useStore from "@/libs/store";
import Link from "next/link";
import React from "react";

const Top = () => {
  const { utilities } = useStore();
  return (
    <SectionWrapper
      classTop="bg-kerf-teal-light"
      classBottom="justify-end py-3 font-medium text-sm text-center">
      <Link
        href={`${utilities.footer?.utility?.acf.phoneNumber.link}`}
        shallow
        className="font-bold">
        {utilities.footer?.utility?.acf.phoneNumber.title}
      </Link>{" "}
      &nbsp; |&nbsp; Book an Appointment
    </SectionWrapper>
  );
};

export default Top;
