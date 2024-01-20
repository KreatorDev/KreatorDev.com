"use client";

import ChevronLeftIcon from "@/assets/icons/chevron-left";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-toggle";
import AppPageType from "./data/page";

export default function Terms({ page }: { page: AppPageType }) {
  const app = page.app;
  if (!app) return;

  const now = Date.now();
  const legalStyle = "text-sm opacity-30 hover:opacity-100 hover:underline p-2";
  const normalStyle = "text-sm text-black dark:text-white opacity-60";
  const boldStyle = normalStyle + " !text-lg !font-bold !opacity-75 pt-3";
  return (
    <div className={cardStyle + "!p-3"}>
      <div className="w-full flex flex-row items-center">
        <Link
          href={app.path}
          className="flex flex-row justify-start items-center gap-2 opacity-30 hover:opacity-100 hover:underline px-2"
        >
          <div className="hover:animate-scale">
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <p className="text-sm">{app.title.toUpperCase()}</p>
        </Link>
        <div className="flex-grow" />
        <ThemeSwitcher
          className="hover:animate-none !w-[80px]"
          thumbClassName="h-7 w-7"
        />
      </div>
      <div className="h-1" />
      <div className="flex flex-col px-3 gap-2.5">
        <p className={boldStyle + " !text-2xl pb-1"}>Terms of Use</p>

        <p className={normalStyle}>
          By downloading or using the app, these terms will automatically apply
          to you. Please read them carefully before using the app. You are not
          allowed to copy or modify the app, any part of the app, or our
          trademarks in any way.
        </p>

        <p className={normalStyle}>
          {app.title} is committed to ensuring that the app is as useful and
          efficient as possible. We reserve the right to make changes to the app
          or charge for its services at any time and for any reason. We will
          never charge you for the app or its services without making it clear
          what you are paying for.
        </p>

        <p className={normalStyle}>
          {app.title} app stores and processes personal data that you have
          provided to us to provide our Service. It’s your responsibility to
          keep your phone and access to the app secure. Do not jailbreak or root
          your phone, as it may compromise your phone’s security features and
          the app’s functionality.
        </p>

        <p className={normalStyle}>
          The app does use third-party services that declare their Terms of Use.
        </p>

        <p className={normalStyle}>
          <b>
            Link to Terms of Use of third-party service providers used by the
            app
          </b>
        </p>
        <ul className={normalStyle + " list-disc list-inside"}>
          <li>
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              className="hover:opacity-50"
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/about/privacy/update/printable"
              target="_blank"
              className="hover:opacity-50"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              className="hover:opacity-50"
            >
              RevenueCat
            </a>
          </li>
        </ul>

        <p className={normalStyle}>
          You should be aware that there are certain things that {app.title}{" "}
          will not take responsibility for. Certain functions of the app will
          require an active internet connection. The connection can be Wi-Fi or
          provided by your mobile network provider, but {app.title} cannot take
          responsibility for the app not working at full functionality if you
          don’t have access to Wi-Fi, and you don’t have any of your data
          allowance left.
        </p>

        <p className={normalStyle}>
          If you’re using the app outside of an area with Wi-Fi, you should
          remember that the terms of the agreement with your mobile network
          provider will still apply. As a result, you may be charged by your
          mobile provider for the cost of data for the duration of the
          connection while accessing the app, or other third-party charges. In
          using the app, you’re accepting responsibility for any such charges,
          including roaming data charges if you use the app outside of your home
          territory (i.e. region or country) without turning off data roaming.
          If you are not the bill payer for the device on which you’re using the
          app, please be aware that we assume that you have received permission
          from the bill payer for using the app.
        </p>

        <p className={normalStyle}>
          Along the same lines, {app.title} cannot always take responsibility
          for the way you use the app i.e. You need to make sure that your
          device stays charged – if it runs out of battery and you can’t turn it
          on to avail the Service, {app.title} cannot accept responsibility.
        </p>

        <p className={normalStyle}>
          With respect to {app.title}’s responsibility for your use of the app,
          when you’re using the app, it’s important to bear in mind that
          although we endeavor to ensure that it is updated and correct at all
          times, we do rely on third parties to provide information to us so
          that we can make it available to you. {app.title} accepts no liability
          for any loss, direct or indirect, you experience as a result of
          relying wholly on this functionality of the app.
        </p>

        <p className={normalStyle}>
          At some point, we may wish to update the app. The app is currently
          available on Android & iOS – the requirements for both systems (and
          for any additional systems we decide to extend the availability of the
          app to) may change, and you’ll need to download the updates if you
          want to keep using the app. {app.title} does not promise that it will
          always update the app so that it is relevant to you and/or works with
          the Android & iOS version that you have installed on your device.
          However, you promise to always accept updates to the application when
          offered to you. We may also wish to stop providing the app and may
          terminate use of it at any time without giving notice of termination
          to you. Unless we tell you otherwise, upon any termination, (a) the
          rights and licenses granted to you in these terms will end; (b) you
          must stop using the app and (if needed) delete it from your device.
        </p>

        <p className={boldStyle}>Billing</p>
        <p className={normalStyle}>
          <b>
            iOS In-App Purchase Terms & {app.title} subscription details for
            iOS:
          </b>
        </p>
        <ul className={normalStyle + " list-disc list-inside"}>
          <li>
            Payment will be charged to iTunes Account at confirmation of
            purchase
          </li>
          <li>
            Subscription automatically renews unless auto-renew is turned off at
            least 24-hours before the end of the current period
          </li>
          <li>
            Account will be charged for renewal within 24-hours prior to the end
            of the current period, and identify the cost of the renewal
          </li>
          <li>
            Subscriptions may be managed by the user and auto-renewal may be
            turned off by going to the user’s Account Settings after purchase
          </li>
          <li>
            Any unused portion of a free trial period, if offered, will be
            forfeited when the user purchases a subscription, where applicable
          </li>
        </ul>

        <p className={normalStyle}>
          <b>Cancelling {app.title} Subscription</b>
        </p>
        <p className={normalStyle}>
          <b>Subscribed through Apple:</b>
        </p>
        <ol className={normalStyle + " list-decimal list-inside"}>
          <li>From your device’s home page, open iOS Settings</li>
          <li>
            Tap ”Apple ID, iCloud, iTunes & App Store,” tap your Apple ID and
            ”View Apple ID” (if prompted, enter your password)
          </li>
          <li>Tap ”Subscriptions”</li>
          <li>
            {app.title} and turn off your monthly or yearly renewal option
          </li>
        </ol>

        <p className={normalStyle}>
          <b>Subscribed through Google:</b>
        </p>
        <ol className={normalStyle + " list-decimal list-inside"}>
          <li>Go to play.google.com</li>
          <li>In the left menu, click ”My Subscriptions”</li>
          <li>Find {app.title}, click ”Cancel Subscription”</li>
        </ol>

        <p className={boldStyle}>Changes to This Terms of Use</p>
        <p className={normalStyle}>
          We may update our Terms of Use from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Terms of Use on this
          page.
        </p>

        <p className={boldStyle}>
          These Terms of Use are effective as of 2024-01-20
        </p>

        <p className={boldStyle}>Contact Us</p>
        <span className={normalStyle}>
          If you have any questions or suggestions about our Terms of Use, do
          not hesitate to{" "}
          <a className={"!underline !font-semibold"} href="/contact">
            contact us
          </a>
          .
        </span>
      </div>
      <div className="h-12" />
      <div className="flex flex-row w-full justify-end items-center gap-4 px-2">
        <Link href={app.path} className={legalStyle}>
          {app.title} © {new Date(now).getFullYear()}
        </Link>
      </div>
    </div>
  );
}
