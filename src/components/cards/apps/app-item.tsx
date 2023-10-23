import { githubIcon } from "@/assets/icons/all-social";
import AppstoreIcon from "@/assets/icons/appstore";
import GooglePlayIcon from "@/assets/icons/google-play";
import PubDevIcon from "@/assets/icons/pub-dev";
import Image from "next/image";
import Link from "next/link";
import linkByTag from "./data/link-by-tag";

function AppItem({
  card,
  className,
  hideBottomBorder = false,
  hideTags = false,
  hideLearnMore = false,
}: {
  card: any;
  className?: string;
  hideTags?: boolean;
  hideBottomBorder?: boolean;
  hideLearnMore?: boolean;
}) {
  return (
    <div
      key={card.title}
      className={
        "flex flex-col gap-2 " +
        (hideBottomBorder ? "" : "border-b border-neutral-500/10 pb-7") +
        " " +
        className
      }
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap 2.5xs:!flex-nowrap !flex-row items-start gap-4 underline-offset-2">
          <Image
            onClick={!!card.link ? () => window.open(card.link) : undefined}
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className={
              "w-18 h-18 xs:w-22 xs:h-22 rounded-[18px]" +
              (card.hasBorder ? " border border-neutral-500/20" : "") +
              (!!card.link ? " hover:animate-scale cursor-pointer" : "") +
              " " +
              card.imageClassName
            }
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-0.5 align-baseline">
              <a
                href={card.link}
                target="_blank"
                className={
                  "text-lg font-medium" +
                  (!!card.link
                    ? " cursor-pointer hover:underline after:content-['__↗']"
                    : "")
                }
              >
                {card.title}
              </a>
              {!!card.github && (
                <a
                  href={card.github}
                  target="_blank"
                  className="hover:opacity-40 hover:animate-scale"
                >
                  <div className="w-5.5 mt-0.5 ml-2 bg-current rounded-full">
                    {githubIcon}
                  </div>
                </a>
              )}
              {!!card.pub && (
                <a
                  href={card.pub}
                  target="_blank"
                  className="hover:opacity-40 hover:animate-scale"
                >
                  <PubDevIcon className="w-5.5 mt-0.5 mx-3" />
                </a>
              )}
              {!!card.playstore && (
                <a
                  href={card.playstore}
                  target="_blank"
                  className="hover:opacity-40 hover:animate-scale"
                >
                  <GooglePlayIcon className="w-7.5" />
                </a>
              )}
              {!!card.appstore && (
                <a
                  href={card.appstore}
                  target="_blank"
                  className="hover:opacity-40 hover:animate-scale"
                >
                  <AppstoreIcon className="w-5.5 mt-0.5 mx-3" />
                </a>
              )}
            </div>
            <div className="h-1.5" />
            <div className="text-base leading-relaxed">
              <span className="opacity-70 pr-2">{card.description}</span>
              {!hideLearnMore && (
                <Link
                  href={card.path ?? ""}
                  className="text-md font-medium hover:underline after:content-['_→']"
                >
                  Learn More
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {!hideTags && !!card.tags && (
        <div className="flex flex-row flex-wrap gap-2 opacity-90 mt-3">
          {card.tags.map((tech: any) => {
            const link = linkByTag(tech);
            return (
              <a
                href={link}
                target="_blank"
                key={tech}
                className="text-[12.5px] bg-neutral-500/10 dark:bg-neutral-500/20 hover:bg-neutral-200 dark:hover:bg-neutral-500/10 rounded-[12px] px-3 py-1 hover:animate-scale"
              >
                {tech}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AppItem;
