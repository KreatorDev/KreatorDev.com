"use client";

import Contact from "@/components/contact/contact";
import ReCaptchaWrapper from "@/shared/components/other/recaptcha-wrapper";

export default function ContactEntry() {
  return (
    <ReCaptchaWrapper>
      <Contact />
    </ReCaptchaWrapper>
  );
}
