import Image from "next/image";
import Link from "next/link";
import React from "react";
import second from "@/assets/images/home/our philosophy.webp";
import { BookAppointmentBtn } from "@/ui/buttons";
import WordPressRichText from "@/components/WordPressRichText";

type Props = {
  data: {
    title: string;
    treatmentCategorys: {
      nodes: {
        name: string;
        id: string;
        slug: string;
      }[];
    };
    acf: {
      bannerImage: ImageType;
      sectionImage: ImageType;
      content: string;
    };
  };
};
const Left = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={data.acf.sectionImage.sourceUrl}
        alt={data.acf.sectionImage.altText}
        data-aos="fade-up"
        width={1200}
        height={600}
        className="md:aspect-[16/7] aspect-video rounded-xl overflow-hidden object-cover "
      />
      <div className=" flex flex-col  mt-16">
        <h2 data-aos="fade-up" className="text-2xl font-medium">
          {data.title}
        </h2>
        <WordPressRichText htmlString={data.acf.content} />
      </div>
    </div>
  );
};

export default Left;
