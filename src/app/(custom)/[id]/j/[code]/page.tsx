import getAppPage from "@/components/cards/app-page/data/get-object";
import Invite from "@/components/cards/app-page/invite";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string; code: string }> };

// Mirrors PactK.codeAlphabet / codeLength in the FitDuo app.
const codePattern = /^[A-HJKMNP-Z2-9]{6}$/;

export const metadata: Metadata = { robots: { index: false } };

export default async function InviteEntry({ params }: Props) {
  const { id, code } = await params;
  const page = getAppPage(id);
  const normalized = code.toUpperCase();
  if (!page?.invite || !codePattern.test(normalized)) notFound();
  return <Invite page={page} code={normalized} />;
}
