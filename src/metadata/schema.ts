import {
  address,
  appStoreUrl,
  brand,
  description,
  duns,
  email,
  founder,
  foundingYear,
  googlePlayUrl,
  legalName,
  supportEmail,
  url,
} from "@/constants/strings";
import linksMetadata from "./links";

const organizationId = url + "/#organization";
const founderId = url + founder.path + "#person";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: brand,
  legalName,
  url,
  logo: url + "/android-chrome-512x512.png",
  description,
  email,
  foundingDate: String(foundingYear),
  duns,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer support", email: supportEmail },
    { "@type": "ContactPoint", contactType: "business", email },
  ],
  founder: { "@id": founderId },
  sameAs: [appStoreUrl, googlePlayUrl],
};

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: url + founder.path,
  mainEntity: {
    "@type": "Person",
    "@id": founderId,
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { "@id": organizationId },
    url: url + founder.path,
    sameAs: Object.values(linksMetadata),
  },
};
