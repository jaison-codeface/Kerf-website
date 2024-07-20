import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import dummi from "@/assets/images/home/hero session e.png";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Link from "next/link";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import SingleDoctor from "@/ui/SingleDoctor";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

const page = async () => {
  const [pageData, doctorsData]: [DoctorPageType, DoctorType] =
    await Promise.all([
      getContentFromWordPress("doctor-page"),
      getContentFromWordPress("doctors"),
    ]);

  const isPageData = pageData.page.acf;
  const isDoctorsData = doctorsData.doctors.nodes;
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Doctors",
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle="Doctors">
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={pageData.page?.acf.bannerImage.sourceUrl}
        title="Doctors"
      />
      <SectionWrapper
        classBottom={`${main_padding.y} flex-col`}
        classTop="relative z-0">
        <HeadSubtitle>{isPageData.doctorSection.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1">{isPageData.doctorSection.title}</HeadTitle>
        <div className="md:mt-16 mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-10 sm:gap-6 gap-4">
          {isDoctorsData.map((item, idx) => (
            <SingleDoctor key={idx} idx={idx} item={item} />
          ))}
        </div>
        {/* textures */}
        <RosePetalTexture className="rotate-180 bottom-0 right-0" />
      </SectionWrapper>
    </Layout>
  );
};

export default page;
