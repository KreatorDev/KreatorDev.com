import { uniqueTags } from "@/components/cards/about/experiences";
import { author, shortAbout, username } from "@/constants/strings";
import { Metadata } from "next";
import rootMetadata from "./root";

const aboutTitle = username + " | About";
const aboutDescription = `${author}, ${shortAbout}`;

const aboutMetadata: Metadata = {
  ...rootMetadata,
  title: aboutTitle,
  description: aboutDescription,
  openGraph: {
    ...rootMetadata.openGraph,
    title: aboutTitle,
    description: aboutDescription,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: aboutTitle,
    description: aboutDescription,
  },
  keywords: uniqueTags,
};

export default aboutMetadata;
