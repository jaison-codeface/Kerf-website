import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import Layout from "@/components/layout";
import { blogData, teamData } from "@/libs/contents";
import main_padding from "@/styles/padding";
import { HeadSubtitle } from "@/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export  function generateStaticParams() {
  return teamData.map((team) => ({
    author_id: team.slug,
  }));
}

const page = ({ params }: any) => {
  const aboutAuthor = teamData.filter(
    (item) => item.slug === params.author_id
  )[0];

  const blogs = blogData.filter(
    (item) => item.author.slug === params.author_id
  );

  return (
    <Layout>
      <HeroSection
        heroSectionImage={aboutAuthor.image}
        author={""}
        title={aboutAuthor.title}
        imageContain={true}
      />
      <SectionWrapper
        classBottom={`${main_padding.b} grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6`}
      >
        {blogs.map((item, idx) => (
          <Link
            href={`/blog/${item.slug}`}
            key={idx}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={idx * 300}
            className="bg-off-white rounded-[10px] overflow-hidden"
          >
            <Image
              src={item.heroSectionImage}
              alt=""
              loading="lazy"
              className="w-full aspect-[16/12] h-auto object-cover rounded-b-[10px]"
            />
            <div className="px-6 py-8">
              <h2
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="text-lg font-semibold text-primary leading-[150%]"
              >
                {item.title}
              </h2>

              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="mt-2 text-sm leading-[150%] line-clamp-3"
              >
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </SectionWrapper>
    </Layout>
  );
};

export default page;
