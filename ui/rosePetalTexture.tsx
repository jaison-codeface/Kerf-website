import roseTexture from "@/assets/images/rose petals.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
const RosePetalTexture = ({ className }: { className?: string }) => {
  return (
    <Image
      src={roseTexture}
      alt=""
      className={twMerge(
        `absolute object-contain w-[25vw]  -z-10 pointer-events-none`,
        className
      )}
    />
  );
};

export default RosePetalTexture;
