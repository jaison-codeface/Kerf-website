import type { Metadata } from "next";
import "@/styles/globals.css";
import { googleSans } from "@/libs/font";


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
      suppressHydrationWarning>
      <body className={`${googleSans.className} ${googleSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
