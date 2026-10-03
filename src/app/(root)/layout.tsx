import { fontVariables } from "@/lib/fonts";
import Providers from "@/lib/provider";
import rootMetadata from "@/metadata/root";
import { organizationSchema } from "@/metadata/schema";
import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";
import JsonLd from "@/shared/components/other/json-ld";
import "./../globals.css";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="bg-lighter dark:bg-darker text-ink dark:text-lighter antialiased">
        <Providers>
          <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 xs:px-8">
            <Header />
            <main className="w-full flex-1 pt-10 pb-16 sm:pt-16">{children}</main>
            <Footer />
          </div>
        </Providers>
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
