export type PastWorkType = {
  title: string;
  description: string;
  platforms: string;
  image: string;
  hasBorder?: boolean;
  link?: string;
};

const appStore = (id: string) => "https://apps.apple.com/app/id" + id;

export const pastWork: PastWorkType[] = [
  {
    title: "Dreamshow",
    image: "/works/dreamshow/logo.png",
    hasBorder: true,
    description:
      "AI entertainment platform to text, talk or video chat with AI characters.",
    platforms: "iOS & Web",
    link: "https://dreamshow.ai",
  },
  {
    title: "Finwise",
    image: "/works/finwise/logo.jpg",
    hasBorder: true,
    description:
      "AI financial assistant app and an SDK for financial institutions.",
    platforms: "iOS & Web",
    link: "https://finwiseai.web.app",
  },
  {
    title: "Friend Renting",
    image: "/works/friendrenting/logo.png",
    hasBorder: true,
    description:
      "Marketplace to book experienced people for advice, project help or a friendly conversation.",
    platforms: "Web",
    link: "https://friendrenting.com",
  },
  {
    title: "zima",
    image: "/works/zima/logo.png",
    hasBorder: true,
    description: "AI health coach with personalized tips, reminders and advice.",
    platforms: "iOS & Web",
    link: appStore("6477898586"),
  },
  {
    title: "WDYT",
    image: "/works/wdyt/logo.png",
    description: "Anonymous Q&A to get honest feedback from your followers.",
    platforms: "iOS & Web",
    link: appStore("6449153741"),
  },
  {
    title: "OS1",
    image: "/works/os1/logo.png",
    hasBorder: true,
    description: "Landing page explaining an AI personal operating system.",
    platforms: "Web",
    link: "https://www.os1ai.com",
  },
  {
    title: "nosugar",
    image: "/works/nosugar/logo.png",
    description:
      "Keto diet tracker with AI-powered menus and food barcode scanning.",
    platforms: "iOS",
    link: appStore("6477765406"),
  },
  {
    title: "Voice chat AI",
    image: "/works/voice-chat/logo.png",
    description: "AI characters that reply with realistic voice messages.",
    platforms: "iOS",
    link: appStore("6478330374"),
  },
  {
    title: "Snapsaga",
    image: "/works/snapsaga/logo.png",
    description: "AI chat stories to play or create characters with their own persona.",
    platforms: "iOS",
    link: appStore("6449471782"),
  },
  {
    title: "Ask Nova",
    image: "/works/ask-nova/logo.png",
    description: "Voice AI assistant built to give quick answers.",
    platforms: "iOS",
    link: appStore("1672860414"),
  },
  {
    title: "NPC",
    image: "/works/npc/logo.png",
    description:
      "AI chat games that challenge strategic thinking and negotiation skills.",
    platforms: "iOS",
    link: appStore("6446919923"),
  },
  {
    title: "Creator Performance Marketing",
    image: "/works/cpm/logo.jpg",
    hasBorder: true,
    description: "Deals app connecting TikTok creators with brands.",
    platforms: "iOS",
    link: appStore("1619726760"),
  },
  {
    title: "Songbird",
    image: "/works/songbird/logo.png",
    description: "Music rooms to listen, discover and share music together.",
    platforms: "iOS",
    link: appStore("1572218061"),
  },
  {
    title: "UniTrade",
    image: "/works/unitrade/logo.png",
    hasBorder: true,
    description:
      "College marketplace to buy and sell items and offer services to other students.",
    platforms: "iOS",
    link: appStore("1587195199"),
  },
  {
    title: "Sebmita",
    image: "/works/sebmita/logo.png",
    hasBorder: true,
    description:
      "Language learning app to practice speaking, reading, listening and writing African languages.",
    platforms: "Android",
    link: "https://play.google.com/store/apps/details?id=com.sebmita.sebmita",
  },
  {
    title: "Zoom Tap Animation",
    image: "/works/pub-dev/logo.png",
    hasBorder: true,
    description: "Open-source Flutter package for zoom-in and zoom-out tap effects.",
    platforms: "Flutter package",
    link: "https://pub.dev/packages/zoom_tap_animation",
  },
  {
    title: "Daedalus",
    image: "/works/daedalus/logo.png",
    hasBorder: true,
    description: "Investment app to track stocks, crypto and NFT portfolios.",
    platforms: "Android",
  },
  {
    title: "Daedalus Wallet",
    image: "/works/daedalus-wallet/logo.png",
    hasBorder: true,
    description: "Crypto wallet to send, receive and manage digital assets.",
    platforms: "iOS",
  },
  {
    title: "Nonga",
    image: "/works/nonga/logo.png",
    description:
      "Dating app to meet people who share similar cultural values.",
    platforms: "iOS & Android",
  },
  {
    title: "DormLive",
    image: "/works/dormlive/logo.png",
    description:
      "College app to meet new people, host audio rooms and chat with friends.",
    platforms: "iOS",
  },
  {
    title: "Kibbit",
    image: "/works/kibbit/logo.png",
    hasBorder: true,
    description:
      "College social app to get to know classmates through anonymous questions.",
    platforms: "iOS",
  },
  {
    title: "Vocado",
    image: "/works/vocado/logo.png",
    hasBorder: true,
    description: "Voice notes app to record, transcribe and share notes.",
    platforms: "iOS",
  },
  {
    title: "Voz",
    image: "/works/voz/logo.png",
    hasBorder: true,
    description: "Voice messaging app for quick, fun chats with friends.",
    platforms: "Android",
  },
];
