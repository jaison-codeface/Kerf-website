import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({ weight: ["500", "700",'400'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
  manifest: "favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
