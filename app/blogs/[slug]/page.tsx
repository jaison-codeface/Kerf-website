import { dummiSection } from "@/assets/images";
import SectionWrapper from "@/components/SectionWrapper";
import WordPressRichText from "@/components/WordPressRichText";
import NavigationBtns from "@/components/blogs/NavigationBtns";
import RecentBlogs from "@/components/blogs/RecentBlogs";

import Layout from "@/components/layout";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import main_padding from "@/styles/padding";
import { HeadTitle } from "@/ui/Typography";
import Image from "next/image";
import { WithContext, Blog } from "schema-dts";

const page = async ({ params }: any) => {
  const blogs: BlogsType = await getContentFromWordPress("blogs");
  const data = blogs.blogs.nodes.filter((item) => item.slug === params.slug)[0];

  const index = blogs.blogs.nodes.findIndex(
    (item) => item.slug === params.slug
  );

  const buttons = [
    {
      title: "Prev",
      link: index === 0 ? "" : `/blogs/${blogs.blogs.nodes[index - 1].slug}`,
    },
    {
      title: "Next",
      link:
        index === blogs.blogs.nodes.length - 1
          ? ""
          : `/blogs/${blogs.blogs.nodes[index + 1].slug}`,
    },
  ];

  const date = new Date(data.date);
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blogs",
    hasPart: blogs.blogs.nodes.map((item) => {
      return {
        "@type": "Blog",
        name: item.title,
        url: `https://www.kerfenthospital.com/blogs/${item.slug}`,
      };
    }),
  };

  return (
    <Layout jsonLd={jsonLd}>
      <Image
        src={data?.acf.featuredImage.sourceUrl ?? dummiSection}
        alt=""
        width={1440}
        height={900}
        className="object-cover sm:h-[90vh] w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh]"
      />

      <SectionWrapper
        classBottom={`${main_padding.y} md:gap-20 gap-10 max-md:flex-col`}>
        <div className=" flex flex-col  ">
          <HeadTitle>{data.title}</HeadTitle>
          {/* <p className="inline-flex">
            {formattedDate} - By&nbsp;
            <p className="capitalize">{data.author.node.name}</p>
          </p> */}
          <WordPressRichText htmlString={data?.acf.content} />
        </div>
        <RecentBlogs data={blogs} />
      </SectionWrapper>

      <NavigationBtns buttons={buttons} />
    </Layout>
  );
};

export default page;
