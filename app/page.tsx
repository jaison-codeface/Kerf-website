"use client";
import Layout from "@/components/layout";

import { useEffect, useState } from "react";
import Loading from "./loading";
import HeroSection from "@/components/Home/HeroSection";
import TreatmentsAndServices from "@/components/Home/TreatmentsAndServices";
import OurPhilosophy from "@/components/Home/OurPhilosophy";
import OurSpecialties from "@/components/Home/OurSpecialties";
import ContactUs from "@/components/Home/ContactUs";
import Blogs from "@/components/Home/Blogs";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 800);
  // }, []);

  // if (!isLoading) return <Loading />;

  

  return (
    <Layout>
      <HeroSection />
      <TreatmentsAndServices />
      <OurPhilosophy />
      <OurSpecialties />
      <ContactUs />
      <Blogs />
    </Layout>
  );
}
