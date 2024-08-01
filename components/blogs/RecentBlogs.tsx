import { dummiSection } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = ({ data }: { data: BlogsType }) => {
  return (
    <div className="flex flex-col md:max-w-[280px]">
      <h3 className="text-lg text-secondary font-semibold ">Recent Blogs</h3>
      <div className="flex flex-col gap-6 mt-4 ">
        {[...data.blogs.nodes].splice(0, 4).map((item, idx) => (
          <Link
            rel="noindex"
            key={idx}
            shallow
            aria-label="Visit our blog next"
            href={`/blogs/${item.slug}`}
            className=" gap-6 flex items-center">
            <Image
              src={item?.acf.featuredImage.sourceUrl ?? dummiSection}
              alt=""
              width={400}
              height={400}
              className="object-cover w-[75px] h-auto rounded-md aspect-square"
            />

            <div className="flex flex-col ">
              <span className="text-[12px]">
                {new Date(item.date).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                - By {item.author.node.name}
              </span>
              <h5 className="text-secondary font-bold line-clamp-1">
                {item.title}
              </h5>
              <p className="line-clamp-2 !text-xs mt-1 font-semibold leading-[120%]">
                {item?.acf.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
