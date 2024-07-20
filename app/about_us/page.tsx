import Chairman from "@/components/about_us/Chairman";
import ExploreOurWorld from "@/components/about_us/ExploreOurWorld";
import HeroSection from "@/components/sections/HeroSection";
import Partnering from "@/components/about_us/Partnering";
import ResearchFoundation from "@/components/about_us/ResearchFoundation";
import Testimonials from "@/components/about_us/Testimonials";
import VisionMission from "@/components/about_us/VisionMission";
import Layout from "@/components/layout";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import {  dummiSectionHead } from "@/assets/images";

const page = async () => {
  const data: AboutUsPageType = await getContentFromWordPress("about");
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Overview",
      link: "javascript:void(0)",
    },
  ];
  return (
    <Layout pageTitle={breadcrumbs[1].title}>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={data.page?.acf.bannerImage.sourceUrl ?? dummiSectionHead}
        title={
          <>
            {" "}
            About Us - <span className="">Overview</span>
          </>
        }
      />
      <ExploreOurWorld data={data} />
      <ResearchFoundation data={data} />
      <Chairman data={data} />
      <VisionMission data={data} />
      <Partnering data={data} />
      <Testimonials data={data} />
    </Layout>
  );
};

export default page;
