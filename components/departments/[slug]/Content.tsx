import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import Image from "next/image";
import { BookAppointmentBtn } from "@/ui/buttons";
import WordPressRichText from "@/components/WordPressRichText";
import { dummiSection } from "@/assets/images";

const Content = ({ data }: { data: DepartmentsType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <Image
        src={data?.acf.sectionImage.sourceUrl ?? dummiSection}
        alt={data?.acf.sectionImage.altText}
        data-aos="fade-up"
        width={1200}
        height={600}
        className="md:aspect-[16/7] aspect-video rounded-xl overflow-hidden object-cover md:w-10/12"
      />
      <div className=" flex flex-col md:w-[70%] mt-16">
        <WordPressRichText htmlString={data?.acf.content} />
        <BookAppointmentBtn />
      </div>
    </SectionWrapper>
  );
};

export default Content;
