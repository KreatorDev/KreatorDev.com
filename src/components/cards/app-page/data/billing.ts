import AppstoreIcon from "@/assets/icons/appstore";
import CreditCardIcon from "@/assets/icons/credit-card";
import GooglePlayIcon from "@/assets/icons/google-play";
import { stripePortal, supportEmail } from "@/constants/strings";

export const billingMailto = (title: string) =>
  "mailto:" +
  supportEmail +
  "?subject=" +
  encodeURIComponent(`${title} billing question`);

const billingStores = (title: string) => [
  {
    id: "app-store",
    name: "App Store",
    subtitle: "Subscribed on iPhone or iPad",
    icon: AppstoreIcon,
    intro:
      "Purchases made in the iOS app are billed by Apple to your Apple Account. Only Apple can change, cancel or refund them.",
    steps: [
      "Open the Settings app",
      "Tap your name at the top",
      "Tap Subscriptions",
      `Tap ${title}`,
      "Change your plan, or tap Cancel Subscription",
    ],
    actions: [
      {
        label: "Open Subscriptions",
        href: "https://apps.apple.com/account/subscriptions",
      },
      {
        label: "Apple Support guide",
        href: "https://support.apple.com/en-us/118428",
      },
    ],
    refund: {
      text: "Apple handles every App Store refund. Request one from Report a Problem, and Apple usually replies within 48 hours.",
      label: "Request a refund from Apple",
      href: "https://reportaproblem.apple.com",
    },
  },
  {
    id: "google-play",
    name: "Google Play",
    subtitle: "Subscribed on Android",
    icon: GooglePlayIcon,
    intro:
      "Purchases made in the Android app are billed by Google to your Google account and managed in Google Play.",
    steps: [
      "Open the Google Play Store app",
      "Tap your profile icon, then Payments & subscriptions",
      "Tap Subscriptions",
      `Tap ${title}`,
      "Change your plan, or tap Cancel subscription",
    ],
    actions: [
      {
        label: "Open Google Play Subscriptions",
        href: "https://play.google.com/store/account/subscriptions",
      },
      {
        label: "Google Play Help",
        href: "https://support.google.com/googleplay/answer/7018481",
      },
    ],
    refund: {
      text: "Within 48 hours of purchase, request a refund from your Google Play order history. After 48 hours, email us and we will review it.",
      label: "Google Play refund policy",
      href: "https://support.google.com/googleplay/answer/2479637",
    },
  },
  {
    id: "web",
    name: "Web (Stripe)",
    subtitle: "Subscribed on our website",
    icon: CreditCardIcon,
    intro:
      "Purchases made on the web are processed securely by Stripe. Sign in to the billing portal with the email address you used at checkout.",
    steps: [
      "Open the billing portal",
      "Enter the email address you used at checkout",
      "Open the sign-in link Stripe emails you",
      "Update your card, switch plans, download invoices or cancel",
    ],
    actions: [
      stripePortal
        ? { label: "Open billing portal", href: stripePortal }
        : { label: "Email billing support", href: billingMailto(title) },
      {
        label: "Stripe privacy policy",
        href: "https://stripe.com/privacy",
      },
    ],
    refund: {
      text: "Email us with the address you used at checkout and your invoice number. We review every web refund request ourselves.",
      label: "Request a web refund",
      href: billingMailto(title),
    },
  },
];

export default billingStores;
