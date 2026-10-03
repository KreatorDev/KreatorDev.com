const brand = "KreatorDev";
const legalName = "KREATORDEV LLC";
const username = "kreatordev";
const linkedinUsername = "ayoub-kremcht";
const host = "kreatordev.com";
const url = "https://" + host;
const email = "hello@" + host;
const supportEmail = "support@" + host;
const og = `${url}/og.png`;
const tagline = "Simple, honest apps for everyday life";
const description = `${legalName} is an independent software company that designs, builds and publishes its own mobile apps for iOS and Android.`;
const foundingYear = 2024;
const entityType = "Wyoming limited liability company";
const duns = "119194403";
const appStoreUrl =
  "https://apps.apple.com/us/developer/kreatordev-llc/id1634077382";
const googlePlayUrl =
  "https://play.google.com/store/apps/dev?id=5086245986558832314";

const address = {
  street: "444 Alaska Ave Ste AMI460",
  city: "Torrance",
  region: "CA",
  postalCode: "90503",
  country: "US",
};

const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}, United States`;

const founder = {
  name: "Ayoub Kremcht",
  firstName: "Ayoub",
  role: "Founder & CEO",
  path: "/company/ayoub-kremcht",
  location: "Morocco",
  since: 2020,
  appsPublished: 40,
  quote:
    "I'm focused on developing quality applications that effectively solve problems, rather than just providing solutions.",
};

export {
  address,
  appStoreUrl,
  brand,
  description,
  duns,
  email,
  entityType,
  founder,
  foundingYear,
  fullAddress,
  googlePlayUrl,
  host,
  legalName,
  linkedinUsername,
  og,
  supportEmail,
  tagline,
  url,
  username,
};
