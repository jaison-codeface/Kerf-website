import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiSection } from "@/assets/images";
import Link from "next/link";

const OurSpecialties = ({
  data,
  treatments,
}: {
  data: HomePageType;
  treatments: TreatmentCategoriesType;
}) => {
  const isData = data.page?.acf.sectionSpecialties;

  function getHomePageTreatments() {
    const homePageTreatments: {
      title: string;
      slug: string;
      id: string;
      acf: {
        treatmentTitle: { name: string };
        icon: ImageType;
        content: string;
        bannerImage: ImageType;
        showInHomePage: boolean;
      };
    }[] = [];

    treatments.treatmentCategorys.nodes.forEach((category) => {
      category.treatments.nodes.forEach((treatment) => {
        if (treatment.acf && treatment.acf.showInHomePage === true) {
          homePageTreatments.push(treatment);
        }
      });
    });

    return homePageTreatments;
  }

  return (
    <SectionWrapper
      classTop="md:mt-20"
      classBottom={`${main_padding.y} sm:px-10 px-6 flex-col items-center  bg-gradient-to-t from-kerf-teal via-kerf-teal-light to-kerf-teal-light  rounded-3xl relative z-0 w-full`}>
      <div className={`flex flex-col w-full  items-center `}>
        <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 text-center"> {isData.title}</HeadTitle>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  w-full gap-10 md:mt-16 mt-8">
          {getHomePageTreatments().map((item, idx) => (
            <Link
              key={idx}
              href={`/treatments/${item.slug}`}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white flex flex-col justify-between items-center px-10 pt-8 gap-6 rounded-3xl w-full border border-transparent cursor-pointer hover:bg-kerf-blue hover:border-gray-700/30 duration-300">
              <Image
                src={item.acf.icon.sourceUrl ?? dummiSection}
                alt={item.acf.icon.altText}
                width={130}
                height={130}
                className="object-contain aspect-square"
              />
              <p className="font-bold uppercase text-[clamp(0.75rem,0.1346rem+0.8615vw,1rem)] text-center py-2 bg-black/10 rounded-t-xl px-5 w-full h-max">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <NormalBtn href={`/${isData.buttonLink}`} className="md:mt-16 mt-6">
          {isData.buttonText}
        </NormalBtn>
      </div>

      {/* textures */}
      <RosePetalTexture className="bottom-0 left-0  opacity-40 " />
    </SectionWrapper>
  );
};

export default OurSpecialties;
