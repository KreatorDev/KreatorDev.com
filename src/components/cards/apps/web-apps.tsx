import DesktopIcon from "@/assets/icons/desktop";
import CardButton from "@/shared/components/buttons/card-button";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";
import AppItem from "./app-item";

const webApps = [
  {
    title: "Dreamshow",
    description:
      "AI entertainment platform where you text, talk, and video chat with AI characters.",
    image: "/works/dreamshow/logo.png",
    link: "https://dreamshow.ai",
    path: "/work/#dreamshow",
    techs: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Stripe",
      "Matter.js",
      "OpenAI",
    ],
    hasBorder: true,
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

function WebAppsList() {
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
      icon={<DesktopIcon />}
      title="WEB"
    >
      {webApps.map((card) => (
        <AppItem
          key={card.title}
          //   isLast={card.path != webApps[webApps.length - 1].path}
          card={card}
        />
      ))}
    </GridCard>
  );
}

export default WebAppsList;
