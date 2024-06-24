import main_padding from "@/styles/padding";
import SectionWrapper from "@/components/SectionWrapper";
import Bottom from "./Bottom";
import Top from "./Top";
import useStore from "@/libs/store";

const Footer = () => {
  const { utilities } = useStore();
  return (
    <SectionWrapper classBottom={`${main_padding.t} flex-col items-center `}>
      <Top data={utilities.footer} />
      <Bottom data={utilities.footer}/>
    </SectionWrapper>
  );
};

export default Footer;
