import { brand, description, og, tagline } from "@/constants/strings";
import { Metadata } from "next";
import metadataBuilder from "./builder";

const rootMetadata: Metadata = metadataBuilder(
  `${brand} | ${tagline}`,
  description,
  {
    keywords: [
      "KreatorDev",
      "KREATORDEV LLC",
      "mobile apps",
      "iOS apps",
      "Android apps",
      "app studio",
    ],
    og,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  }
);

export default rootMetadata;
