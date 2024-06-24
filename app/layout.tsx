import type { Metadata } from "next";
import "@/styles/globals.css";
import { googleSans } from "@/libs/font";
import UtilitiesProvider from "@/components/UtilitiesProvider";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

export const metadata: Metadata = {
  title: "",
  description: "",
  manifest: "favicon_io/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [treatments, departments, footer, header]: [
    TreatmentCategoriesType,
    DepartmentsTaxonomiesType,
    FooterType,
    HeaderType,
  ] = await Promise.all([
    getContentFromWordPress("treatments"),
    getContentFromWordPress("departments"),
    getContentFromWordPress("footer"),
    getContentFromWordPress("header"),
  ]);

  const utilitiesData: UtilitiesType = {
    treatments,
    departments,
    footer,
    header,
  };

  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning>
      <UtilitiesProvider data={utilitiesData}>
        <body className={`${googleSans.className} ${googleSans.variable}`}>
          {children}
        </body>
      </UtilitiesProvider>
    </html>
  );
}
