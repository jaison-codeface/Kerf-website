import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { dummiLogo, dummiSection } from "@/assets/images";
import Link from "next/link";
import IconBox from "@/ui/IconBox";
import crPng from "@/assets/images/corner radius.png";

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
            // <Link
            //   key={idx}
            //   href={`/treatments/${item.slug}`}
            //   data-aos="fade-up"
            //   data-aos-delay={idx * 50}
            //   className="bg-white flex flex-col justify-between items-center px-10 pt-8 gap-6 rounded-3xl w-full border border-transparent cursor-pointer hover:bg-kerf-blue hover:border-gray-700/30 duration-300">
            //   <Image
            //     src={item.acf.icon.sourceUrl ?? dummiSection}
            //     alt={item.acf.icon.altText}
            //     width={130}
            //     height={130}
            //     className="object-contain aspect-square"
            //   />
            //   <p className="font-bold uppercase text-[clamp(0.75rem,0.1346rem+0.8615vw,1rem)] text-center py-2 bg-black/10 rounded-t-xl px-5 w-full h-max">
            //     {item.title}
            //   </p>
            // </Link>

            <Link
              suppressHydrationWarning
              key={idx}
              href={`/treatments/${item.slug}`}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white hover:rotate-[1deg] to-[170%]  flex flex-col justify-start items-start p-3 rounded-xl w-full group   cursor-pointer  group  duration-300 relative z-0">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item?.acf?.bannerImage?.sourceUrl ?? dummiSection}
                  alt={item?.acf?.bannerImage?.altText}
                  width={130}
                  height={130}
                  className="aspect-[16/11] h-auto  object-cover w-full  group-hover:scale-105 duration-300 "
                />
              </div>
              <p className="font-bold uppercase text-xl text-start w-full h-max mt-4">
                {item.title}
              </p>
              {/* <div className="text-sm line-clamp-3 text-start mt-1 leading-5">
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.acf.content,
                  }}></p>
              </div> */}
              {/* <NormalBtn href={`/treatments/${item.slug}`} className="mt-4">
                Read More
              </NormalBtn> */}

              <div className="p-3 bg-white duration-300 absolute top-0 right-0 sm:w-[30%] w-[130px] aspect-square h-auto rounded-[22px] flex items-center justify-center">
                <Image
                  src={item?.acf?.icon?.sourceUrl ?? dummiLogo}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
                />

                <Image
                  src={crPng}
                  alt=""
                  className={`absolute aspect-square object-contain left-[-16px] top-[12px] h-[18px] w-[18px] rotate-0 `}
                />
                <Image
                  src={crPng}
                  alt=""
                  className={`absolute aspect-square object-contain right-[12px] bottom-[-16px] h-[18px] w-[18px] rotate-0 `}
                />
              </div>
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
