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
  direction?: "bottom left";
}) => {
  const classNames = () => {
    let d = {
      main: "",
      arrow: {
        top: "",
        bottom: "",
      },
    };
    switch (direction) {
      case "bottom left":
        d.main = "left-0 bottom-0 pt-4 pr-4 rounded-tr-[20px]";
        d.arrow.top = `left-0 top-[-24px] h-[24px] w-[24px] rotate-180`;
        d.arrow.bottom = `bottom-0 right-[-24px] h-[24px] w-[24px] rotate-180`;

        return { ...d };

      default:
        break;
    }
    return d;
  };

  console.log(classNames().main);
  return (
    <div className={`absolute  bg-white ${sizes.main} ${classNames().main}`}>
      <div className="bg-[#d7ece3] rounded-[20px] p-3   aspect-square">
        <div className="border-2 border-white rounded-[16px] ovh h-full w-full justify-center flex flex-col items-center text-center text-[#415061] p-3">
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
