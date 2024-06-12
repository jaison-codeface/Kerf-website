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

const page = () => {
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

  const doctors = [
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/gdggdgg",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/iufcvt",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
    {
      title: "Dr.Treat you well",
      designation: "Find & Download Free Graphic Resources",
      image: dummi,
      buttons: [
        {
          title: "view profile",
          link: "doctors/wwdfcgg",
        },
        {
          title: "book an appointment",
          link: "",
        },
      ],
    },
  ];
  return (
    <Layout>
      <HeroSection breadcrumbs={breadcrumbs} bgImage={dummi} title="Doctors" />
      <SectionWrapper
        classBottom={`${main_padding.y} flex-col`}
        classTop="relative z-0"
      >
        <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
        <HeadTitle className="mt-1">We will treat you well</HeadTitle>
        <div className="md:mt-16 mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-10 sm:gap-6 gap-4">
          {doctors.map((item, idx) => (
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
