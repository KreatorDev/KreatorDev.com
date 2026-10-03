function SectionTitle({
  id,
  eyebrow,
  title,
  action,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 scroll-mt-32"
    >
      <div className="flex flex-col gap-2.5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2rem,2.5vw+1rem,2.75rem)] leading-[1.02] tracking-[-0.01em]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

export default SectionTitle;
