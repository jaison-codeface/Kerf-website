import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import Layout from "@/components/layout";
import { blogData } from "@/libs/contents";
import main_padding from "@/styles/padding";
import Link from "next/link";

const page = ({ params }: any) => {
  const data = blogData.filter((item) => item.slug === params.blog_id)[0];

  const index = blogData.findIndex((item) => item.slug === params.blog_id);

  console.log(index);

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
        author={`${data.date} - Blog - By ${data.author}`}
        subtitle={data.subtitle}
        title={data.title}
      />
      <SectionWrapper
        classBottom={` text-lg leading-[150%] md:max-w-[70%] ml-0 `}
        classTop="justify-start"
      >
        {data.description}
      </SectionWrapper>

      <SectionWrapper
        classBottom={` ${main_padding.y} flex w-full justify-between gap-6 items-center`}
      >
        {buttons.map((item, idx) => (
          <div key={idx}>
            {item.link && (
              <Link href={item.link} shallow className="font-semibold text-primary text-lg">
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
