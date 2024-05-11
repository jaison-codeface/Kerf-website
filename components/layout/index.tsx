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
      });
    }
  }, []);
  return (
    <main className="flex flex-col w-full flex-1 items-center justify-center text-tertiary relative z-0 bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
