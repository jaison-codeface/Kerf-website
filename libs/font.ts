import LocalFont from "next/font/local";

export const googleSans = LocalFont({
  src: [
    {
      path: "../assets/fonts/GoogleSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GoogleSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GoogleSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/GoogleSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/GoogleSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/GoogleSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font--google-sans",
});
