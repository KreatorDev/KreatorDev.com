import AppIcon from "@/components/cards/apps/app-icon";
import { liveApps } from "@/components/cards/apps/data/mobile-apps";
import {
  duns,
  email,
  entityType,
  foundingYear,
  fullAddress,
  legalName,
  supportEmail,
} from "@/constants/strings";
import PageTitle from "@/shared/components/titles/page-title";
import SectionTitle from "@/shared/components/titles/section-title";
import { textLink } from "@/shared/styles/button";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import FounderCard from "./founder-card";

const facts = [
  { label: "Legal name", value: legalName },
  { label: "Entity", value: entityType },
  { label: "Founded", value: String(foundingYear) },
  { label: "D-U-N-S", value: duns },
  { label: "Principal office", value: fullAddress },
  { label: "Business enquiries", value: email, href: "mailto:" + email },
  { label: "App support", value: supportEmail, href: "mailto:" + supportEmail },
];

const story = [
  {
    title: "What we do",
    text: `${legalName} creates and owns every app it publishes. Our apps cover health and fitness, personal finance, home and food, weather, music, education and entertainment, with +${liveApps.length} apps available on the App Store and Google Play.`,
  },
  {
    title: "How we work",
    text: "We are a small, founder-led studio. Every app is designed, engineered and maintained in-house, from the first prototype to every update after launch.",
  },
  {
    title: "Business model",
    text: "Our apps are free to download. Revenue comes from optional subscriptions and in-app purchases, and from advertising in some free apps. Payments are processed by Apple and Google.",
  },
];

export default function Company() {
  return (
    <div className="flex flex-col gap-24">
      <PageTitle
        eyebrow="Company"
        title="We build focused apps that solve everyday problems."
        lead={`${legalName} is an independent software company. We design, build and publish our own mobile apps for iOS and Android, and we look after them long after launch.`}
      />

      <section className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col gap-10">
          {story.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <aside className={cardStyle + "!justify-start gap-5 !p-7 h-fit"}>
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Company facts
          </h2>
          <dl className="flex w-full flex-col">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-t border-neutral-500/15 py-3.5 first:border-t-0 first:pt-0 last:pb-0"
              >
                <dt className="text-xs text-neutral-500">{fact.label}</dt>
                <dd className="text-[15px] font-medium leading-snug">
                  {fact.href ? (
                    <a href={fact.href} className={textLink}>
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section id="leadership" className="flex flex-col gap-8 scroll-mt-32">
        <SectionTitle eyebrow="Leadership" title="Who runs KreatorDev" />
        <FounderCard />
      </section>

      <section className="flex flex-col gap-8">
        <SectionTitle
          eyebrow="Products"
          title="Our apps"
          action={
            <Link
              href="/apps"
              className="text-sm font-medium transition-colors hover:text-accent after:content-['_→']"
            >
              View all
            </Link>
          }
        />
        <ul className="flex flex-wrap gap-3">
          {liveApps.map((app) => (
            <li key={app.title}>
              <Link
                href={app.path ?? "/apps"}
                aria-label={app.title}
                title={app.title}
                className="block transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <AppIcon app={app} className="h-14 w-14 sm:h-16 sm:w-16" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
