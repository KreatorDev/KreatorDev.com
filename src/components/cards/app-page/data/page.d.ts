import AppItemType from "../../apps/data/app";

type AppPageType = {
  app?: AppItemType & { path: string };
  privacy?: string;
  terms?: string;
  invite?: boolean;
  appstoreId?: string;
  playstoreId?: string;
};

export default AppPageType;
