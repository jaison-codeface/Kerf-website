import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { dummiSection } from "@/assets/images";

const OurCommitments = ({ data }: { data: HomePageType }) => {
  const isData = data.page?.acf.ourCommitments;
  return (
    <SectionWrapper
      classTop="md:mt-20"
      classBottom={`  flex-col items-center   w-full`}>
      <div
        className={`flex flex-col w-full  items-center relative z-0 ${main_padding.y}`}>
        <HeadSubtitle className="uppercase">{isData.subtitle}</HeadSubtitle>
        <HeadTitle className="mt-1 text-center"> {isData.title}</HeadTitle>
        <div className="grid  xl:grid-cols-3 md:grid-cols-2  w-full md:gap-10 gap-6 md:mt-16 mt-8">
          {isData.commitments.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              key={idx}
              className="grid gap-5 px-6 sm:py-4 py-6 bg-kerf-teal-light rounded-lg w-full">
              <div className="w-full  flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={item.image.sourceUrl}
                  alt=""
                  width={60}
                  height={60}
                  loading="lazy"
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl text-kerf-blue">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurCommitments;
