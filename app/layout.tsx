import type { Metadata, ResolvingMetadata } from "next";
import "@/styles/globals.css";
import { googleSans , italic} from "@/libs/font";
import UtilitiesProvider from "@/components/UtilitiesProvider";
import { getContentFromWordPress } from "@/libs/contents/wordpress/data";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const seo: SeoType = await getContentFromWordPress("seo");
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: seo.utility.acf.title,
    description: seo.utility.acf.description,
    keywords: seo.utility.acf.keyWords,
    openGraph: {
      type: "website",
      url: "",
      title: seo.utility.acf.title,
      description: seo.utility.acf.description,
      siteName: "KERF",
      images: [seo.utility.acf.favIcon.sourceUrl, ...previousImages],
    },
    icons: {
      icon: seo.utility.acf.favIcon.sourceUrl,
      other: [
        {
          rel: "preconnect",
          url: "https://cfuat.in",
        },
        {
          rel: "dns-prefetch",
          url: "https://cfuat.in",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [treatments, departments, footer, header, seo]: [
    TreatmentCategoriesType,
    DepartmentsTaxonomiesType,
    FooterType,
    HeaderType,
    SeoType,
  ] = await Promise.all([
    getContentFromWordPress("treatments"),
    getContentFromWordPress("departments"),
    getContentFromWordPress("footer"),
    getContentFromWordPress("header"),
    getContentFromWordPress("seo"),
  ]);

  const utilitiesData: UtilitiesType = {
    treatments,
    departments,
    footer,
    header,
    seo,
  };

  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning>
      <UtilitiesProvider data={utilitiesData}>
        <body className={`${googleSans.className} ${googleSans.variable} ${italic.variable}`}>
          {children}
        </body>
      </UtilitiesProvider>
    </html>
  );
}
