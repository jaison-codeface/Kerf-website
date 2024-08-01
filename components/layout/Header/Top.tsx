import SectionWrapper from "@/components/SectionWrapper";
import useStore from "@/libs/store";
import Link from "next/link";
import React from "react";

const Top = () => {
  const { utilities } = useStore();
  return (
    <SectionWrapper
      classTop="bg-kerf-teal-light"
      classBottom="justify-end py-3 font-medium text-sm text-center items-baseline">
      <Link
        href={`${utilities.footer?.utility?.acf.phoneNumber.link}`}
        shallow
        className="font-bold text-base ">
        {utilities.footer?.utility?.acf.phoneNumber.title}
      </Link>{" "}
      &nbsp; |&nbsp;
      <Link
        href={`${utilities.bookAndAppointment.utility.acf.link}`}
        shallow
        className="underline">
        Book an Appointment
      </Link>
    </SectionWrapper>
  );
};

export default Top;
