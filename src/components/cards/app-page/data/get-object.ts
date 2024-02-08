import { mobileApps } from "../../apps/data/mobile-apps";
import { webApps } from "../../apps/data/web-apps";
import AppPageType from "./page";

function getAppPageObject(id: string) {
  try {
    return require(`@/assets/pages/${id}`).default;
  } catch (e) {
    return null;
  }
}

function getAppPage(id: string) {
  const apps = [...mobileApps, ...webApps];
  const appObject = apps.find((app) => app.path === `/${id}`);
  if (!appObject) return;
  const pageObject = getAppPageObject(id);
  if (!pageObject) return;
  const appstoreId = appObject.appstore?.replace(
    "https://apps.apple.com/app/id",
    ""
  );
  const playstoreId = appObject.playstore?.replace(
    "https://play.google.com/store/apps/details?id=",
    ""
  );
  const page: AppPageType = {
    ...pageObject,
    app: appObject,
    appstoreId,
    playstoreId,
  };
  return page;
}

export default getAppPage;
