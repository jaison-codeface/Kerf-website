"use client";

import { dummiSection } from "@/assets/images";
import useStore from "@/libs/store";
import { BookAppointmentBtn } from "@/ui/buttons";
import Image from "next/image";

const RequestYourAppointment = () => {
  const { utilities } = useStore();
  return (
    <div className="w-full flex items-end justify-center  bg-[#f4f4f6] px-4 py-3 rounded-2xl relative z-0 overflow-hidden aspect-[16/11]">
      <Image
        src={
          utilities.bookAndAppointment?.utility?.acf
            ?.backgroundImageForTreatmentSection?.sourceUrl ?? dummiSection
        }
        alt=""
        fill
        loading="lazy"
        className="-z-10 pointer-events-none object-cover"
      />

      <BookAppointmentBtn />
    </div>
  );
};

export default RequestYourAppointment;
