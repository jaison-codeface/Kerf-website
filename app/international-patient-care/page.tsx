import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";

import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { dummiSectionHead } from "@/assets/images";
import Content from "@/components/departments/[slug]/Content";
import Cta from "@/components/sections/Cta";
import main_padding from "@/styles/padding";
import WordPressRichText from "@/components/WordPressRichText";
import SectionWrapper from "@/components/SectionWrapper";

const page = async () => {
  const data: InternationalPatientCareType = await getContentFromWordPress(
    "international patient care page"
  );
  const isData = data.page;

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: isData.title,
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle={breadcrumbs[1].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData?.acf?.bannerImage?.sourceUrl ?? dummiSectionHead}
        title={isData.title}
      />
      <SectionWrapper classBottom={`${main_padding.b} flex-col items-center`}>
        <div className=" flex flex-col md:w-[70%] ">
          <WordPressRichText htmlString={isData.acf.content} />
        </div>
      </SectionWrapper>
      {isData.cta && <Cta data={isData.cta} />}
    </Layout>
  );
};

export default page;
