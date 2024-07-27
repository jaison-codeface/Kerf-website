import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import dummi from "@/assets/images/home/hero session e.png";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Link from "next/link";
import Image from "next/image";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import { dummiSection } from "@/assets/images";
import { NormalBtn } from "@/ui/buttons";

const page = async () => {
  const [pageData, treatments]: [DoctorPageType, TreatmentCategoriesType] =
    await Promise.all([
      getContentFromWordPress("treatments page"),
      getContentFromWordPress("treatments"),
    ]);

  const isPageData = pageData.page.acf;
  const isTreatmentsData = treatments.treatmentCategorys.nodes;
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Treatments",
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout pageTitle="Treatments">
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={pageData.page?.acf.bannerImage.sourceUrl}
        title="Treatments"
      />
      <SectionWrapper
        classBottom={`${main_padding.y} flex-col items-center`}
        classTop="relative z-0">
        <HeadSubtitle>{isPageData.doctorSection.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 text-center max-w-[700px]">
          {isPageData.doctorSection.title}
        </HeadTitle>
        <div className="mt-16 grid gap-20   ">
          {isTreatmentsData.map((item, idx) => (
            <div key={idx} className={`flex  gap-8 flex-col items-start `}>
              <HeadTitle>{item.name}</HeadTitle>

              <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2  w-full md:gap-10 gap-8">
                {item.treatments.nodes.map((treatment, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={idx * 50}
                    className="bg-gradient-to-b from-kerf-teal-light to-[#d5fdfd] hover:rotate-[.5deg] to-[170%]  flex flex-col justify-start items-start px-4 py-3 rounded-xl w-full group   cursor-pointer hover:bg-kerf-blue  duration-300">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={
                          treatment?.acf?.bannerImage?.sourceUrl ?? dummiSection
                        }
                        alt={treatment?.acf?.bannerImage?.altText}
                        width={130}
                        height={130}
                        className="aspect-[16/11] h-auto  object-cover w-full  group-hover:scale-105 duration-300 "
                      />
                    </div>
                    <p className="font-bold uppercase text-xl text-start w-full h-max mt-4">
                      {treatment.title}
                    </p>
                    <div className="text-sm line-clamp-3 text-start mt-1 leading-5">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: treatment.acf.content,
                        }}></p>
                    </div>
                    <NormalBtn
                      href={`/treatments/${treatment.slug}`}
                      className="mt-4">
                      Read More
                    </NormalBtn>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* textures */}
        <RosePetalTexture className="rotate-180 bottom-0 right-0" />
      </SectionWrapper>
    </Layout>
  );
};

export default page;
