import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import React from "react";

const Top = () => {
  return (
    <SectionWrapper
      classTop="bg-kerf-teal-light"
      classBottom="justify-end py-3 font-medium text-sm text-center">
      <Link href="/doctors" shallow className="">
        Our Doctors
      </Link>{" "}
      &nbsp; |&nbsp; Book an Appointment
    </SectionWrapper>
  );
};

export default Top;
