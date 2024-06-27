import Link from "next/link";
import React from "react";

type Props = {
  relatedTreatmentsData: {
    title: string;
    slug: string;
  }[];
};

const RelatedTreatments = ({ relatedTreatmentsData }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <h2 data-aos="fade-up" className="text-base font-bold">
        Related Treatments
      </h2>
      <div className="flex flex-col gap-1 px-4 py-6 bg-[#d7ece5] w-full rounded-2xl mt-4">
        {relatedTreatmentsData.slice(0, 7).map((item, idx) => (
          <Link
            href={`/treatments/${item.slug}`}
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            key={idx}
            suppressHydrationWarning
            className="border border-white rounded-lg px-6 py-4` flex items-center justify-between gap-10 uppercase font-medium text-sm hover:bg-white duration-300">
            {item.title}
            <span className="text-[#e47c63]">&#10140;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTreatments;
