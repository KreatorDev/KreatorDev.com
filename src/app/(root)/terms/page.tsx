import LegalPage from "@/components/legal/legal-page";
import { host, legalName, supportEmail } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";
import Link from "next/link";

export const metadata = pageMetadata(
  "Terms of Use",
  `Terms that apply to ${host} and the apps published by ${legalName}.`,
  "/terms"
);

export default function TermsEntry() {
  return (
    <LegalPage
      title="Terms of Use"
      lead={`These terms apply to ${host} and to the apps published by ${legalName}.`}
      effective="October 3, 2026"
    >
      <h2>Agreement</h2>
      <p>
        By using this website or any of our apps, you agree to these terms. Each
        app may also have its own terms of use, linked from its page on our{" "}
        <Link href="/apps">Apps</Link> page, which apply in addition to these
        terms.
      </p>

      <h2>Our apps</h2>
      <p>
        Our apps are distributed through the Apple App Store and Google Play.
        Downloads and purchases are also subject to the terms of the store you
        use.
      </p>

      <h2>Subscriptions and billing</h2>
      <ul>
        <li>
          Purchases and subscriptions are billed by Apple or Google to the
          account you use in that store.
        </li>
        <li>
          Subscriptions renew automatically unless you turn off auto-renew at
          least 24 hours before the end of the current period.
        </li>
        <li>
          You can manage or cancel a subscription at any time in your App Store
          or Google Play account settings. Deleting an app does not cancel its
          subscription.
        </li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Because payments are processed by Apple and Google, refunds are handled
        by them under their policies. You can request one from Apple at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">
          reportaproblem.apple.com
        </a>{" "}
        or from Google through{" "}
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener"
        >
          Google Play refunds
        </a>
        . If something is wrong with a purchase, contact us at{" "}
        <a href={"mailto:" + supportEmail}>{supportEmail}</a> and we will help.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse our website or apps, interfere with their normal
        operation, or try to access them in ways other than the interfaces we
        provide.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The KreatorDev name, logo, app names, designs and content are owned by{" "}
        {legalName}. You may not copy, modify or redistribute them without our
        permission.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Our website and apps are provided &quot;as is&quot;. To the extent
        permitted by law, {legalName} is not liable for indirect or
        consequential losses arising from their use.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The effective date above
        shows when they last changed.
      </p>
    </LegalPage>
  );
}
