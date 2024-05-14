"use client";
import SectionWrapper from "@/components/SectionWrapper";
import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import Layout from "@/components/layout";
import HeroSection from "@/components/our-team/[team_id]/HeroSection";
import { teamData } from "@/libs/contents";
import main_padding from "@/styles/padding";
import Link from "next/link";
import React from "react";

const page = ({ params }: any) => {
  const data = teamData.filter((item) => item.slug === params.team_id)[0];

  const index = teamData.findIndex((item) => item.slug === params.team_id);

  const buttons = [
    {
      title: "Prev",
      link: index === 0 ? "" : `/our-team/${teamData[index - 1].slug}`,
    },
    {
      title: "Next",
      link:
        index === teamData.length - 1
          ? ""
          : `/our-team/${teamData[index + 1].slug}`,
    },
  ];
  return (
    <Layout>
      <HeroSection
        heroSectionImage={data.image}
        title={data.title}
        description={data.descriptionForSinglePage}
        position={data.position}
      />

      <NavigationBtns buttons={buttons} />
    </Layout>
  );
};

export default page;
