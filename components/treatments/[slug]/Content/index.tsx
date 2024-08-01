import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import React from "react";
import Left from "./Left";
import Right from "./Right";

type Props = {
  leftData: {
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
  relatedTreatmentsData: any;
};

const Content = ({ leftData, relatedTreatmentsData }: Props) => {
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} max-sm:!pt-0 grid md:grid-cols-[1fr_0.5fr] grid-cols-1 lg:gap-20 gap-10 items-start`}>
      <Left data={leftData} />{" "}
      <Right relatedTreatmentsData={relatedTreatmentsData} />
    </SectionWrapper>
  );
};

export default Content;
