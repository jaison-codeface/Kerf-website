"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Head from "next/head";
import useStore from "@/libs/store";

// ..

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle?: string;
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
    </>
  );
};

export default Layout;
