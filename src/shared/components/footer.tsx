import LogoIcon from "@/assets/icons/logo";
import AppPaths from "@/constants/paths";
import {
  appStoreUrl,
  brand,
  email,
  founder,
  fullAddress,
  googlePlayUrl,
  legalName,
  tagline,
} from "@/constants/strings";
import Link from "next/link";
import cardStyle from "../styles/card";

const groups = [
  {
    title: "Apps",
    links: [
      { name: "All apps", href: "/apps" },
      { name: "App Store", href: appStoreUrl, external: true },
      { name: "Google Play", href: googlePlayUrl, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/company" },
      { name: "Leadership", href: founder.path },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: AppPaths.legal.map((item) => ({ name: item.name, href: item.path })),
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={cardStyle + "!p-7 sm:!p-9 gap-10 mb-6"}>
      <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
          <Link href="/" className="flex w-fit items-center gap-2.5">
            <LogoIcon className="h-7 w-7 text-accent" />
            <span className="text-[17px] font-semibold tracking-tight">
              {brand}
            </span>
          </Link>
          <p className="max-w-[16rem] text-sm leading-relaxed text-neutral-500">
            {tagline}.
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              {group.title}
            </p>
            {group.links.map((link) =>
              "external" in link ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="w-fit text-sm transition-colors hover:text-accent after:content-['_↗'] after:text-neutral-500"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm transition-colors hover:text-accent"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        ))}
      </div>
      <div className="flex w-full flex-col gap-2 border-t border-neutral-500/15 pt-6 text-xs leading-relaxed text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {legalName}. All rights reserved.
        </p>
        <address className="not-italic">
          {fullAddress} ·{" "}
          <a href={"mailto:" + email} className="hover:text-accent">
            {email}
          </a>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
