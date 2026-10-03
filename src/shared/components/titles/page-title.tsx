function PageTitle({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <header className="flex flex-col gap-5 max-w-3xl motion-safe:animate-rise">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
        {eyebrow}
      </p>
      <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,4.25rem)] leading-[0.98] tracking-[-0.015em]">
        {title}
      </h1>
      {lead && (
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl">
          {lead}
        </p>
      )}
    </header>
  );
}

export default PageTitle;
