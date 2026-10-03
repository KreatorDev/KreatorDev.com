import {
  email,
  entityType,
  fullAddress,
  legalName,
  supportEmail,
} from "@/constants/strings";
import PageTitle from "@/shared/components/titles/page-title";
import { textLink } from "@/shared/styles/button";

const proseStyle =
  "flex flex-col gap-4 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink dark:[&_h2]:text-lighter [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_a]:font-medium [&_a]:underline [&_a]:decoration-neutral-500/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-accent";

export default function LegalPage({
  title,
  lead,
  effective,
  children,
}: {
  title: string;
  lead: string;
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex max-w-3xl flex-col gap-10">
      <PageTitle eyebrow="Legal" title={title} lead={lead} />
      <p className="text-sm text-neutral-500">Effective {effective}</p>
      <div className={proseStyle}>{children}</div>
      <address className="flex flex-col gap-1 border-t border-neutral-500/15 pt-8 text-sm not-italic leading-relaxed text-neutral-600 dark:text-neutral-400">
        <span className="font-semibold text-ink dark:text-lighter">{legalName}</span>
        <span>{entityType}</span>
        <span>{fullAddress}</span>
        <span>
          <a href={"mailto:" + supportEmail} className={textLink}>
            {supportEmail}
          </a>{" "}
          ·{" "}
          <a href={"mailto:" + email} className={textLink}>
            {email}
          </a>
        </span>
      </address>
    </article>
  );
}
