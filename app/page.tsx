import HeroSection from "@/components/Home/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/layout";
import main_padding from "@/styles/padding";
import LeftContentRightImg from "@/ui/LeftContentRightImg";
import our_churchImg from "@/assets/images/Home/Our church.webp";
import OurPrograms from "@/components/Home/OurPrograms";
import WomenOfDestinyBreakfast from "@/components/Home/WomenOfDestinyBreakfast";
import Journey from "@/components/Home/Journey";
import VisionAndMission from "@/components/Home/VisionAndMission";
import JoinUs from "@/components/Home/JoinUs";
import Ministering from "@/components/Home/Ministering";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SectionWrapper classBottom={main_padding.y}>
        <LeftContentRightImg
          title="Our church"
          subtitle="Loving Grace Assembly was founded by a group of friends who joined together for a 21-day fast to develop a closer relationship with God and guidance in their lives. Our mission is to provide the greater expat community a space to connect and learn the word of the living God, equipping them to live out  purpose."
          btn1={{
            title: "watch us live",
          }}
          btn2={{
            title: "who we are",
          }}
          image={our_churchImg}
        />
      </SectionWrapper>
      <SectionWrapper classBottom={main_padding.y}>
        <LeftContentRightImg
          title="who we are"
          subtitle={
            <>
              In January 2017, Loretta Sanders, educator and school
              administrator, reached out to 20 friends and asked them to join
              her in a 21-day fast. She formed a WhatsApp group that was used to
              share resources and support each other through encouragement and
              prayer focus for 21 days.
              <br />
              <br />
              After the fast was over, the group supported and covered one
              another in prayer.
              <br />
              <br /> Being led by the Spirit of the Living God, and with much
              prayer, on January 29, 2017, Loretta changed the group’s name from
              21- Day Fasting & Praying to Loving Grace Assembly.
              <br />
              <br /> With the group in agreeance Elder, Dr. Loretta sought a
              location for their first service on Easter Sunday, April 16, 2017.
            </>
          }
          direction="opposite"
          btn1={{
            title: "Ministries",
          }}
          image={our_churchImg}
        />
      </SectionWrapper>
      <OurPrograms />
      <WomenOfDestinyBreakfast />
      <Journey />
      <VisionAndMission />
      <JoinUs />
      <Ministering />
    </Layout>
  );
}
