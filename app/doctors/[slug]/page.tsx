import Layout from "@/components/layout";
import React from "react";
import dummi from "@/assets/images/home/hero session e.png";
import HeroSection from "@/components/sections/HeroSection";
import RosePetalTexture from "@/ui/rosePetalTexture";
import main_padding from "@/styles/padding";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import Link from "next/link";

const doctors = [
  {
    title: "Dr.Treat you well",
    designation: "Find & Download Free Graphic Resources",
    image: dummi,
    buttons: [
      {
        title: "view profile",
        link: "",
      },
      {
        title: "book an appointment",
        link: "",
      },
    ],
  },
  {
    title: "Dr.Treat you well",
    designation: "Find & Download Free Graphic Resources",
    image: dummi,
    buttons: [
      {
        title: "view profile",
        link: "doctors/gdggdgg",
      },
      {
        title: "book an appointment",
        link: "",
      },
    ],
  },
  {
    title: "Dr.Treat you well",
    designation: "Find & Download Free Graphic Resources",
    image: dummi,
    buttons: [
      {
        title: "view profile",
        link: "doctors/iufcvt",
      },
      {
        title: "book an appointment",
        link: "",
      },
    ],
  },
  {
    title: "Dr.Treat you well",
    designation: "Find & Download Free Graphic Resources",
    image: dummi,
    buttons: [
      {
        title: "view profile",
        link: "doctors/wwdfcgg",
      },
      {
        title: "book an appointment",
        link: "",
      },
    ],
  },
];

const page = ({ params }: { params: any }) => {
  const doctorDetail = doctors.find((item) =>
    item.buttons.some((i) => i.link.includes(params.slug) && item)
  );
  const breadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Doctors",
      link: "/doctors",
    },
    {
      title: doctorDetail?.title!,
      link: "javascript:void(0)",
    },
  ];

  return (
    <Layout>
      <HeroSection
        breadcrumbs={breadcrumbs}
        bgImage={dummi}
        title="Doctors Details View"
      />
      <SectionWrapper
        classTop="relative z-0"
        classBottom={`${main_padding.y} grid md:grid-cols-[1fr_1.4fr] grid-cols-1 lg:gap-20 gap-10 items-center`}
      >
        <Image
          src={doctorDetail?.image!}
          alt=""
          className="-z-10 object-contain  object-bottom h-full w-full  rounded-xl overflow-hidden pt-10"
        />
        <div className="w-full flex flex-col ">
          <h2 className="text-2xl font-medium">{doctorDetail?.title!}</h2>
          <p className="mt-2 text-sm text-gray-800">
            To get the object from the doctors array that includes the string
            dggdgg in one of its nested objects, you can use the find() method
            in combination with the some() method. Heres how you can do it:
            javascriptCopy codeconst doctorWithGdggdgg =
            <br /> <br />
            d;console.log(doctorWithGdggdgg);This code will output the object
            from the doctors array that has a button with a link containing the
            string gdggdggarray that satisfies the provided condition. The
            condition is defined by the arrow function passed as an argument to
            find(). In this c
          </p>
          <h3 className="mt-4 font-medium text-xl">
            Enhasning the family and experinece
          </h3>
          <p className="mt-2 text-sm text-gray-800">
            This warning message is displayed in React when you try to use a
            javascript: URL in an HTML element. This is considered a potential
            security risk because it allows arbitrary JavaScript code to be
            executed when the link is clicked.
          </p>
          <ul className="flex flex-col gap-1 mt-2">
            <li className="inline-flex text-[15px] gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#21d34b"
                fill="none"
              >
                <path
                  d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 13.8333L11 17.5L21.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              avascript: URL in an HTML element. This is considered a potential
              security risk because
            </li>
          </ul>
          <Link
            href={""}
            className="px-10 py-4 rounded-lg bg-[#3398cc] sm:max-w-max text-center mt-6 font-bold text-white uppercase hover:opacity-90 duration-500"
          >
            book appointment
          </Link>
        </div>
        {/* textures */}
        <RosePetalTexture className="rotate-180 bottom-0 right-0" />
      </SectionWrapper>
    </Layout>
  );
};

export default page;
