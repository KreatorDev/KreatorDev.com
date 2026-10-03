import { mobileApps } from "@/components/cards/apps/data/mobile-apps";
import AppPaths from "@/constants/paths";
import { founder, url } from "@/constants/strings";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...AppPaths.main.map((item) => item.path), founder.path];
  const legal = AppPaths.legal.map((item) => item.path);
  const apps = mobileApps.flatMap((app) =>
    app.path ? [app.path, app.path + "/privacy", app.path + "/terms"] : []
  );
  return [...pages, ...apps, ...legal].map((path) => ({ url: url + path }));
}
