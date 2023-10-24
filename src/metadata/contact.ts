import { title } from "@/constants/strings";
import { Metadata } from "next";
import rootMetadata from "./root";

const contactTitle = title + " | Contact";
const contactDescription =
  "Contact me by filling the contact form below, or reach me out on social media";

const contactMetadata: Metadata = {
  ...rootMetadata,
  title: contactTitle,
  description: contactDescription,
  openGraph: {
    ...rootMetadata.openGraph,
    title: contactTitle,
    description: contactDescription,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: contactTitle,
    description: contactDescription,
  },
};

export default contactMetadata;
