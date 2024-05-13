import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import fromHumbleBeginningsImage from "@/assets/images/Home/From Humble Beginnings .webp";
import milestonesAndAffiliationsImage from "@/assets/images/Home/Milestones and Affiliations.webp";
import Image from "next/image";

const data = [
  {
    title: "Milestones and Affiliations: Loving Grace Assembly's Journey",
    description:
      "Nine months later, after receiving incorporation documentation from the state of North Carolina, Elder Dr. Loretta was consecrated as the official Pastor of Loving Grace Assembly in January 2018. In 2019, Loving Grace Assembly became a member of Kingdom Fellowship of Churches International, Headquartered in Charlotte, NC, under the leadership of Bishop James H. Logan.",
    image: milestonesAndAffiliationsImage,
  },
  {
    title: "From Humble Beginnings to a Thriving, Inclusive Ministry",
    description:
      "Under the leadership of God, Loving Grace Assembly has grown from a prayer group to two fully operational churches with over 100 members from many different nationalities. As the congregation grew, so did the ministries and active groups of the church. We edified the body and created evangelical opportunities such as the annual “Recharge” Revival, Women’s Tea, and Summer Kick-off, to name a few. Also, we support the community by partnering with local groups to contribute to the ‘Ramadan Fill a Fridge,’ ‘Sock It to Cancer,’ and ‘Box Appeal’ initiatives.",
    image: fromHumbleBeginningsImage,
  },
];

const Journey = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[900px]">
        Leving Grace Assembly&apos;s Journey
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        Walking the path illuminated by faith, our ministry has grown from
        humble beginnings into a beacon of spiritual nourishment, embracing
        diversity and reaching countless lives through transformative teachings,
        compassionate outreach, and an unwavering dedication to living out
        God&apos;s purpose.
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6 flex flex-col w-full justify-center items-center sm:gap-24 gap-16">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`md:max-w-[70%]  ${
              idx % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            <Image
              src={item.image}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              loading="lazy"
              placeholder="blur"
              className="w-full object-cover rounded-[10px] overflow-hidden"
            />
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-2xl leading-[190%] font-bold mt-6 text-secondary"
            >
              {item.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-base leading-[150%]"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Journey;
