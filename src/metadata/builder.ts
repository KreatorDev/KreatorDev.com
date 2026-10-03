import { brand, host, legalName, og, url, username } from "@/constants/strings";
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
    creator: legalName,
    publisher: legalName,
    authors: [
      {
        name: legalName,
        url,
      },
    ],
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og ? [og] : undefined,
      site: "@" + username,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url + path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url + path,
      title,
      description,
      siteName: brand,
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

export function pageMetadata(
  name: string,
  description: string,
  path: string
): Metadata {
  return metadataBuilder(`${name} | ${brand}`, description, { og, path });
}

export default metadataBuilder;
