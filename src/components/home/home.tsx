import AppRow from "@/components/cards/apps/app-row";
import { liveApps } from "@/components/cards/apps/data/mobile-apps";
import FounderCard from "@/components/company/founder-card";
import { email, foundingYear, supportEmail } from "@/constants/strings";
import SectionTitle from "@/shared/components/titles/section-title";
import { primaryButton, textLink } from "@/shared/styles/button";
import Link from "next/link";
import Hero from "./hero";
import Principles from "./principles";

const facts = [
  { label: "Apps live", value: "+" + String(liveApps.length) },
  { label: "Platforms", value: "iOS & Android" },
  { label: "Founded", value: String(foundingYear) },
  { label: "Registered", value: "Wyoming, USA" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32">
      <div className="flex flex-col gap-14">
        <Hero />
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-neutral-400/20 bg-neutral-400/20 dark:border-neutral-600/10 dark:bg-neutral-600/10 sm:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1.5 bg-lighter px-5 py-5 dark:bg-darker"
            >
              <dt className="text-xs uppercase tracking-[0.14em] text-neutral-500">
                {fact.label}
              </dt>
              <dd className="font-display text-2xl leading-tight sm:text-[1.75rem]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="flex flex-col gap-8">
        <SectionTitle
          eyebrow="Products"
          title="Our latest apps"
          action={
            <Link
              href="/apps"
              className="text-sm font-medium transition-colors hover:text-accent after:content-['_→']"
            >
              View all apps
            </Link>
          }
        />
        <div className="grid gap-x-10 sm:grid-cols-2">
          {liveApps.slice(0, 6).map((app) => (
            <AppRow key={app.title} app={app} />
          ))}
        </div>
      </section>

      <Principles />

      <section id="leadership" className="flex flex-col gap-8 scroll-mt-32">
        <SectionTitle eyebrow="Leadership" title="Who runs KreatorDev" />
        <FounderCard />
      </section>

      <section className="flex flex-col items-start gap-6 border-t border-neutral-500/20 pt-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.02]">
            Partnerships, press or support?
          </h2>
          <p className="text-[15px] text-neutral-600 dark:text-neutral-400">
            Business enquiries:{" "}
            <a href={"mailto:" + email} className={textLink}>
              {email}
            </a>
            <br />
            App support:{" "}
            <a href={"mailto:" + supportEmail} className={textLink}>
              {supportEmail}
            </a>
          </p>
        </div>
        <Link href="/contact" className={primaryButton + "shrink-0"}>
          Contact us
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
