import { uniqueTags } from "@/components/cards/about/experiences";
import { username } from "@/constants/strings";
import { Metadata } from "next";
import rootMetadata from "./root";

const workTitle = username + " | Work";
const workDescription = "A selection of my work and projects";

const workMetadata: Metadata = {
  ...rootMetadata,
  title: workTitle,
  description: workDescription,
  openGraph: {
    ...rootMetadata.openGraph,
    title: workTitle,
    description: workDescription,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: workTitle,
    description: workDescription,
  },
  keywords: uniqueTags,
};

export default workMetadata;
