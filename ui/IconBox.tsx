"use client";
import Image from "next/image";
import crRadios from "@/assets/images/corner radius.png";
import { dummiLogo } from "@/assets/images";

const IconBox = ({
  image,
  direction = "bottom left",
  sizes,
}: {
  image: string;
  sizes: { main: string };
  direction?: "bottom left" | "top right";
}) => {
  const classNames = () => {
    let d = {
      main: "",
      arrow: {
        top: "",
        bottom: "",
      },
      padding: "",
      border: "",
    };
    switch (direction) {
      case "bottom left":
        d.main = `left-0 bottom-0 pt-4 pr-4 rounded-tr-[20px]`;
        d.arrow.top = `left-0 top-[-24px] h-[24px] w-[24px] rotate-180`;
        d.arrow.bottom = `bottom-0 right-[-24px] h-[24px] w-[24px] rotate-180`;
        d.padding = "p-3";
        d.border = "border-2 border-white";

        return { ...d };
      case "top right":
        d.main = "top-0 right-0 pb-2 pl-2 rounded-bl-[18px]";
        d.arrow.top = `left-[-18px] top-0 h-[18px] w-[18px] rotate-0`;
        d.arrow.bottom = `bottom-[-18px] right-0 h-[18px] w-[18px] rotate-0`;
        d.padding = "p-1.5  bg-kerf-teal-light";
        d.border = "border-1 border-white";

        return { ...d };

      default:
        break;
    }
    return d;
  };

  console.log(classNames().main);
  return (
    <div className={`absolute  bg-white ${sizes.main} ${classNames().main}`}>
      <div
        className={`bg-[#d7ece3] rounded-[20px] ${classNames().padding}   aspect-square`}>
        <div
          className={`${classNames().border} rounded-[16px] ovh h-full w-full justify-center flex flex-col items-center text-center text-[#415061] ${classNames().padding}`}>
          <Image src={image ?? dummiLogo} alt="" width={200} height={200} />
        </div>
      </div>
      <Image
        src={crRadios}
        alt=""
        className={`absolute aspect-square object-contain ${classNames().arrow.top}`}
      />
      <Image
        src={crRadios}
        alt=""
        className={`absolute aspect-square object-contain ${classNames().arrow.bottom}`}
      />
    </div>
  );
};

export default IconBox;
