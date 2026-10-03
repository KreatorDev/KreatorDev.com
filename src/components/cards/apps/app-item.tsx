import AppstoreIcon from "@/assets/icons/appstore";
import GooglePlayIcon from "@/assets/icons/google-play";
import Link from "next/link";
import AppIcon from "./app-icon";
import AppItemType from "./data/app";

const pillStyle =
  "inline-flex items-center gap-2 rounded-full border border-neutral-500/20 px-3.5 py-1.5 text-[13px] font-medium transition hover:border-neutral-500/50 hover:bg-neutral-500/5";

function AppItem({ app }: { app: AppItemType }) {
  return (
    <article className="flex flex-col gap-5 border-t border-neutral-500/15 py-8 first:border-t-0 first:pt-0 3xs:flex-row">
      <AppIcon app={app} className="h-20 w-20 xs:h-24 xs:w-24" />
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {app.path ? (
              <Link href={app.path} className="transition-colors hover:text-accent">
                {app.title}
              </Link>
            ) : (
              app.title
            )}
          </h2>
          <p className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            {app.category}
            {app.under_dev && (
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                In development
              </span>
            )}
          </p>
        </div>
        <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {app.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {!app.under_dev && app.appstore && (
            <a href={app.appstore} target="_blank" rel="noopener" className={pillStyle}>
              <AppstoreIcon className="h-4 w-4" />
              App Store
            </a>
          )}
          {!app.under_dev && app.playstore && (
            <a href={app.playstore} target="_blank" rel="noopener" className={pillStyle}>
              <GooglePlayIcon className="h-4 w-4" />
              Google Play
            </a>
          )}
          {app.path && (
            <Link
              href={app.path}
              className="px-2 text-[13px] font-medium text-neutral-500 transition-colors hover:text-accent after:content-['_→']"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default AppItem;
