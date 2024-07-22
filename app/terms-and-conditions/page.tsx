import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";

import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { dummiSectionHead } from "@/assets/images";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import WordPressRichText from "@/components/WordPressRichText";

const page = async () => {
  const data: TermsAndPolicyType =
    await getContentFromWordPress("termsAndConditions");
  const isData = data.page.acf;

  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Terms And Conditions",
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle={breadcrumbs[1].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={isData.bannerImage?.sourceUrl ?? dummiSectionHead}
        title={breadcrumbs[1].title}
      />
      <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
        <div className=" flex flex-col md:w-[70%] mt-16">
          <WordPressRichText htmlString={isData.content} />
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default page;
