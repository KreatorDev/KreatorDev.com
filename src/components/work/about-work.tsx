"use client";

import NotFoundEntry from "@/app/(root)/not-found";
import ChevronLeftIcon from "@/assets/icons/chevron-left";
import cardStyle from "@/shared/styles/card";
import { useRouter } from "next/navigation";
import AppItem from "../cards/apps/app-item";
import { mobileApps } from "../cards/apps/data/mobile-apps";
import { webApps } from "../cards/apps/data/web-apps";

function AboutWork({ id }: { id: string }) {
  const findWork = [...webApps, ...mobileApps].find(
    (work) => work.path === `/work/${id}`
  );
  const router = useRouter();
  if (!findWork) return <NotFoundEntry />;
  return (
    <div className={cardStyle}>
      <button
        onClick={() => router.back()}
        className="flex flex-row justify-start items-center gap-2 opacity-50 hover:opacity-100 hover:underline"
      >
        <div className="hover:animate-scale">
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <p className="text-sm">BACK</p>
      </button>
      <div className="h-7" />
      <AppItem card={findWork} hideLearnMore />
      <div className="h-7" />
      <div className="flex flex-row gap-3">
        {[1].map((i) => (
          <div
            key={i}
            className="h-96 w-52 rounded-2xl bg-neutral-500/10 border border-neutral-500/10"
          />
        ))}
      </div>
    </div>
  );
}

export default AboutWork;
