import AppItemType from "../../apps/data/app";

type AppPageType = {
  app?: AppItemType;
  privacy?: string;
  terms?: string;
  privacyOptions?: PrivacyOptions;
};

type PrivacyOptions = {
  thirdParty?: {
    googleServices?: boolean;
    googleAnalytics?: boolean;
    facebook?: boolean;
    revenueCat?: boolean;
  };
};

export default AppPageType;
