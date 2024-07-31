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
      icon: ImageType;
      content: string;
    };
  };
};
const Left = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center">
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
