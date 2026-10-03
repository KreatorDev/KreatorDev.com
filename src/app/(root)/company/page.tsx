import Company from "@/components/company/company";
import { description } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";

export const metadata = pageMetadata("Company", description, "/company");

export default function CompanyEntry() {
  return <Company />;
}
