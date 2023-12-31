import Contact from "@/components/contact/contact";
import contactMetadata from "@/metadata/contact";
import ReCaptchaWrapper from "@/shared/components/other/recaptcha-wrapper";

export const metadata = contactMetadata;

export default function ContactEntry() {
  return (
    <ReCaptchaWrapper>
      <Contact />
    </ReCaptchaWrapper>
  );
}
