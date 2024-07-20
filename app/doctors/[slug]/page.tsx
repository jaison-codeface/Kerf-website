import Layout from "@/components/layout";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import HeroSection from "@/components/sections/HeroSection";
import RosePetalTexture from "@/ui/rosePetalTexture";
import main_padding from "@/styles/padding";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import WordPressRichText from "@/components/WordPressRichText";
import { dummiDoctor } from "@/assets/images";

const page = async ({ params }: { params: { slug: string } }) => {
  const data: DoctorType = await getContentFromWordPress("doctor", params.slug);
  const isData = data.doctors.nodes[0];

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Doctors",
      link: "/doctors",
    },
    {
      title: isData.title,
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle={breadcrumbs[2].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData?.acf.bannerImage.sourceUrl}
        title="Doctors Details View"
      />
      <SectionWrapper
        classTop="relative z-0"
        classBottom={`${main_padding.y} grid md:grid-cols-[1fr_1.4fr] grid-cols-1 lg:gap-20 gap-10 items-start`}>
        <Image
          src={isData?.acf.image.sourceUrl ?? dummiDoctor}
          alt={isData?.acf.image.altText}
          width={500}
          height={500}
          className="-z-10 object-contain w-full  rounded-xl overflow-hidden h-max"
        />
        <div className="w-full flex flex-col ">
          <h2 className="text-2xl font-medium">{isData?.title}</h2>
          <WordPressRichText htmlString={isData?.acf.content} />
          <Link
            href={""}
            className="px-10 py-4 rounded-lg bg-[#3398cc] sm:max-w-max text-center mt-6 font-bold text-white uppercase hover:opacity-90 duration-500">
            book appointment
          </Link>
        </div>
        {/* textures */}
        <RosePetalTexture className="rotate-180 bottom-0 right-0" />
      </SectionWrapper>
    </Layout>
  );
};

export default page;
