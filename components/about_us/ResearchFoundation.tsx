"use client";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import RosePetalTexture from "@/ui/rosePetalTexture";
import { HeadTitle, SectionDescription } from "@/ui/Typography";
import CountUp from "react-countup";
import crRadios from '@/assets/images/corner radius.png'
import Image from "next/image";

const ResearchFoundation = ({ data }: { data: AboutUsPageType }) => {
  const isData = data.page?.acf.sectionAboutKerf;
  return (
    <div className="w-full relative z-0">
      <SectionWrapper
        classTop={`${main_padding.y}`}
        classBottom={` bg-[#dffeff] rounded-3xl md:py-20 py-12 md:px-14 px-8 flex-col gap-8 relative z-auto`}>
        <HeadTitle className="md:w-3/4 md:text-[2.7rem] md:leading-[3.5rem] font-bold">
          {isData.title}
        </HeadTitle>
        <SectionDescription className="[column-count:2] [column-gap:20px] [column-width:250px] z-20">
          {isData.content}
        </SectionDescription>

        <div className="bg-white pl-4 pb-4 absolute z-20 right-0 top-0 max-md:hidden rounded-bl-[20px]">
          <div className="bg-[#d7ece3] rounded-[20px] p-4 aspect-square w-max">
            <div className="border-2 border-white rounded-[16px] h-full w-full justify-center flex flex-col items-center text-center text-[#415061] p-4">
              <h2 className="font-black text-2xl ">
                {" "}
                <CountUp
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                  end={data.page?.acf.exploreOurWorld.boxContentText1}
                />
                +
              </h2>
              <p className="text-xl leading-[130%] font-light uppercase">
                {data.page?.acf.exploreOurWorld.boxContentText2}
              </p>
            </div>
          </div>
          <Image src={crRadios} alt="" className="absolute left-[-36px] top-0 h-[36px] w-[36px] aspect-square object-contain" />
          <Image src={crRadios} alt="" className="absolute bottom-[-36px] right-0 h-[36px] w-[36px] aspect-square object-contain" />
        
        </div>
        {/* textures */}
      </SectionWrapper>
      <RosePetalTexture className=" -top-20 left-0 -z-10 opacity-60" />
    </div>
  );
};

export default ResearchFoundation;
