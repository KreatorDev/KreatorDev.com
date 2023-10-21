"use client";

import MyInfoCard from "@/components/cards/info/info-card";
import LinksWrap from "@/components/cards/links/links-wrap";
import ThemeCard from "@/components/cards/theme/theme-card";
import CardsGrid from "@/shared/components/grids/cards-grid";

export default function Home() {
  return (
    <div className="flex flex-col">
      <CardsGrid title="About">
        <MyInfoCard className="col-span-3 md:col-span-2" />
        <LinksWrap
          className="col-span-3 md:col-span-1"
          gridClassName="!flex flex-wrap md:!grid"
        />
      </CardsGrid>
      <CardsGrid title="Work">
        <MyInfoCard className="col-span-3 md:col-span-2" />
        <LinksWrap
          className="col-span-3 md:col-span-1"
          gridClassName="!flex flex-wrap md:!grid"
        />
      </CardsGrid>
      <CardsGrid title="Blog">
        <MyInfoCard className="col-span-3 md:col-span-2" />
        <LinksWrap
          className="col-span-3 md:col-span-1"
          gridClassName="!flex flex-wrap md:!grid"
        />
      </CardsGrid>
      <CardsGrid title="More">
        <ThemeCard className="!w-44 !min-h-[144px]" />
      </CardsGrid>
    </div>
  );
}
