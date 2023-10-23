"use client";

import PreviewAppsList from "@/components/cards/apps/preview-list";
import MyInfoCard from "@/components/cards/info/info-card";
import LinksCard from "@/components/cards/links/links-card";
import ThemeCard from "@/components/cards/theme/theme-card";
import GridCards from "@/shared/components/layout/grid-cards";

export default function Home() {
  return (
    <div className="flex flex-col">
      <GridCards title="About">
        <MyInfoCard className="col-span-3 md:col-span-2" />
        <LinksCard className="col-span-3 md:col-span-1" />
      </GridCards>
      <GridCards className="!grid-cols-1" title="Work">
        <PreviewAppsList />
      </GridCards>
      {/* <CardsGrid title="Blog">
      </CardsGrid> */}
      <GridCards title="More">
        <ThemeCard className="!w-44 !min-h-[144px]" />
      </GridCards>
    </div>
  );
}
