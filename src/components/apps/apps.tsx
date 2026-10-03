import AppItem from "@/components/cards/apps/app-item";
import AppItemType from "@/components/cards/apps/data/app";
import {
  liveApps,
  underDevApps,
} from "@/components/cards/apps/data/mobile-apps";
import { pastWork } from "@/components/company/data/past-work";
import { PastWorkList, pastWorkNote } from "@/components/company/past-work";
import { legalName } from "@/constants/strings";
import PageTitle from "@/shared/components/titles/page-title";
import AppsTabs from "./apps-tabs";

function TabNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  );
}

function AppList({ apps }: { apps: AppItemType[] }) {
  return (
    <div className="flex flex-col">
      {apps.map((app) => (
        <AppItem key={app.title} app={app} />
      ))}
    </div>
  );
}

export default function Apps() {
  return (
    <div className="flex flex-col gap-12">
      <PageTitle
        eyebrow="Apps"
        title="Everything we publish."
        lead={`Apps designed, built and published by ${legalName}.`}
      />
      <AppsTabs
        tabs={[
          {
            id: "live",
            label: "Our apps",
            count: liveApps.length,
            content: (
              <>
                <TabNote>
                  Live on the App Store and Google Play, owned and maintained by{" "}
                  {legalName}.
                </TabNote>
                <AppList apps={liveApps} />
              </>
            ),
          },
          {
            id: "in-development",
            label: "In development",
            count: underDevApps.length,
            content: (
              <>
                <TabNote>
                  Apps we are building now. Store links appear here as soon as
                  each one launches.
                </TabNote>
                <AppList apps={underDevApps} />
              </>
            ),
          },
          {
            id: "before-kreatordev",
            label: "Before KreatorDev",
            count: pastWork.length,
            content: (
              <>
                <TabNote>{pastWorkNote}</TabNote>
                <PastWorkList items={pastWork} />
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
