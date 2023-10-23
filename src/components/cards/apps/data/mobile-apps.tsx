import MobileIcon from "@/assets/icons/mobile";
import CardButton from "@/shared/components/buttons/card-button";
import GridCard from "@/shared/components/layout/grid-card";
import Link from "next/link";
import AppItem from "../app-item";

export const mobileApps = [
  {
    title: "Radio Mobile",
    description:
      "A radio app to listen or add any radio stations, offering features like search, favorites, sleep timer, song recognition.",
    image: "/works/radioclub/logo.jpg",
    appstore: "https://apps.apple.com/app/radio-mobile/id1634077380",
    playstore: "https://play.google.com/store/apps/details?id=vip.radioclub",
    path: "/work/radio-mobile",
    tags: [
      "Flutter",
      "Firebase",
      "Node.js",
      "Docker",
      "AdMob",
      "RevenueCat",
      "Localization",
    ],
    hasBorder: true,
  },
  {
    title: "Snapsaga",
    description:
      "AI chat stories app to play or create AI characters and simulate their own persona in those stories.",
    image: "/works/snapsaga/logo.png",
    appstore:
      "https://apps.apple.com/app/snapsaga-simulate-a-new-world/id6449471782",
    path: "/work/snapsaga",
    tags: ["Flutter", "Firebase", "Node.js", "PlayHT", "LLM", "RevenueCat"],
  },
  {
    title: "Ask Nova",
    description:
      "Voice AI assistant app to answer your questions, designed to save time and provide quick answers.",
    image: "/works/ask-nova/logo.png",
    appstore: "https://apps.apple.com/app/ask-nova-ai-assistant/id1672860414",
    path: "/work/ask-nova",
    tags: ["Flutter", "Google STT", "OpenAI", "Whisper"],
  },
  {
    title: "NPC",
    description:
      "AI chat games that brings you exciting AI games every day, designed to challenge strategic thinking and negotiating skills.",
    image: "/works/npc/logo.png",
    appstore: "https://apps.apple.com/app/npc-ai-chat-games/id6446919923",
    path: "/work/npc",
    tags: ["Flutter", "Firebase", "OpenAI"],
  },
  {
    title: "Sebmita",
    description:
      "A language learning app to learn and practice speaking, reading, listening and writing african languages.",
    image: "/works/sebmita/logo.png",
    appstore: "https://apps.apple.com/app/sebmita/id1567445203",
    playstore:
      "https://play.google.com/store/apps/details?id=com.sebmita.sebmita",
    path: "/work/sebmita",
    tags: ["Flutter", "Firebase", "Localization", "AdMob", "RevenueCat"],
    hasBorder: true,
  },
  {
    title: "Daedalus Wallet",
    description:
      "A cryptocurrency wallet app to create a secure crypto wallet, and to send, receive, and manage cryptocurrency assets.",
    image: "/works/daedalus-wallet/logo.png",
    appstore: "https://apps.apple.com/app/daedalus-wallet-mobile/id6443645636",
    path: "/work/daedalus-wallet",
    tags: ["Flutter", "Firebase", "Node.js", "AdMob", "RevenueCat"],
    hasBorder: true,
  },
  {
    title: "Daedalus",
    description:
      "An investment & portfolio tracking app to track your stocks, crypto, NFT assets, and manage your personal portfolio.",
    image: "/works/daedalus/logo.png",
    playstore: "https://play.google.com/store/apps/details?id=com.daedalusfi",
    path: "/work/daedalus",
    tags: ["Flutter", "Node.js", "Alpaca", "Plaid", "AdMob", "RevenueCat"],
    hasBorder: true,
  },
  {
    title: "Dreamshow",
    description:
      "AI chatbot app where you can find many AI characters, and chat with them.",
    image: "/works/dreamshow/mobile.png",
    appstore: "https://apps.apple.com/app/dreamshow-ai/id1671059685",
    path: "/work/dreamshow",
    tags: ["Flutter", "Firebase", "Node.js", "RunPod.io", "LLM"],
    hasBorder: true,
  },
  {
    title: "Creator Performance Marketing",
    description:
      "An deals app to help TikTok creators find the best deals, and to help brands find the best creators.",
    appstore:
      "https://apps.apple.com/app/creator-performance-marketing/id1619726760",
    image: "/works/cpm/logo.jpg",
    path: "/work/cpm",
    tags: ["Flutter", "Firebase", "Node.js"],
    hasBorder: true,
  },
  {
    title: "Zoom Tap Animation",
    description:
      "A zoom animation package to zoom in/out any widget, and create a zoom animation effect.",
    image: "/works/pub-dev/logo.png",
    github: "https://github.com/KreatorDev/zoom_tap_animation",
    pub: "https://pub.dev/packages/zoom_tap_animation",
    path: "/work/zoom-tap-animation",
    tags: ["Flutter"],
    hasBorder: true,
  },
  {
    title: "Finwise",
    description:
      "AI personal financial assistant app to manage your money, get AI insights about your finances.",
    image: "/works/finwise/logo.jpg",
    appstore: "https://apps.apple.com/app/finwise/id6446466730",
    path: "/work/finwise",
    tags: ["Flutter", "Firebase", "Plaid", "LLM"],
    hasBorder: true,
  },
  {
    title: "WDYT",
    description:
      "Anonymous question & answer app to get feedback from your followers on social media.",
    image: "/works/wdyt/logo.png",
    appstore: "https://apps.apple.com/app/wdyt-anonymous-q-a/id6449153741",
    path: "/work/wdyt",
    tags: ["Flutter", "Firebase", "Node.js"],
  },
  {
    title: "Songbird",
    description:
      "A music rooms to listen, discover, and share music with other people, and to create rooms to listen to music together.",
    image: "/works/songbird/logo.png",
    appstore:
      "https://apps.apple.com/app/songbird-listen-together/id1572218061",
    path: "/work/songbird",
    tags: ["Flutter", "Firebase", "Node.js"],
  },
  {
    title: "UniTrade",
    description:
      "A college marketplace app to buy and sell items with other students, also to services like design, tutoring, and more.",
    image: "/works/unitrade/logo.png",
    appstore: "https://apps.apple.com/app/unitrade/id1587195199",
    path: "/work/unitrade",
    tags: ["Flutter", "Firebase"],
    hasBorder: true,
  },
  {
    title: "Nonga",
    description:
      "A dating app to meet new people, date, and find meaningful connections with people who share similar cultural values.",
    image: "/works/nonga/logo.png",
    appstore: "https://apps.apple.com/app/nonga/id1549916484",
    playstore:
      "https://play.google.com/store/apps/details?id=com.tengsoba.nonga",
    path: "/work/nonga",
    tags: ["Flutter", "Firebase", "Localization", "AdMob", "RevenueCat"],
  },
  {
    title: "DormLive",
    description:
      "A hang-out college app to help students find, meet new people, and create audio rooms, and chat with friends.",
    image: "/works/dormlive/logo.png",
    appstore: "https://apps.apple.com/app/dormlive/id1553996014",
    path: "/work/dormlive",
    tags: ["Flutter", "Firebase"],
  },
  {
    title: "Vocado",
    description:
      "A voice notes app to record, transcribe, and save voice notes, and to share them with friends.",
    image: "/works/vocado/logo.png",
    appstore: "https://apps.apple.com/app/vocado/id1552999113",
    path: "/work/vocado",
    tags: ["Flutter", "Firebase", "Google STT"],
    hasBorder: true,
  },
  {
    title: "Kibbit",
    description:
      "A college social app to help students know each other by asking and answering questions anonymously.",
    appstore: "https://apps.apple.com/app/kibbit-campus-ama/id1547609144",
    image: "/works/kibbit/logo.png",
    path: "/work/kibbit",
    tags: ["Flutter", "Firebase"],
    hasBorder: true,
  },
  {
    title: "Simple Workout",
    description:
      "A workout app to do exercise at home, offering quick and easy workouts, with daily reminder.",
    image: "/works/simple-workout/logo.png",
    hasBorder: true,
    appstore:
      "https://apps.apple.com/app/simple-workout-home-exercises/id1668371203",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.bodyexercises",
    path: "/work/simple-workout",
    tags: ["Flutter", "AdMob"],
  },
  {
    title: "Voz",
    description:
      "A voice chat app to send voice messages, and to chat with friends, designed to save time and have fun.",
    image: "/works/voz/logo.png",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.avc",
    hasBorder: true,
    path: "/work/voz",
    tags: ["Flutter", "Firebase", "Google STT"],
  },
  {
    title: "Children Stories",
    description:
      "A stories app that provides a collection of children short stories, with beautiful illustrations.",
    image: "/works/arabic-stories/logo.jpg",
    appstore:
      "https://apps.apple.com/app/قصص-أطفال-مصورة-مغامرات-ممتعة/id1665629088",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.arabicstories",
    path: "/work/arabic-stories",
    tags: ["Flutter", "Node.js", "AdMob", "RevenueCat"],
  },
  {
    title: "Tamara Shop",
    description:
      "A skate & surf shop app to buy skateboards, surfboards, accessories, and to manage orders.",
    image: "/works/tamara/logo.png",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.tamarashop",
    path: "/work/tamara",
    tags: ["Flutter", "Firebase"],
    hasBorder: true,
  },
];

function MobileAppsList() {
  return (
    <GridCard
      footer={
        <div className="w-full">
          <Link href="/work/#mobile" className="mt-1">
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
      {mobileApps.map((card) => (
        <AppItem key={card.title} card={card} />
      ))}
    </GridCard>
  );
}

export default MobileAppsList;
