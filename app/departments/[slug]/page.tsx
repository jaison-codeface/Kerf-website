import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import Content from "@/components/departments/[slug]/Content";
import Doctor from "@/components/sections/Doctor";
import Blogs from "@/components/sections/Blogs";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

const page = async ({ params }: { params: { slug: string } }) => {
  const [data, blogs]: [DepartmentsTaxonomiesType, BlogsType] =
    await Promise.all([
      getContentFromWordPress("department", params.slug),
      getContentFromWordPress("blogs"),
    ]);
  const isData = data.departmentsTaxonomies?.edges[0].node;

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Departments",
      link: "javascript:void(0)",
    },
    {
      title: isData.name,
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle={breadcrumbs[2].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData.departments.nodes[0].acf.bannerImage.sourceUrl}
        title={isData.name}
      />
      <Content data={isData.departments.nodes[0]} />
      {isData.doctors.nodes.length > 0 && (
        <Doctor doctors={isData.doctors.nodes} />
      )}
      <Blogs blogs={blogs.blogs.nodes} />
    </Layout>
  );
};

export default page;
