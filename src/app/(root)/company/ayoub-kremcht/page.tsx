import Founder from "@/components/company/founder";
import { founder, legalName } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";
import { founderSchema } from "@/metadata/schema";
import JsonLd from "@/shared/components/other/json-ld";

export const metadata = pageMetadata(
  `${founder.name}, ${founder.role}`,
  `${founder.name} is the ${founder.role} of ${legalName}, an independent software company publishing its own mobile apps.`,
  founder.path
);

export default function FounderEntry() {
  return (
    <>
      <Founder />
      <JsonLd data={founderSchema} />
    </>
  );
}
