import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/men-of-valor/HeroSection";
import Layout from "@/components/layout";
import React from "react";
import logo from "@/assets/icons/our programs/Men of Valor.webp";
import Features from "@/components/contact-us/men-of-valor/Features";

const page = () => {
  return (
    <Layout>
      <HeroSection />
      <About
        description={
          <>
            We believe that men are called to be godly leaders in their homes.
            We offer a variety of resources to help men be better husbands and
            fathers. We also offer programs to help men develop their leadership
            skills in the workplace and community. <br />
            We believe that men are called to be examples of Christ-like love,
            compassion, and integrity. We offer a variety of programs to help
            men grow in their spiritual lives and become more like Christ. We
            also offer programs to help men develop their character and
            integrity.
            <br /><br />
            If you are a man who is looking to grow in your faith and become the
            best man you can be, we encourage you to join our "Men of
            Excellence" ministry. We would love to help you on your journey. We
            want to shed light on the remarkable qualities and contributions of
            our Men of Excellence.
          </>
        }
        logo={logo}
      />
      <Features />
    </Layout>
  );
};

export default page;
