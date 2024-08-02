import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import RosePetalTexture from "@/ui/rosePetalTexture";
import SingleDoctor from "@/ui/SingleDoctor";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { WithContext, BreadcrumbList } from "schema-dts";

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

  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: isDoctorsData.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.title,
      item: "https://www.kerfenthospital.com/doctors/" + item.slug,
    })),
    url: "https://www.kerfenthospital.com/doctors",
  };

  return (
    <Layout pageTitle="Doctors" jsonLd={jsonLd}>
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
