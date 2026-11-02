import Image from "next/image";
import AppSubpage from "./app-subpage";
import AppPageType from "./data/page";

const storeHeight = 121;
const storeWidth = (60 * 396) / storeHeight;

export default function Invite({
  page,
  code,
}: {
  page: AppPageType;
  code: string;
}) {
  const app = page.app;
  if (!app) return;

  return (
    <AppSubpage app={app}>
      <div className="flex flex-col items-center text-center gap-4 px-3 pt-6">
        <Image
          className="rounded-full p-2 bg-neutral-500/10"
          src={app.image}
          alt={app.title}
          width={96}
          height={96}
        />
        <p className="text-2xl font-bold">You&apos;re invited to a pact</p>
        <p className="text-neutral-500">
          Install {app.title}, then enter this code to join your partner.
        </p>
        <div className="flex flex-row gap-2" aria-label={`Pact code ${code}`}>
          {code.split("").map((char, i) => (
            <span
              key={i}
              className="w-10 h-14 flex items-center justify-center rounded-xl border border-neutral-400/40 bg-neutral-500/10 text-2xl font-bold font-mono"
            >
              {char}
            </span>
          ))}
        </div>
        <div className="h-2" />
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
          <a
            href={app.playstore}
            target="_blank"
            className="hover:opacity-50 h-[60px]"
          >
            <Image
              src="/other/google-play.png"
              alt="Google Play"
              height={storeHeight}
              width={storeWidth}
            />
          </a>
          <a
            href={app.appstore}
            target="_blank"
            className="hover:opacity-50 h-[60px]"
          >
            <Image
              src="/other/app-store.png"
              alt="App Store"
              height={storeHeight}
              width={storeWidth}
            />
          </a>
        </div>
      </div>
    </AppSubpage>
  );
}
