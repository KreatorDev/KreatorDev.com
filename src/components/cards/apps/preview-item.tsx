import Image from "next/image";
import LinkCard from "../links/link-card";

function AppPreviewItem({ card }: { card: any }) {
  return (
    <div key={card.path} className="flex flex-col justify-center items-center">
      <LinkCard
        href={card.link ?? card.appstore ?? card.playstore}
        className={
          "w-27 h-27 !bg-transparent !rounded-[24px] " +
          (card.hasBorder
            ? " border dark:border-none border-neutral-500/20"
            : "")
        }
        icon={
          <Image
            onClick={!!card.link ? () => window.open(card.link) : undefined}
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className="rounded-[24px]"
          />
        }
      />
      <div className="h-2" />
      <p className="text-xs font-normal text-neutral-500 dark:text-neutral-400">
        {card.title}
      </p>
    </div>
  );
}

export default AppPreviewItem;
