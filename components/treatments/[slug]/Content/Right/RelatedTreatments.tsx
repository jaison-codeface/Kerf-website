import Link from "next/link";
import Arrow from "@/assets/icons/ArrowRightDouble";

type Props = {
  relatedTreatmentsData: {
    title: string;
    slug: string;
  }[];
};

const RelatedTreatments = ({ relatedTreatmentsData }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <h2 data-aos="fade-up" className="sm:text-[1.7rem] text-lg font-bold">
        Related Treatments
      </h2>
      <div className="flex flex-col gap-1 px-4 py-6   bg-gradient-to-t from-[#79a3b8] via-[#98cbe5] to-[#98cbe5]  w-full rounded-2xl mt-4">
        {relatedTreatmentsData.slice(0, 7).map((item, idx) => (
          <Link
            href={`/treatments/${item.slug}`}
            data-aos="fade-up"
            data-aos-delay={50 * idx}
            key={idx}
            shallow
            suppressHydrationWarning
            className="border border-white rounded-lg text-white px-6 py-4 flex items-center justify-between gap-10 uppercase font-bold text-sm hover:bg-gray-600/20 duration-300">
            {item.title}
            <Arrow color="#fff" width={18} height={18} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTreatments;
