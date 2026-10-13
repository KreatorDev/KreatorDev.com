import { supportEmail } from "@/constants/strings";
import { primaryButton, secondaryButton } from "@/shared/styles/button";
import Link from "next/link";
import AppSubpage from "./app-subpage";
import billingStores, { billingMailto } from "./data/billing";
import AppPageType from "./data/page";

const normalStyle = "text-sm text-black dark:text-white opacity-60";
const boldStyle = normalStyle + " !text-lg !font-bold !opacity-75 pt-3";
const linkStyle = "!underline !font-semibold";
const listStyle = normalStyle + " list-disc list-inside flex flex-col gap-1.5";

const linkProps = (href: string) =>
  href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

export default function Billing({ page }: { page: AppPageType }) {
  const app = page.app;
  if (!app) return;

  const stores = billingStores(app.title);
  const mailto = billingMailto(app.title);
  return (
    <AppSubpage app={app}>
      <div className="flex w-full flex-col px-3 gap-2.5">
        <p className={boldStyle + " !text-2xl pb-1"}>Billing</p>
        <p className={normalStyle}>
          Manage, cancel, restore or get a refund for your {app.title}{" "}
          subscription. Pick where you subscribed below. Payments are handled by
          Apple, Google or Stripe, and we never see your full card details.
        </p>
        <nav className="flex flex-wrap gap-2 pt-2" aria-label="Billing options">
          {stores.map((store) => (
            <a
              key={store.id}
              href={"#" + store.id}
              className={secondaryButton + "!px-4 !py-2 !text-xs"}
            >
              {store.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-4">
          {stores.map((store) => (
            <section
              key={store.id}
              id={store.id}
              className="scroll-mt-6 flex flex-col gap-4 rounded-2xl border border-neutral-500/15 p-5"
            >
              <div className="flex flex-row items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-500/10 p-2">
                  <store.icon className="h-full w-full" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold opacity-90">{store.name}</h2>
                  <p className="text-xs text-neutral-500">{store.subtitle}</p>
                </div>
              </div>
              <p className={normalStyle}>{store.intro}</p>
              <ol className="flex flex-col gap-2">
                {store.steps.map((step, index) => (
                  <li key={step} className="flex flex-row items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-500/10 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className={normalStyle}>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-2 pt-1">
                {store.actions.map((action, index) => (
                  <a
                    key={action.label}
                    {...linkProps(action.href)}
                    className={index === 0 ? primaryButton : secondaryButton}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
              <p
                className={normalStyle + " border-t border-neutral-500/15 pt-4"}
              >
                <b>Refunds:</b> {store.refund.text}{" "}
                <a {...linkProps(store.refund.href)} className={linkStyle}>
                  {store.refund.label}
                </a>
              </p>
            </section>
          ))}
        </div>

        <p className={boldStyle}>Good to Know</p>
        <ul className={listStyle}>
          <li>
            Subscriptions renew automatically until cancelled. Cancel at least
            24 hours before the current period ends to avoid the next charge.
          </li>
          <li>
            After you cancel, you keep premium access until the end of the
            period you already paid for.
          </li>
          <li>
            On a free trial, cancel at least 24 hours before it ends and you
            will not be charged.
          </li>
          <li>
            A subscription can only be managed where it was bought. We cannot
            cancel or refund App Store or Google Play purchases for you.
          </li>
          <li>
            Uninstalling the app or{" "}
            <Link className={linkStyle} href="/account-deletion">
              deleting your account
            </Link>{" "}
            does not cancel a subscription.
          </li>
        </ul>

        <p className={boldStyle}>Restore Purchases</p>
        <p className={normalStyle}>
          New phone, or reinstalled {app.title}? Your subscription is not lost:
        </p>
        <ol
          className={
            normalStyle + " list-decimal list-inside flex flex-col gap-1.5"
          }
        >
          <li>
            Sign in to the same Apple Account or Google account you subscribed
            with
          </li>
          <li>Install {app.title} and sign in with your previous account</li>
          <li>Open the upgrade screen and tap Restore</li>
        </ol>
        <p className={normalStyle}>
          Subscribed on the web? Sign in to {app.title} with the same email
          address you used at checkout.
        </p>

        <p className={boldStyle}>Billing Support</p>
        <p className={normalStyle}>
          Charged twice, cannot find a purchase, or a refund was declined? Email{" "}
          <a className={linkStyle} href={mailto}>
            {supportEmail}
          </a>{" "}
          and include:
        </p>
        <ul className={listStyle}>
          <li>The email address linked to your {app.title} account</li>
          <li>Where you subscribed: App Store, Google Play or the web</li>
          <li>
            Your order or invoice number (Apple order IDs start with M, Google
            order numbers start with GPA.)
          </li>
        </ul>
        <div className="pt-2">
          <a href={mailto} className={primaryButton}>
            Email billing support
          </a>
        </div>
        <p className={normalStyle + " pt-3"}>
          Full subscription terms are in our{" "}
          <Link className={linkStyle} href={app.path + "/terms"}>
            Terms of Use
          </Link>
          .
        </p>
      </div>
    </AppSubpage>
  );
}
