import Contact from "@/components/contact/contact";
import { legalName } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";

export const metadata = pageMetadata(
  "Contact",
  `Contact ${legalName} for app support, partnerships and press.`,
  "/contact"
);

export default function ContactEntry() {
  return <Contact />;
}
