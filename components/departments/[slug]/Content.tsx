import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Image from "next/image";
import { BookAppointmentBtn } from "@/ui/buttons";
import WordPressRichText from "@/components/WordPressRichText";
import { dummiSection } from "@/assets/images";

const Content = ({ data }: { data: string }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.b} flex-col items-center`}>
      <div className=" flex flex-col md:w-[70%] ">
        <WordPressRichText htmlString={data} />
        <BookAppointmentBtn />
      </div>
    </SectionWrapper>
  );
};

export default Content;
