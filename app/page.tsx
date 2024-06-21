import Layout from "@/components/layout";

import HeroSection from "@/components/Home/HeroSection";
import TreatmentsAndServices from "@/components/Home/TreatmentsAndServices";
import OurPhilosophy from "@/components/Home/OurPhilosophy";
import OurSpecialties from "@/components/Home/OurSpecialties";
import ContactUs from "@/components/Home/ContactUs";
import Blogs from "@/components/Home/Blogs";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

export default async function Home() {
  const [data, blogs]: [HomePageType, BlogsType] = await Promise.all([
    getContentFromWordPress("home"),
    getContentFromWordPress("blogs"),
  ]);

  return (
    <Layout>
      <HeroSection data={data} />
      <TreatmentsAndServices data={data} />
      <OurPhilosophy data={data} />
      <OurSpecialties data={data} />
      <ContactUs data={data} />
      <Blogs data={data} blogs={blogs} />
    </Layout>
  );
}
