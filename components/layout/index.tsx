"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col w-full flex-1 items-center justify-center text-tertiary relative z-0 bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
