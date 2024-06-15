import Link from "next/link";
import React from "react";

const RelatedTreatments = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 data-aos="fade-up" className="text-base font-bold">
        Related Treatments
      </h2>
      <div className="flex flex-col gap-1 px-4 py-6 bg-[#d7ece5] w-full rounded-2xl mt-4">
        {["fdsfdf", "fdsfdf", "fdsfdf", "fdsfdf", "fdsfdf", "fdsfdf"]
          .slice(0, 7)
          .map((item, idx) => (
            <Link
              href=""
              data-aos="fade-up"
              data-aos-delay={50 * idx}
              key={idx}
              suppressHydrationWarning
              className="border border-white rounded-full px-6 py-2 flex items-center justify-between gap-10 uppercase font-medium text-sm hover:bg-white duration-300">
              {item}
              <span className="text-[#e47c63]">&#10140;</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedTreatments;
