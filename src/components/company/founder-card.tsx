import LogoIcon from "@/assets/icons/logo";
import { founder, legalName } from "@/constants/strings";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";

export default function FounderCard() {
  return (
    <Link
      href={founder.path}
      className={
        cardStyle +
        "group !justify-start gap-6 !p-6 sm:!flex-row sm:!items-center sm:!p-8 transition-colors hover:border-neutral-500/40"
      }
    >
      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent/10 sm:h-24 sm:w-24">
        <LogoIcon className="h-14 w-14 text-accent sm:h-16 sm:w-16" />
      </span>
      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="font-display text-3xl leading-none">{founder.name}</p>
        <p className="text-sm font-medium">
          {founder.role}, {legalName}
        </p>
        <p className="max-w-lg pt-1 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          A software developer from {founder.location} who has published more
          than {founder.appsPublished} apps since {founder.since}.
        </p>
        <span className="pt-2 text-sm font-medium transition-colors group-hover:text-accent after:content-['_→']">
          Read profile
        </span>
      </div>
    </Link>
  );
}
