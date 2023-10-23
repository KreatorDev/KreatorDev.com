import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";

function GridCard({
  title,
  icon,
  className,
  gridClassName,
  children,
  footer,
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
  gridClassName?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className={cardStyle + className}>
      <CardTitle icon={icon} title={title} />
      <div className="h-5" />
      <div className={"flex flex-wrap content-center gap-3.5 " + gridClassName}>
        {children}
      </div>
      {footer}
    </div>
  );
}
export default GridCard;
