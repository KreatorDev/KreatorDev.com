"use client";

import PreviewAboutCard from "@/components/cards/about/preview-about";
import PreviewAppsList from "@/components/cards/apps/preview-list";
import LinksGridCard from "@/components/cards/links/links-grid";
import GridCards from "@/shared/components/layout/grid-cards";

export default function Home() {
  return (
    <div className="flex flex-col">
      <GridCards title="About">
        <PreviewAboutCard className="col-span-5 md:col-span-4" />
        <LinksGridCard className="col-span-3 md:col-span-1" />
      </GridCards>
      <GridCards className="!grid-cols-1" title="Work">
        <PreviewAppsList />
      </GridCards>
    </div>
  );
}
