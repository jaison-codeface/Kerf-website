import { blogData } from "@/libs/contents";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg text-secondary font-semibold ">Recent Blogs</h3>
      <div className="flex flex-col gap-6 mt-4">
        {[...blogData].splice(0, 4).map((item, idx) => (
          <Link
            key={idx}
            href={`/blog/${item.slug}`}
            shallow
            className=" gap-6 grid grid-flow-col items-center"
          >
            <Image
              src={item.heroSectionImage}
              alt=""
              placeholder="blur"
              className="object-cover h-full w-auto rounded-sm aspect-square"
            />

            <div className="flex flex-col ">
              <span className="text-[8px]">
                {item.date} - Blog - By {item.author.title}
              </span>
              <h5 className="text-secondary font-medium line-clamp-1">{item.title}</h5>
              <p className="line-clamp-2 text-xs mt-1">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
