import AppPage from "@/components/cards/app-page/app-page";
import getAppPage from "@/components/cards/app-page/data/get-object";
import { notFound } from "next/navigation";

export default async function AppPageEntry({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = getAppPage(id);
  if (!page) notFound();
  return <AppPage page={page} />;
}
