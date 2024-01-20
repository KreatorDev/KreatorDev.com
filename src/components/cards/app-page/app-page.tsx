"use client";

import ChevronLeftIcon from "@/assets/icons/chevron-left";
import cardStyle from "@/shared/styles/card";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-toggle";
import AppPageType from "./data/page";

export default function AppPage({ page }: { page: AppPageType }) {
  const app = page.app;
  if (!app) return;

  const legalStyle = "text-sm opacity-30 hover:opacity-100 hover:underline p-2";
  const height = 121;
  const style = "hover:opacity-50 h-[60px]";
  const width = widthFactor(396, 121, 60);
  const now = Date.now();
  return (
    <div className={cardStyle + "!p-3"}>
      <div className="w-full flex flex-row items-center">
        <Link
          href="/"
          className="flex flex-row justify-start items-center gap-2 opacity-30 hover:opacity-100 hover:underline px-2"
        >
          <div className="hover:animate-scale">
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <p className="text-sm">HOME</p>
        </Link>
        <div className="flex-grow" />
        <ThemeSwitcher
          className="hover:animate-none !w-[80px]"
          thumbClassName="h-7 w-7"
        />
      </div>
      <div className="h-12" />
      <div className="w-full flex flex-col items-center justify-center text-center gap-3.5">
        <Image
          className="rounded-full p-2 bg-neutral-500/10 hover:animate-scale"
          src={app.image}
          alt={app.title}
          width={140}
          height={140}
        />
        <div className="h-1" />
        <p className="text-2xl font-bold">{app.title}</p>
        <p className="text-xl text-neutral-500 2xs:px-2 xs:px-5 leading-relaxed">
          {app.description}
        </p>
        <div className="h-4" />
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
          <a href={app.playstore} target="_blank" className={style}>
            <Image
              src="/other/google-play.png"
              alt="Google Play"
              height={height}
              width={width}
            />
          </a>
          <a href={app.appstore} target="_blank" className={style}>
            <Image
              src="/other/app-store.png"
              alt="App Store"
              height={height}
              width={width}
            />
          </a>
        </div>
      </div>
      <div className="h-18" />
      <div className="flex flex-wrap w-full justify-center sm:justify-between items-center gap-x-12 px-3">
        <div className="flex flex-wrap items-center justify-center gap-x-1.5">
          <Link href={app.path + page.privacy} className={legalStyle}>
            Privacy Policy
          </Link>
          {page.terms && (
            <div className="w-1 h-1 bg-neutral-500/80 rounded-full" />
          )}
          {page.terms && (
            <Link href={app.path + page.terms} className={legalStyle}>
              Terms of Use
            </Link>
          )}
        </div>
        <Link href={app.path} className={legalStyle}>
          {app.title} © {new Date(now).getFullYear()}
        </Link>
      </div>
    </div>
  );
}

const widthFactor = (
  originalWidth: number,
  originalHeight: number,
  newHeight: number
) => {
  return (newHeight * originalWidth) / originalHeight;
};
