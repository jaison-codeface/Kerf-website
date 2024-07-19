import LocalFont from "next/font/local";
import {
  Courgette,
  Arizonia,
  Birthstone,
  Lobster,
  Kalam,
} from "next/font/google";

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

export const fsAlbert = LocalFont({
  src: [
    {
      path: "../assets/fonts/FSAlbert Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FSAlbert-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font--google-sans",
});

export const italic = Kalam({
  weight: ["400", "700"],
  variable: "--font--italic",
  preload: false,
});
