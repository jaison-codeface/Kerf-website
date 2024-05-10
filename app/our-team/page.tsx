import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/layout";
import { teamData } from "@/libs/contents";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import { NormalBtn } from "@/ui/buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Layout>
      <SectionWrapper
        classBottom={`${main_padding.y} flex-col items-center mt-40`}
      >
        <HeadTitle className="text-center max-w-[600px]">Our Team</HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[600px] text-secondary">
          Beacons of faith embodying divine purpose - meet our devoted
          ministers, leaders, and support staff.
        </HeadSubtitle>
        <section className="grid md:grid-cols-2 lg:gap-20 gap-10 lg:mt-16 md:mt-14 mt-6">
          {teamData.map((item, idx) => (
            <div key={idx} className="w-full flex flex-col ">
              <Image
                src={item.image}
                alt=""
                loading="lazy"
                placeholder="blur"
                className=" rounded-[10px] overflow-hidden  aspect-[16/17] max-h-[900px] object-cover object-top"
              />
              <p className="md:mt-6 mt-3 font-semibold text-secondary text-sm">
                {item.position}
              </p>
              <h2 className="mt-1 lg:text-3xl text-2xl font-bold text-primary">
                {item.title}
              </h2>
              <HeadSubtitle className="mt-2 ">{item.description}</HeadSubtitle>
              {item.RequestToSpeak && (
                <div className="flex flex-col w-full mt-6">
                  <h3 className="md:text-2xl text-xl ">{item.RequestToSpeak.title}</h3>
                  <div className="mt-2 flex items-center justify-start gap-4">
                    {item.RequestToSpeak.btns.map((btn, btnIdx) => (
                      <NormalBtn key={btnIdx} href={btn.link} mode={btn.mode}>
                        {btn.title}
                      </NormalBtn>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-6 flex items-center justify-between gap-10">
                <div className="flex items-center gap-4">
                  {item.socialMedia.map((socialMedia, socialMediaIdx) => (
                    <Link
                      key={socialMediaIdx}
                      href={socialMedia.link}
                      shallow
                      target="_blank"
                      className="w-8 h-8 flex items-center justify-center border border-tertiary rounded-md"
                    >
                      <Image
                        src={socialMedia.icon}
                        alt=""
                        loading="lazy"
                        className="h-[14px] w-auto object-contain"
                      />
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/${item.slug}`}
                  shallow
                  className="text-base underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </section>
      </SectionWrapper>
    </Layout>
  );
};

export default page;
