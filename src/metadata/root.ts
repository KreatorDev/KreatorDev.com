import {
  author,
  description,
  host,
  og,
  title,
  url,
  username,
} from "@/constants/strings";
import { Metadata } from "next";

const rootMetadata: Metadata = {
  title,
  description,
  creator: author,
  publisher: author,
  authors: [
    {
      name: author,
      url,
    },
  ],
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [og],
    creator: "@" + username,
  },
  metadataBase: new URL(url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: og,
        alt: host,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Mobile",
    "Flutter",
    "Dart",
    "Web",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

export default rootMetadata;
