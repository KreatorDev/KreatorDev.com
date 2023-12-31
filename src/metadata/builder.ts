import { author, host, url, username } from "@/constants/strings";
import { Metadata } from "next";
import {
  Icon,
  IconURL,
  Icons,
} from "next/dist/lib/metadata/types/metadata-types";

function metadataBuilder(
  title: string,
  description: string,
  {
    og,
    path,
    keywords,
    icons,
  }: {
    og?: string;
    path?: string;
    keywords?: string[];
    icons?: IconURL | Icon[] | Icons | null | undefined;
  } = {}
): Metadata {
  path = path || "";
  return {
    title,
    description,
    creator: author,
    publisher: author,
    authors: [
      {
        name: author,
        url: url + path,
      },
    ],
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og ? [og] : undefined,
      creator: "@" + username,
    },
    metadataBase: new URL(url + path),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url + path,
      title,
      description,
      siteName: title,
      images: og
        ? [
            {
              url: og,
              alt: host,
            },
          ]
        : undefined,
    },

    icons,
    keywords,
  };
}

export default metadataBuilder;
