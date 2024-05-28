import main_padding from "@/styles/padding";
import SectionWrapper from "../SectionWrapper";
import mainImage from "@/assets/images/home/contact us.webp";
import Image from "next/image";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import hospitalIcon from "@/assets/icons/hospital.svg";
import homeWorkIcon from "@/assets/icons/home work.svg";
import { NormalBtn } from "@/ui/buttons";
import arrow from '@/assets/icons/arrow.svg'

const buttons = [
  {
    title: "HOSPITAL",
    subtitle: "Book an Appointment",
    link: "",
    icon: hospitalIcon,
  },
  {
    title: "INTERNATIONAL PATIENT CARE",
    subtitle: "Visit Now",
    link: "",
    icon: homeWorkIcon,
  },
];

const ContactUs = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col`}>
      <HeadSubtitle>OUR PHILOSOPHY</HeadSubtitle>
      <HeadTitle className="mt-1">Explore our world</HeadTitle>
      <div className="grid md:grid-cols-[2fr_1fr] md:mt-16 mt-8 md:gap-20 gap-10">
        <Image
          src={mainImage}
          alt=""
          data-aos="fade-up"
          width={800}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl overflow-hidden max-md:aspect-square"
        />

        <div className="flex flex-col">
          <h3  data-aos="fade-up" className="text-3xl font-bold">
            Expert Doctors. <br />
            Professional Care.
          </h3>
          <p  data-aos="fade-up" className="mt-2 text-base leading-[160%]">
            At Ascent, we continually enhance the comfort of our patient
            journeys. Our mission is to provide high-quality, cost-
          </p>

          <div className="grid grid-rows-2 w-full gap-5 mt-6">
            {buttons.map((item, idx) => (
              <NormalBtn key={idx} className={`flex items-center justify-between gap-6  ${idx % 2 === 0 ? "bg-gradient-to-r from-[#36d7c6] to-[#2ebbaf]" : "bg-gradient-to-r from-[#539fbd] to-[#3682a0]"}`}>
                <div className="flex items-center justify-start gap-6">

                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  loading="lazy"
                  className="object-contain h-6"
                  />
                <div className="flex flex-col gap-1">
                  <h1 className="font-normal text-lg uppercase leading-[130%]">{item.title}</h1>
                  <p className="text-xs">{item.subtitle}</p>
                </div>
                </div>
                <Image src={arrow} alt="" width={20 } height={10} className="object-contain h-4
                "  />
              </NormalBtn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactUs;
