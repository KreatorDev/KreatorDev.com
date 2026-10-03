import getAppPage from "@/components/cards/app-page/data/get-object";
import Terms from "@/components/cards/app-page/terms";
import { url } from "@/constants/strings";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = getAppPage(id)?.app;
  if (!app) return {};
  return {
    title: `Terms of Use | ${app.title}`,
    alternates: { canonical: `${url}/${id}/terms` },
  };
}

export default async function TermsEntry({ params }: Props) {
  const { id } = await params;
  const page = getAppPage(id);
  if (!page) notFound();
  return <Terms page={page} />;
}
