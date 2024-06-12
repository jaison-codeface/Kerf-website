import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Image from "next/image";
import second from "@/assets/images/home/our philosophy.webp";
import Link from "next/link";
import { BookAppointmentBtn } from "@/ui/buttons";

const Content = () => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <Image
        src={second}
        alt=""
        data-aos="fade-up"
        width={1200}
        height={600}
        className="md:aspect-[16/7] aspect-video rounded-xl overflow-hidden object-cover md:w-10/12"
      />
      <div className=" flex flex-col md:w-9/12 mt-16">
        <h2 data-aos="fade-up" className="text-2xl font-medium">
          Orthopedic
        </h2>
        <p ata-aos="fade-up" className="mt-2 text-sm text-gray-800">
          To get the object from the doctors array that includes the string
          dggdgg in one of its nested objects, you can use the find() method in
          combination with the some() method. Heres how you can do it:
          javascriptCopy codeconst doctorWithGdggdgg =
          <br /> <br />
          d;console.log(doctorWithGdggdgg);This code will output the object from
          the doctors array that has a button with a link containing the string
          gdggdggarray that satisfies the provided condition. The condition is
          defined by the arrow function passed as an argument to find(). In this
          c
        </p>
        <h3 data-aos="fade-up" className="mt-4 font-medium text-xl">
          Enhasning the family and experinece
        </h3>
        <p data-aos="fade-up" className="mt-2 text-sm text-gray-800">
          This warning message is displayed in React when you try to use a
          javascript: URL in an HTML element. This is considered a potential
          security risk because it allows arbitrary JavaScript code to be
          executed when the link is clicked.
        </p>
        <ul data-aos="fade-up" className="flex flex-col gap-1 mt-2">
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
        <h3 data-aos="fade-up" className="mt-6 font-medium text-xl">
          Information for new patient
        </h3>
        <p data-aos="fade-up" className="mt-2 text-sm text-gray-800">
          This warning message is displayed in React when you try to use a
          javascript: URL in an HTML element. This is considered a potential
          security risk because it allows arbitrary JavaScript code to be
          executed when the link is clicked. This warning message is displayed
          in React when you try to use a javascript: URL in an HTML element.
          This is considered a potential security risk because it allows
          arbitrary JavaScript code to be executed when the link is clicked.{" "}
          <br /> <br />
          This warning message is displayed in React when you try to use a
          javascript: URL in an HTML element. This is considered a potential
          security risk because it allows arbitrary JavaScript code to be
          executed when the link is clicked.
        </p>
        <BookAppointmentBtn />
      </div>
    </SectionWrapper>
  );
};

export default Content;
