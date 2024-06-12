"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..

const Layout = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        once: true,
        disable: true,
        duration: 500,
      });
    }
  }, []);
  return (
    <>
      <main className="flex flex-col w-full flex-1 items-center justify-center text-black  relative z-10">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
