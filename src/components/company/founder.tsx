import LogoIcon from "@/assets/icons/logo";
import AppRow from "@/components/cards/apps/app-row";
import { mobileApps } from "@/components/cards/apps/data/mobile-apps";
import { email, founder, foundingYear, legalName } from "@/constants/strings";
import linksMetadata from "@/metadata/links";
import { textLink } from "@/shared/styles/button";
import Link from "next/link";
import PastWork from "./past-work";

const profiles = [
  { name: "LinkedIn", href: linksMetadata.linkedin },
  { name: "GitHub", href: linksMetadata.github },
  { name: "X", href: linksMetadata.x },
  { name: "Instagram", href: linksMetadata.instagram },
];

const highlights = [
  { value: `${founder.appsPublished}+`, label: "Apps published" },
  { value: String(founder.since), label: "Building apps since" },
  { value: String(foundingYear), label: `Founded ${legalName}` },
];

const notableApps = mobileApps.filter((app) =>
  ["/radio", "/gymtracker"].includes(app.path ?? "")
);

export default function Founder() {
  return (
    <div className="flex flex-col gap-12">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/company" className="transition-colors hover:text-accent">
          Company
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/company#leadership" className="transition-colors hover:text-accent">
          Leadership
        </Link>
      </nav>

      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <aside className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start motion-safe:animate-rise">
          <span className="flex h-32 w-32 items-center justify-center rounded-full bg-accent/10">
            <LogoIcon className="h-16 w-16 text-accent" />
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-[clamp(2.75rem,4vw+1rem,3.75rem)] leading-[0.95]">
              {founder.name}
            </h1>
            <p className="text-base font-medium">
              {founder.role},{" "}
              <Link href="/company" className={textLink}>
                {legalName}
              </Link>
            </p>
            <p className="text-sm text-neutral-500">Based in {founder.location}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {profiles.map((profile) => (
              <li key={profile.name}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener me"
                  className="inline-flex rounded-full border border-neutral-500/20 px-3.5 py-1.5 text-[13px] font-medium transition hover:border-neutral-500/50 hover:bg-neutral-500/5 after:content-['_↗'] after:text-neutral-500"
                >
                  {profile.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col gap-14">
          <section className="flex flex-col gap-5 text-[17px] leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              {founder.name} is the founder and CEO of {legalName}. He is a
              software developer from {founder.location}, passionate about
              building apps as solutions.
            </p>
            <p>
              He leads product, design and engineering across every KreatorDev
              app, from the first idea to the updates that follow launch.
            </p>
            <p>
              Since {founder.since}, {founder.firstName} has published more than{" "}
              {founder.appsPublished} apps, for his own products and for
              clients. Among them, Radio Mobile and GymTracker stand out for
              their quality, and both are now published by {legalName}.
            </p>
            <p>
              In {foundingYear}, he founded {legalName} to focus entirely on
              building and publishing the company&apos;s own apps.
            </p>
          </section>

          <figure className="flex flex-col gap-4 border-t border-neutral-500/20 pt-8">
            <blockquote className="font-display text-[clamp(1.75rem,2vw+1rem,2.25rem)] italic leading-[1.15]">
              “{founder.quote}”
            </blockquote>
            <figcaption className="text-sm text-neutral-500">
              {founder.name}, {founder.role}
            </figcaption>
          </figure>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-neutral-400/20 bg-neutral-400/20 dark:border-neutral-600/10 dark:bg-neutral-600/10 3xs:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 bg-lighter px-5 py-5 dark:bg-darker">
                <dt className="order-2 text-xs uppercase tracking-[0.14em] text-neutral-500">
                  {item.label}
                </dt>
                <dd className="order-1 font-display text-3xl leading-none">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="flex flex-col gap-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              Notable apps
            </h2>
            <div className="flex flex-col">
              {notableApps.map((app) => (
                <AppRow key={app.title} app={app} />
              ))}
            </div>
          </section>

          <PastWork />

          <p className="text-[15px] text-neutral-600 dark:text-neutral-400">
            For business enquiries, contact{" "}
            <a href={"mailto:" + email} className={textLink}>
              {email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
