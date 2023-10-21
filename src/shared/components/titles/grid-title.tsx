function GridTitle({ title }: { title: string }) {
  return (
    <>
      <div id={title?.toLowerCase()} className="h-10" />
      <span className="text-sm font-medium text-start mb-2 pl-5">{title}</span>
    </>
  );
}

export default GridTitle;
