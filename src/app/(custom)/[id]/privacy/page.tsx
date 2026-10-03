import getAppPage from "@/components/cards/app-page/data/get-object";
import Privacy from "@/components/cards/app-page/privacy";
import { url } from "@/constants/strings";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = getAppPage(id)?.app;
  if (!app) return {};
  return {
    title: `Privacy Policy | ${app.title}`,
    alternates: { canonical: `${url}/${id}/privacy` },
  };
}

export default async function PrivacyEntry({ params }: Props) {
  const { id } = await params;
  const page = getAppPage(id);
  if (!page) notFound();
  return <Privacy page={page} />;
}
