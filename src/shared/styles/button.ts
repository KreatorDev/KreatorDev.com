const baseButton =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-lighter dark:focus-visible:ring-offset-darker ";

export const primaryButton =
  baseButton +
  "bg-ink text-lighter hover:bg-ink/80 dark:bg-lighter dark:text-ink dark:hover:bg-lighter/80 ";

export const secondaryButton =
  baseButton +
  "border border-neutral-500/25 hover:border-neutral-500/50 hover:bg-neutral-500/5 ";

export const textLink =
  "font-medium underline decoration-neutral-500/40 underline-offset-4 transition hover:decoration-accent ";
