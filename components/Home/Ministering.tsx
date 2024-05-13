import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import { teamData } from "@/libs/contents";
import Image from "next/image";
import { NormalBtn } from "@/ui/buttons";
import { useRouter } from "next/navigation";

const Ministering = () => {
  const router = useRouter();
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[900px]">Ministering</HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        Meet the faithful shepherds who, through divine wisdom and unwavering
        devotion, minister to our congregation - guiding souls, nurturing
        spiritual growth, and embodying Christ&apos;s loving embrace.
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6  lg:gap-16 md:gap-14 gap-6 grid md:grid-cols-2 max-w-[1440px] ">
        {teamData.map((item, idx) => (
          <div
            key={idx}
            className="border border-black flex flex-col rounded-[10px] overflow-hidden"
          >
            <Image
              src={item.image}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              loading="lazy"
              placeholder="blur"
              className="aspect-square object-top object-cover"
            />
            <div className="flex flex-col px-6 py-6">
              <h3
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="font-bold lg:text-3xl md:text-2xl text-xl"
              >
                {item.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="md:mt-2 mt-1 text-base leading-[150%]"
              >
                {item.position}
              </p>

              <NormalBtn
                onClick={() => router.push(`/blog/${item.slug}`)}
                className="mt-4 sm:w-max max-w-full"
              >
                Read More
              </NormalBtn>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Ministering;
