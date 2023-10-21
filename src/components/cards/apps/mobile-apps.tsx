import MobileIcon from "@/assets/icons/mobile";
import CardButton from "@/shared/components/buttons/card-button";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";
import AppItem from "./app-item";

const MobileApps = [
  {
    title: "Radio Mobile",
    description:
      "A radio app to listen or add any radio stations, offering features like search, favorites, sleep timer, song recognition.",
    image: "/works/radioclub/logo.jpg",
    appstore: "https://apps.apple.com/us/app/radio-mobile/id1634077380",
    path: "/work/#radio-mobile",
    techs: [
      "Flutter",
      "Node.js",
      "Docker",
      "AdMob",
      "RevenueCat",
      "Localization",
    ],
  },
  {
    title: "Dreamshow",
    description:
      "AI chatbot mobile app where you can find many AI characters, and talk to them.",
    image: "/works/dreamshow/mobile.png",
    appstore: "https://apps.apple.com/us/app/dreamshow-ai/id1671059685",
    path: "/work/#dreamshow-mobile",
    techs: ["Flutter", "Node.js", "OpenAI", "PlayHT", "RevenueCat"],
  },
  {
    title: "WDYT",
    description:
      "Anonymous question & answer to get feedback from your followers on social media.",
    image: "/works/wdyt/logo.png",
    link: "https://wdyt.app/kreatordev",
    path: "/work/#wdyt",
    techs: ["Next.js", "Tailwind CSS", "Firebase", "Node.js"],
  },
];

function MobileAppsList() {
  return (
    <GridCard
      footer={
        <div className="w-full">
          <Link href="/work" className="mt-1">
            <CardButton
              title="VIEW ALL"
              className="hover:animate-scale float-right"
            />
          </Link>
        </div>
      }
      icon={<MobileIcon />}
      title="MOBILE"
    >
      {MobileApps.map((card) => (
        <AppItem
          key={card.title}
          //   isLast={card.path != MobileApps[MobileApps.length - 1].path}
          card={card}
        />
      ))}
    </GridCard>
  );
}

export default MobileAppsList;
