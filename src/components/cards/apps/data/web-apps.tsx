import DesktopIcon from "@/assets/icons/desktop";
import CardButton from "@/shared/components/buttons/card-button";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";
import AppItem from "../app-item";

export const webApps = [
  {
    title: "Dreamshow",
    description:
      "AI entertainment platform to text, talk, or video chat with AI characters, offering a way to create your own AI character.",
    image: "/works/dreamshow/logo.png",
    link: "https://dreamshow.ai",
    path: "/work/dreamshow-web",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Stripe",
      "Matter.js",
      "PlayHT",
      "RunPod.io",
      "LLM",
    ],
    hasBorder: true,
  },
  {
    title: "WDYT",
    description:
      "Anonymous question & answer to get feedback from your followers on social media.",
    image: "/works/wdyt/logo.png",
    link: "https://wdyt.app/kreatordev",
    path: "/work/wdyt-web",
    tags: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Finwise",
    description:
      "SDK framework for financial institutions that allows them create their own AI-powered financial assistant.",
    image: "/works/finwise/logo.jpg",
    link: "https://finwiseai.web.app/",
    path: "/work/finwise-web",
    tags: ["Flutter Web", "Node.js", "Plaid", "RunPod.io", "LLM"],
    hasBorder: true,
  },

  {
    title: "KreatorDev Website",
    description:
      "A personal website to introduce myself, showcase my work, and to share my thoughts, providing a way to contact me.",
    image: "/me/square.png",
    link: "https://kreatordev.com",
    github: "https://github.com/KreatorDev/KreatorDev.com",
    path: "/work/kreatordev",
    tags: ["Next.js", "Tailwind CSS"],
    imageClassName: "bg-neutral-50 dark:bg-white p-2",
    hasBorder: true,
  },
];

function WebAppsList() {
  return (
    <GridCard
      footer={
        <div className="w-full">
          <Link href="/work/#web" className="mt-1">
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
        <AppItem key={card.title} card={card} />
      ))}
    </GridCard>
  );
}

export default WebAppsList;