"use client";

import ChevronLeftIcon from "@/assets/icons/chevron-left";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-toggle";
import AppPageType from "./data/page";

export default function Privacy({ page }: { page: AppPageType }) {
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
        <p className={boldStyle + " !text-2xl pb-1"}>Privacy Policy</p>
        <p className={normalStyle}>
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p className={normalStyle}>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service.
        </p>
        <p className={normalStyle}>
          We will not use or share your information with anyone except as
          described in this Privacy Policy.
        </p>
        <p className={normalStyle}>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at {app.title} unless
          otherwise defined in this Privacy Policy.
        </p>
        <p className={boldStyle}>Information Collection and Use</p>
        <p className={normalStyle}>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to Email, Name, Phone number, Address. The
          information that we request will be retained by us and used as
          described in this privacy policy.
        </p>
        <p className={normalStyle}>
          The app does use third party services that may collect information
          used to identify you.
        </p>
        {page.privacyOptions?.thirdParty && (
          <p className={normalStyle}>
            Link to privacy policy of third party service providers used by the
            app
          </p>
        )}
        {page.privacyOptions?.thirdParty && (
          <p className={normalStyle}>
            <ul className="list-disc list-inside">
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
                  href="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  className="hover:opacity-50"
                >
                  Google Analytics
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
          </p>
        )}
        <p className={boldStyle}>Log Data</p>
        <p className={normalStyle}>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>
        <p className={boldStyle}>Cookies</p>
        <p className={normalStyle}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device internal
          memory.
        </p>
        <p className={normalStyle}>
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </p>
        <p className={boldStyle}>Service Providers</p>
        <p className={normalStyle}>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <p className={normalStyle}>
          <ul className="list-disc list-inside">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
        </p>
        <p className={normalStyle}>
          We want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <p className={boldStyle}>Security</p>
        <p className={normalStyle}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
        <p className={boldStyle}>Links to Other Sites</p>
        <p className={normalStyle}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <p className={boldStyle}>Children’s Privacy</p>
        <p className={normalStyle}>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do the necessary actions.
        </p>
        <p className={boldStyle}>Changes to This Privacy Policy</p>
        <p className={normalStyle}>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p className={normalStyle}>
          This policy is effective as of {new Date(now).toLocaleString()}.
        </p>
        <p className={boldStyle}>Contact Us</p>
        <span className={normalStyle}>
          If you have any questions or suggestions about our Privacy Policy, do
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
