import AppItemType from "./app";

export const mobileApps: AppItemType[] = [
  {
    title: "HeightPal",
    description:
      "Predict your adult height free, track your family's growth on a warm chart, and build honest daily habits — no bait, no paywall tricks, cancel anytime.",
    category: "Health & Fitness",
    image: "/works/heightpal/logo.png",
    appstore: "https://apps.apple.com/app/id6792290249",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.heightpal",
    path: "/heightpal",
    hasBorder: true,
  },
  {
    title: "Siya9a Maroc",
    description: "Apprenez le code de la route marocain avec Siya9a Maroc.",
    category: "Education",
    image: "/works/siya9a/logo.png",
    appstore: "https://apps.apple.com/app/id6790593654",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.siya9a",
    path: "/siya9a",
    hasBorder: true,
    under_dev: true,
  },
  {
    title: "75 Soft Challenge Day Tracker",
    description:
      "Track your 75 Soft challenge free — water, workout, diet & reading in one beautiful daily checklist, with a forgiving streak and friends who can actually see your progress.",
    category: "Health & Fitness",
    image: "/works/soft75challenge/logo.png",
    appstore: "https://apps.apple.com/app/id6789895923",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.soft75challenge",
    path: "/soft75challenge",
    hasBorder: true,
  },
  {
    title: "Weather Outfit - What to Wear",
    description:
      "Know what to wear in seconds. Personalized outfit recommendations for the weather, calibrated to how you actually feel hot or cold. No ads.",
    category: "Weather",
    image: "/works/weatheroutfit/logo.png",
    appstore: "https://apps.apple.com/app/id6769089874",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.weatheroutfit",
    path: "/weatheroutfit",
    hasBorder: true,
  },
  {
    title: "RoomTap - AI Home Room Design",
    description:
      "Edit one thing at a time. Tap to keep your floor, change your paint, swap your sofa — without AI moving your windows or deleting your walls.",
    category: "Graphics & Design",
    image: "/works/decorai/logo.png",
    appstore: "https://apps.apple.com/app/id6767575202",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.decorai",
    path: "/decorai",
    hasBorder: true,
  },
  {
    title: "Fitly: Closet Organizer & Stylist",
    description:
      "The closet planner that actually lets you use it. Plan outfits, build your digital wardrobe, get smart styling — ad-free, no weekly traps.",
    category: "Lifestyle",
    image: "/works/fitly/logo.png",
    appstore: "https://apps.apple.com/app/id6765988647",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.fitly",
    path: "/fitly",
    hasBorder: true,
  },
  {
    title: "Pantry Inventory Tracker",
    description:
      "Track your pantry, fridge, and freezer. Scan barcodes, get expiry alerts, and share inventory with your household - across any phone or account.",
    category: "Food & Drink",
    image: "/works/pantryinventorytracker/logo.png",
    appstore: "https://apps.apple.com/app/id6764106691",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.pantryinventorytracker",
    path: "/pantryinventorytracker",
    hasBorder: true,
  },
  {
    title: "Debt Payoff Pro",
    description:
      "Pay off debt faster with a simple, private tracker. Plan with snowball or avalanche, track progress, and stay motivated.",
    category: "Finance",
    image: "/works/debtpayoffpro/logo.png",
    appstore: "https://apps.apple.com/app/id6762552664",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.debtpayoff",
    path: "/debtpayoffpro",
    hasBorder: true,
  },
  {
    title: "GymTracker",
    description:
      "A gym workout app to track your workouts, offering features like workout plans, progress tracking, and more.",
    category: "Health & Fitness",
    icon: "/works/gymtracker/logo.ico",
    image: "/works/gymtracker/logo.jpg",
    appstore: "https://apps.apple.com/app/id6476830400",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.gymtracker",
    path: "/gymtracker",
    keywords: [
      "gym",
      "workout",
      "fitness",
      "bodybuilding",
      "exercise",
      "training",
      "tracker",
      "weight",
      "lifting",
      "muscle",
      "strength",
      "gymtracker",
      "gym tracker",
      "gym workout",
    ],
    hasBorder: true,
  },
  {
    title: "Radio Mobile",
    description:
      "A radio app to listen or add any radio stations, offering features like search, favorites, sleep timer, song recognition.",
    category: "Music",
    icon: "/works/radioclub/logo.ico",
    image: "/works/radioclub/logo.jpg",
    appstore: "https://apps.apple.com/app/id1634077380",
    playstore: "https://play.google.com/store/apps/details?id=vip.radioclub",
    path: "/radio",
    keywords: [
      "radio",
      "fm radio",
      "online radio",
      "live radio",
      "radio stations",
      "music",
      "sleep timer",
      "song recognition",
    ],
    hasBorder: true,
  },
  {
    title: "Simple Workout",
    description:
      "A workout app to do exercise at home, offering quick and easy workouts, with daily reminder.",
    category: "Health & Fitness",
    image: "/works/simple-workout/logo.png",
    appstore: "https://apps.apple.com/app/id1668371203",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.bodyexercises",
    path: "/simple-workout",
    hasBorder: true,
  },
  {
    title: "Children Stories",
    description:
      "A stories app that provides a collection of children short stories, with beautiful illustrations.",
    category: "Entertainment",
    image: "/works/arabic-stories/logo.jpg",
    appstore: "https://apps.apple.com/app/id1665629088",
    playstore:
      "https://play.google.com/store/apps/details?id=com.kreatordev.arabicstories",
    path: "/arabic-stories",
  },
];

export const liveApps = mobileApps.filter((app) => !app.under_dev);

export const underDevApps = mobileApps.filter((app) => app.under_dev);
