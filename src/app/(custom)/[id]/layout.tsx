import getAppPage from "@/components/cards/app-page/data/get-object";
import { fontVariables } from "@/lib/fonts";
import Providers from "@/lib/provider";
import metadataBuilder from "@/metadata/builder";
import { Metadata } from "next";
import "./../../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="w-full h-full bg-lighter dark:bg-darker text-ink dark:text-lighter antialiased min-h-screen flex flex-col justify-center items-center max-w-3xl m-auto px-4 xs:px-10">
        <Providers>
          <main className="h-full w-full justify-center items-center m-auto py-4 xs:py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata | undefined> {
  const { id } = await params;
  const page = getAppPage(id);
  const app = page?.app;
  if (!page || !app) return;
  const res = metadataBuilder(app.title, app.description, {
    og: app.image,
    icons: {
      icon: app.icon ?? app.image,
      shortcut: app.image,
      apple: app.image,
    },
    path: `/${id}`,
    keywords: app.keywords ?? [app.title, app.category],
  });
  res.twitter = {
    card: "app",
    site: "@kreatordev",
    description: app.description,
    app: {
      id: {
        googleplay: page.playstoreId,
        ipad: page.appstoreId,
        iphone: page.appstoreId,
      },
      name: app.title,
      url: {
        googleplay: app.playstore,
        ipad: app.appstore,
        iphone: app.appstore,
      },
    },
  };
  return res;
}
