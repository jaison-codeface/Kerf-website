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
        href={`tel:${utilities.footer.utility.acf.phoneNumber}`}
        shallow
        className="">
        {utilities.footer.utility.acf.phoneNumber}
      </Link>{" "}
      &nbsp; |&nbsp; Book an Appointment
    </SectionWrapper>
  );
};

export default Top;
