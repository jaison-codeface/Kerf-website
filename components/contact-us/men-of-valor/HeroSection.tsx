import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import Image from "next/image";
import React from "react";
import bg from "@/assets/images/our programmes/Man of Valour bg.webp";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={bg}
        alt=""
        className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh] object-top "
      />

      <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
        <HeadTitle className="text-center max-w-[800px]">
          Man of Valour
        </HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
          Our Men of Excellence inspires faith, integrity, and purpose,
          anchoring values that uplift and empower individuals to excel with
          honor and compassion.
        </HeadSubtitle>
        <p data-aos="fade-up"
                data-aos-duration="700"
                 className="grid lg:mt-16 md:mt-14 mt-6 w-full sm:bg-off-white sm:px-8   sm:py-10 rounded-[10px] sm:text-lg text-sm">
          Welcome to our Christian community, where we strive to honor and
          celebrate the remarkable men of excellence who embody the teachings
          and values of our Lord and Savior, Jesus Christ. Faithful Servants:
          Our Men of Excellence are dedicated to their faith in Christ. They
          exhibit unwavering trust and reliance on God in all aspects of their
          lives, setting a spiritual example for others to follow. We believe
          that men are called to be leaders in their homes, communities, and
          workplaces. We also believe that men are called to be examples of
          Christ-like love, compassion, and integrity. <br /> <br />
          Our “Men of Excellence” ministry is designed to help men grow in their
          faith and become the best men they can be. We offer a variety of
          programs and resources to help men develop their leadership skills,
          spiritual lives, and relationships.
          <br /> <br />
          The LGA Men of Valor encourages fellowship and brotherhood between
          men. Led and directed by the Word of God, the Men of Valor focuses on
          the embodiment of the scripture, “That the man of God may be
          competent, equipped for every good work.” (2 Timothy 3:17)
        </p>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
