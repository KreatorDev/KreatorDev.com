import GridTitle from "../titles/grid-title";

function CardsGrid({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      {title && <GridTitle title={title} />}
      <div className="grid grid-cols-3 justify-start items-start content-center overflow-hidden py-2 gap-6">
        {children}
      </div>
    </>
  );
}

export default CardsGrid;
