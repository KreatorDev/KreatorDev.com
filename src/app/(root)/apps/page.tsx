import Apps from "@/components/apps/apps";
import { legalName } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";

export const metadata = pageMetadata(
  "Apps",
  `Every app designed, built and published by ${legalName} for iOS and Android.`,
  "/apps"
);

export default function AppsEntry() {
  return <Apps />;
}
