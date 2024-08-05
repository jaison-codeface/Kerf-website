import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import "@/styles/loading.css";

const loading = () => {
  return (
    <div className="w-screen h-svh bg-off-white flex items-center justify-center ">
      <div
        role="status"
        className="flex items-center justify-center  max-w-sm flex-col gap-4">
        <Image
          src={logo}
          alt=""
          placeholder="empty"
          priority
          className="w-full object-contain sm:h-20 h-[45px]"
        />
        <div className="loader"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
