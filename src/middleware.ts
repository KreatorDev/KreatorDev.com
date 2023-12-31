import { NextRequest, NextResponse, userAgent } from "next/server";
import getAppPage from "./components/cards/app-page/data/get-object";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const paths = pathname.split("/");
  const lastPath = paths[paths.length - 1];
  const next = NextResponse.next();
  if (lastPath === "download" && paths.length > 1) {
    const id = paths[paths.length - 2];
    const page = getAppPage(id);
    const app = page?.app;
    if (!page || !app) return next;
    const os = userAgent(req).os.name;
    if (!os) return next;
    if (app.appstore && os === "iOS")
      return NextResponse.redirect(app.appstore);
    if (app.playstore && os === "Android")
      return NextResponse.redirect(app.playstore);
  }
  return next;
}

export const config = {
  matcher: [
    // skip all internal paths
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|favicon-32x32.png|favicon-16x16.png|apple-touch-icon.png|android-chrome-192x192.png|android-chrome-512x512.png|pages|icons).*)",
  ],
};
