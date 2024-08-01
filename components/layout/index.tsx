"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <Link rel="noindex" > for styles
import Head from "next/head";
import useStore from "@/libs/store";

// ..

const Layout = ({
  children,
  pageTitle,
  jsonLd,
  jsonLds,
}: {
  children: ReactNode;
  pageTitle?: string;
  jsonLd?: any;
  jsonLds?: any[];
}) => {
  const { utilities } = useStore();
  useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        once: true,
        // disable: true,
        duration: 500,
      });
    }
  }, []);
  return (
    <>
      <title>{`${pageTitle ? pageTitle + " | " : ""} ${utilities?.seo?.utility?.acf?.title}`}</title>

      <main className="flex flex-col w-full flex-1 items-center justify-center text-black  relative z-10">
        <Header />
        {children}
        <Footer />
      </main>

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {jsonLds &&
        jsonLds.map((jsonLd, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
    </>
  );
};

export default Layout;
