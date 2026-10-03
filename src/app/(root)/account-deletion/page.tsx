import { mobileApps } from "@/components/cards/apps/data/mobile-apps";
import LegalPage from "@/components/legal/legal-page";
import { legalName, supportEmail } from "@/constants/strings";
import { pageMetadata } from "@/metadata/builder";

export const metadata = pageMetadata(
  "Account Deletion",
  `How to delete your account and data in apps published by ${legalName}.`,
  "/account-deletion"
);

const mailto =
  "mailto:" +
  supportEmail +
  "?subject=" +
  encodeURIComponent("Account deletion request");

export default function AccountDeletionEntry() {
  return (
    <LegalPage
      title="Account Deletion"
      lead={`How to delete your account and associated data in any app published by ${legalName}.`}
      effective="October 3, 2026"
    >
      <h2>Apps covered</h2>
      <p>{mobileApps.map((app) => app.title).join(", ")}.</p>

      <h2>Delete in the app</h2>
      <p>
        Where an app offers it, open the app&apos;s settings and choose the
        option to delete your account. Your account and its data are then
        removed from our systems.
      </p>

      <h2>Request by email</h2>
      <ol>
        <li>
          Email <a href={mailto}>{supportEmail}</a> from the address linked to
          your account, or include that address in your message.
        </li>
        <li>Tell us which app the account belongs to.</li>
        <li>
          We confirm the request and delete your account and associated data
          within 30 days.
        </li>
      </ol>

      <h2>What is deleted</h2>
      <p>
        Your account profile and the content you created in the app are
        permanently deleted. We may keep limited records where the law requires
        it, for example for fraud prevention or accounting.
      </p>

      <h2>Subscriptions</h2>
      <p>
        Deleting your account does not cancel a subscription. Cancel it first in
        your App Store or Google Play account settings, which keep their own
        purchase records.
      </p>
    </LegalPage>
  );
}
