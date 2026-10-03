import AppIcon from "@/components/cards/apps/app-icon";
import {
  liveApps,
  underDevApps,
} from "@/components/cards/apps/data/mobile-apps";
import { appStoreUrl, googlePlayUrl, legalName } from "@/constants/strings";
import { primaryButton, secondaryButton } from "@/shared/styles/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div className="flex flex-col gap-7 motion-safe:animate-rise">
        <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {legalName} · Independent app studio
        </p>
        <h1 className="font-display font-semibold text-[clamp(3rem,6vw+1rem,5.5rem)] leading-[0.92] tracking-[-0.02em]">
          Simple, honest apps for <em className="text-accent">everyday</em>{" "}
          life.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          We design, build and publish our own apps for iOS and Android, for
          health, money, home, learning and the small routines in between.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/apps" className={primaryButton}>
            Explore our apps
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener"
            className={secondaryButton}
          >
            App Store ↗
          </a>
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener"
            className={secondaryButton}
          >
            Google Play ↗
          </a>
        </div>
      </div>
      <div>
        <ul
          aria-label="Our apps"
          className="grid grid-cols-4 gap-x-3 gap-y-5 rounded-[2rem] border border-neutral-400/20 bg-surface p-5 shadow-[0_30px_60px_-30px_rgba(26,25,23,0.25)] dark:border-neutral-600/10 dark:bg-dark sm:gap-x-5 sm:p-7"
        >
          {[...liveApps, ...underDevApps].map((app, index) => (
            <li
              key={app.title}
              style={{ animationDelay: `${120 + index * 45}ms` }}
              className="motion-safe:animate-rise"
            >
              <Link
                href={app.path ?? app.appstore ?? "/apps"}
                target={app.path ? undefined : "_blank"}
                className="group relative flex flex-col items-center gap-2"
              >
                <AppIcon
                  app={app}
                  priority
                  className="aspect-square w-full transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
                />
                {app.under_dev && (
                  <span className="absolute -right-1.5 -top-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white sm:text-[10px]">
                    Soon
                  </span>
                )}
                <span className="w-full truncate text-center text-[11px] text-neutral-500 sm:text-xs">
                  {app.title.split(/ - |: /)[0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
