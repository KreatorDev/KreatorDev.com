import Billing from "@/components/cards/app-page/billing";
import getAppPage from "@/components/cards/app-page/data/get-object";
import { url } from "@/constants/strings";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = getAppPage(id)?.app;
  if (!app) return {};
  return {
    title: `Billing | ${app.title}`,
    description: `Manage, cancel, restore or get a refund for your ${app.title} subscription on the App Store, Google Play or the web.`,
    alternates: { canonical: `${url}/${id}/billing` },
  };
}

export default async function BillingEntry({ params }: Props) {
  const { id } = await params;
  const page = getAppPage(id);
  if (!page) notFound();
  return <Billing page={page} />;
}
