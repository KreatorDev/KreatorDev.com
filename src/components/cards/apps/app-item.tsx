import Image from "next/image";
import Link from "next/link";

function AppItem({ card, isLast }: { card: any; isLast?: boolean }) {
  return (
    <div
      key={card.title}
      className={
        "flex flex-col gap-2 mt-1 " +
        (isLast || isLast == undefined
          ? "border-b border-neutral-500/10 pb-8 mb-4"
          : "")
      }
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap 2.5xs:!flex-nowrap !flex-row items-start gap-4 underline-offset-2">
          <Image
            onClick={() => window.open(card.link)}
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className={
              "w-18 h-18 xs:w-22 xs:h-22 rounded-[18px] hover:animate-scale cursor-pointer " +
              (card.hasBorder
                ? "border dark:border-none border-neutral-500/20"
                : "")
            }
          />
          <div className="flex flex-col">
            <Link
              href={card.link ?? ""}
              target="_blank"
              className="text-lg font-medium gap-2 hover:underline after:content-['__↗']"
            >
              {card.title}
            </Link>
            <div className="h-1.5" />
            <div className="text-base leading-relaxed">
              <span className="opacity-70 pr-2">{card.description}</span>
              <Link
                href={card.path ?? ""}
                className="text-md font-medium hover:underline after:content-['_→']"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1" />
      <div className="flex flex-row flex-wrap gap-2 opacity-90">
        {card.techs.map((tech: any) => (
          <label
            key={tech}
            className="text-xs bg-neutral-500/10 dark:bg-neutral-500/20 rounded-[12px] px-3 py-1"
          >
            {tech}
          </label>
        ))}
      </div>
    </div>
  );
}

export default AppItem;
