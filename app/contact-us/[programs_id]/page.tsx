import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";
import { programsData } from "@/libs/contents";
import React from "react";

export function generateStaticParams() {
  const data = ["kids-of-excellence", "men-of-valor"].map((i) => {
    return programsData.filter((item) => item.slug !== i)[0];
  });

  return data.map((item) => ({
    programs_id: item.slug,
  }));
}

const page = ({ params }: any) => {
  const data = programsData.filter(
    (item) => item.slug === params.programs_id
  )[0];

  return (
    <Layout>
      <HeroSection {...data} />
      <About {...data} />
    </Layout>
  );
};

export default page;
