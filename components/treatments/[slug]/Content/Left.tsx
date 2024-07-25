import Image from "next/image";
import Link from "next/link";
import React from "react";
import WordPressRichText from "@/components/WordPressRichText";
import { dummiSection } from "@/assets/images";

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
      {/* <Image
        src={data?.acf.sectionImage?.sourceUrl ?? dummiSection}
        alt={data?.acf.sectionImage?.altText}
        data-aos="fade-up"
        width={1200}
        height={600}
        className="md:aspect-[16/7] aspect-video rounded-xl overflow-hidden object-cover "
      /> */}
      <div className=" flex flex-col  ">
        <h2 data-aos="fade-up" className="text-[2rem] font-extrabold">
          {data.title}
        </h2>
        <WordPressRichText htmlString={data?.acf.content} />
      </div>
    </div>
  );
};

export default Left;
