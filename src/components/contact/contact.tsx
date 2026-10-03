import { email, fullAddress, legalName, supportEmail } from "@/constants/strings";
import ReCaptchaWrapper from "@/shared/components/other/recaptcha-wrapper";
import PageTitle from "@/shared/components/titles/page-title";
import { textLink } from "@/shared/styles/button";
import ContactForm from "./contact-form";

const channels = [
  { label: "Business & partnerships", value: email, href: "mailto:" + email },
  { label: "App support & privacy", value: supportEmail, href: "mailto:" + supportEmail },
  { label: "Mailing address", value: `${legalName}, ${fullAddress}` },
];

export default function Contact() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div className="flex flex-col gap-10">
        <PageTitle
          eyebrow="Contact"
          title="Talk to us."
          lead="Questions about one of our apps, partnerships or press? Send us a message and we will get back to you as soon as we can."
        />
        <dl className="flex flex-col">
          {channels.map((channel) => (
            <div
              key={channel.label}
              className="flex flex-col gap-1 border-t border-neutral-500/15 py-4"
            >
              <dt className="text-xs uppercase tracking-[0.14em] text-neutral-500">
                {channel.label}
              </dt>
              <dd className="text-[15px] font-medium leading-snug">
                {channel.href ? (
                  <a href={channel.href} className={textLink}>
                    {channel.value}
                  </a>
                ) : (
                  channel.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:mt-8">
        <ReCaptchaWrapper>
          <ContactForm />
        </ReCaptchaWrapper>
      </div>
    </div>
  );
}
