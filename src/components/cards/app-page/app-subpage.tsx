"use client";

import ChevronLeftIcon from "@/assets/icons/chevron-left";
import { legalName } from "@/constants/strings";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-toggle";

export default function AppSubpage({
  app,
  children,
}: {
  app: { title: string; path: string };
  children: React.ReactNode;
}) {
  const legalStyle = "text-sm opacity-30 hover:opacity-100 hover:underline p-2";
  return (
    <div className={cardStyle + "!p-3"}>
      <div className="w-full flex flex-row items-center">
        <Link
          href={app.path}
          className="flex flex-row justify-start items-center gap-2 opacity-30 hover:opacity-100 hover:underline px-2"
        >
          <div className="hover:animate-scale">
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <p className="text-sm">{app.title.toUpperCase()}</p>
        </Link>
        <div className="flex-grow" />
        <ThemeSwitcher
          className="hover:animate-none !w-[80px]"
          thumbClassName="h-7 w-7"
        />
      </div>
      <div className="h-1" />
      {children}
      <div className="h-12" />
      <div className="flex flex-row w-full justify-end items-center gap-4 px-2">
        <Link href={app.path} className={legalStyle}>
          {app.title} © {new Date().getFullYear()} {legalName}
        </Link>
      </div>
    </div>
  );
}
