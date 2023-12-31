"use client";

import { githubIcon } from "@/assets/icons/all-social";
import AppstoreIcon from "@/assets/icons/appstore";
import GooglePlayIcon from "@/assets/icons/google-play";
import PubDevIcon from "@/assets/icons/pub-dev";
import tagStyle from "@/shared/styles/tag";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
            onClick={!!card.path ? () => router.push(card.path) : undefined}
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className={
              "w-18 h-18 xs:w-22 xs:h-22 rounded-[18px] bg-neutral-500/10 " +
              (card.hasBorder ? " border border-neutral-500/20" : "") +
              (!!card.path ? " hover:animate-scale cursor-pointer" : "") +
              " " +
              card.imageClassName
            }
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-0.5 align-baseline">
              <Link
                href={card.link ?? card.path}
                target={!!card.link ? "_blank" : undefined}
                className={
                  "text-lg font-medium cursor-pointer hover:underline" +
                  (!!card.link ? " after:content-['__↗']" : "")
                }
              >
                {card.title}
              </Link>
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
          {card.tags.map((tag: any) => {
            const link = linkByTag(tag);
            return (
              <a href={link} target="_blank" key={tag} className={tagStyle}>
                {tag}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AppItem;
