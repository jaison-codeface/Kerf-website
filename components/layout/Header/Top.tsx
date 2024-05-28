import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import React from "react";

const Top = () => {
  return (
    <SectionWrapper classTop="bg-kerf-teal-light" classBottom="justify-end py-3">
      <Link href="" className="font-medium text-sm text-center">
        Our Doctors | Book an Appointment
      </Link>
    </SectionWrapper>
  );
};

export default Top;
