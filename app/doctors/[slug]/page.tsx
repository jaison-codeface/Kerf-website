import { dummiDoctor } from "@/assets/images";
import SectionWrapper from "@/components/SectionWrapper";
import WordPressRichText from "@/components/WordPressRichText";
import Layout from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import main_padding from "@/styles/padding";
import { BookAppointmentBtn } from "@/ui/buttons";
import RosePetalTexture from "@/ui/rosePetalTexture";
import Image from "next/image";

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
        title={isData.title}
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
          <h2 data-aos="fade-up" className="text-[2rem] font-extrabold">
            {isData?.title}
          </h2>
          <div
            style={{}}
            className="w-full xl:max-h-[500px] md:max-h-[400px] md:overflow-y-scroll custom-scrollbar">
            <WordPressRichText htmlString={isData?.acf.content} />
          </div>
          <BookAppointmentBtn />
        </div>
        {/* textures */}
        <RosePetalTexture className="rotate-180 bottom-0 right-0" />
      </SectionWrapper>
    </Layout>
  );
};

export default page;
