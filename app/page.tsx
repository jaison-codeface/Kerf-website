import Layout from "@/components/layout";
import Loading from "./loading";

import HeroSection from "@/components/Home/HeroSection";
import TreatmentsAndServices from "@/components/Home/TreatmentsAndServices";
import OurPhilosophy from "@/components/Home/OurPhilosophy";
import OurSpecialties from "@/components/Home/OurSpecialties";
import ContactUs from "@/components/Home/ContactUs";
import Blogs from "@/components/Home/Blogs";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";
import Testimonials from "@/components/about_us/Testimonials";
import OurCommitments from "@/components/Home/OurCommitments";

export default async function Home() {
  const [data, blogs, about, treatments]: [
    HomePageType,
    BlogsType,
    AboutUsPageType,
    TreatmentCategoriesType,
  ] = await Promise.all([
    getContentFromWordPress("home"),
    getContentFromWordPress("blogs"),
    getContentFromWordPress("about"),
    getContentFromWordPress("treatments"),
  ]);

  const d = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const s = await d(3000);

  const jsonLds = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.kerfenthospital.com",
      logo: "https://www.kerfenthospital.com/_next/static/media/logo.4b84ce0f.webp",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kerfenthospital.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://www.kerfenthospital.com/about_us",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact Us",
          item: "https://www.kerfenthospital.com/contact_us",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Treatments",
          item: "https://www.kerfenthospital.com/treatments",
        },

        {
          "@type": "ListItem",
          position: 4,
          name: "Our Doctors",
          item: "https://www.kerfenthospital.com/doctors",
        },
      ],
    },
  ];

  return (
    <Layout jsonLds={jsonLds}>
      <HeroSection data={data} />
      <TreatmentsAndServices data={data} />
      <OurPhilosophy data={data} />
      <OurSpecialties data={data} treatments={treatments} />
      <OurCommitments data={data} />
      <ContactUs data={data} />
      <Blogs data={data} blogs={blogs} />
      <Testimonials data={about} />
    </Layout>
  );
}
