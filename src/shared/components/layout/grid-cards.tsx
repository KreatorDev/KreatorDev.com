import GridTitle from "../titles/grid-title";

function GridCards({
  className,
  children,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      {title && <GridTitle title={title} />}
      <div
        className={
          "grid grid-cols-5 justify-start items-start content-start overflow-hidden py-2 gap-6 " +
          className
        }
      >
        {children}
      </div>
    </>
  );
}

export default GridCards;
