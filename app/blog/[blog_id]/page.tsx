import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import RecentBlogs from "@/components/blog/[blog_id]/RecentBlogs";
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
          data.date && (
            <>
              {data.date} - Blog - By&nbsp;
              <Link href={`/author/${data.author.slug}`} shallow>
                {data.author.title}
              </Link>
            </>
          )
        }
        title={data.title}
      />
      <SectionWrapper
        classBottom={`md:gap-20 gap-10 max-md:flex-col md:justify-between  ${main_padding.b}`}
        classTop="justify-start "
      >
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className=" text-lg leading-[190%] md:max-w-[70%]"
        >
          {data.description}
        </p>

        <RecentBlogs />
      </SectionWrapper>

      <NavigationBtns buttons={buttons} />
    </Layout>
  );
};

export default page;
