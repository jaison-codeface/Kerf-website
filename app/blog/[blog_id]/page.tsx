import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import Layout from "@/components/layout";
import { blogData } from "@/libs/contents";
import main_padding from "@/styles/padding";
import Link from "next/link";

const page = ({ params }: any) => {
  const data = blogData.filter((item) => item.slug === params.blog_id)[0];

  const index = blogData.findIndex((item) => item.slug === params.blog_id);

  const buttons = [
    {
      title: "Prev",
      link: index === 0 ? "" : `/blog/${blogData[index - 1].slug}`,
    },
    {
      title: "Next",
      link:
        index === blogData.length - 1
          ? ""
          : `/blog/${blogData[index + 1].slug}`,
    },
  ];

  return (
    <Layout>
      <HeroSection
        heroSectionImage={data.heroSectionImage}
        author={
          <>
            {data.date} - Blog - By&nbsp;
            <Link href={`/author/${data.author.slug}`} shallow>
              {data.author.title}
            </Link>
          </>
        }
        subtitle={data.subtitle}
        title={data.title}
        imageContain={data.imageContain}
      />
      <SectionWrapper classBottom={``} classTop="justify-start">
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className=" text-lg leading-[150%] md:max-w-[70%] ml-0 "
        >
          {data.description}
        </p>
      </SectionWrapper>

      <SectionWrapper
        classBottom={` ${main_padding.y} flex w-full justify-between gap-6 items-center`}
      >
        {buttons.map((item, idx) => (
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={idx * 300}
            key={idx}
          >
            {item.link && (
              <Link
                href={item.link}
                shallow
                className="font-semibold text-primary text-lg"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </SectionWrapper>
    </Layout>
  );
};

export default page;
