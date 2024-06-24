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
      sectionImage: ImageType;
      content: string;
    };
  };
  relatedTreatmentsData: any;
  departmentsTaxonomies: DepartmentsTaxonomiesType;
};

const Content = ({
  leftData,
  relatedTreatmentsData,
  departmentsTaxonomies,
}: Props) => {
  return (
    <SectionWrapper
      classTop="relative z-0"
      classBottom={`${main_padding.y} grid md:grid-cols-[1fr_0.5fr] grid-cols-1 lg:gap-20 gap-10 items-start`}>
      <Left data={leftData} />{" "}
      <Right
        relatedTreatmentsData={relatedTreatmentsData}
        departmentsTaxonomies={departmentsTaxonomies}
      />
    </SectionWrapper>
  );
};

export default Content;
