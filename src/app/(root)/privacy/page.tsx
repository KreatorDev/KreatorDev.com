import LegalPage from "@/components/legal/legal-page";
import { host, legalName, supportEmail } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";
import Link from "next/link";

export const metadata = pageMetadata(
  "Privacy Policy",
  `How ${legalName} collects, uses and protects personal information on ${host}.`,
  "/privacy"
);

export default function PrivacyEntry() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead={`This policy explains how ${legalName} handles personal information when you visit ${host} or contact us.`}
      effective="October 3, 2026"
    >
      <h2>Who we are</h2>
      <p>
        {legalName} (&quot;we&quot;, &quot;us&quot;) operates {host} and
        publishes the mobile apps listed on our <Link href="/apps">Apps</Link>{" "}
        page. Each app has its own privacy policy, linked from its page, which
        describes the data that app processes. This policy covers this website.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <b>Messages you send us.</b> When you use our contact form we receive
          your name, email address and message.
        </li>
        <li>
          <b>Spam protection.</b> Our contact form uses Google reCAPTCHA, which
          collects device and browser information to detect abuse. Its use is
          subject to the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener">
            Terms of Service
          </a>
          .
        </li>
        <li>
          <b>Technical data.</b> Our hosting provider records standard server
          logs, such as IP address, browser type, pages requested and time of
          access, to keep the website secure and running.
        </li>
        <li>
          <b>Preferences.</b> Your light or dark theme choice is stored in your
          browser. This website does not use advertising or tracking cookies.
        </li>
      </ul>

      <h2>How we use information</h2>
      <p>
        We use this information to reply to your messages, provide support for
        our apps, keep our website secure, and meet our legal obligations.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share it only with service
        providers that help us run this website, such as our hosting, email
        delivery and spam-protection providers, and only as needed for them to
        provide their services, or when required by law.
      </p>

      <h2>Retention</h2>
      <p>
        We keep messages for as long as needed to handle your request and
        maintain our business records, then delete them.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we
        hold about you by emailing{" "}
        <a href={"mailto:" + supportEmail}>{supportEmail}</a>. To delete an
        account in one of our apps, see{" "}
        <Link href="/account-deletion">Account Deletion</Link>.
      </p>

      <h2>Children</h2>
      <p>
        This website is not directed to children under 13, and we do not
        knowingly collect their personal information through it.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The effective date above
        shows when it last changed.
      </p>
    </LegalPage>
  );
}
