import AnchorIcon from "@/assets/icons/anchor-link";
import GridCard from "../../../shared/components/layout/grid-card";
import LinkCard from "./link-item";
import linksCards from "./links-data";

function LinksGridCard({ className }: { className?: string }) {
  return (
    <GridCard
      className={className}
      icon={<AnchorIcon className="w-4.5 h-4.5" />}
      title="LINKS"
    >
      {linksCards.map((card) => (
        <LinkCard key={card.title} {...card} />
      ))}
    </GridCard>
  );
}

export default LinksGridCard;
