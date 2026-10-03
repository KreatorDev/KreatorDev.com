import SectionTitle from "@/shared/components/titles/section-title";

const principles = [
  {
    title: "One job, done well",
    text: "Each app solves one everyday problem. We keep it focused, fast and easy to understand from the first screen.",
  },
  {
    title: "Honest by design",
    text: "Clear pricing, no tricks and cancel anytime. We would rather earn trust than squeeze a conversion.",
  },
  {
    title: "Built to last",
    text: "We keep improving our apps long after launch, with updates shaped by the people who use them every day.",
  },
];

export default function Principles() {
  return (
    <section className="flex flex-col gap-10">
      <SectionTitle eyebrow="How we build" title="Small apps, made with care." />
      <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
        {principles.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-3 border-t border-neutral-500/20 pt-5">
            <span className="font-display text-2xl text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
