import AnchorIcon from "@/assets/icons/anchor-link";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card-style";
import LinkCard from "./link-card";
import linksCards from "./links-data";

function LinksWrap({
  className,
  gridClassName,
}: {
  className?: string;
  gridClassName?: string;
}) {
  return (
    <div className={cardStyle + className}>
      <CardTitle icon={<AnchorIcon className="w-4.5 h-4.5" />} title="LINKS" />
      <div className="h-5 md:h-0" />
      <div
        className={"grid grid-cols-2 content-center gap-3.5 " + gridClassName}
      >
        {linksCards.map((card) => (
          <LinkCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

export default LinksWrap;
