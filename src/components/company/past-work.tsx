import AppIcon from "@/components/cards/apps/app-icon";
import { founder, legalName } from "@/constants/strings";
import { PastWorkType, pastWork } from "./data/past-work";

const visibleCount = 8;

export const pastWorkNote = `Before focusing on ${legalName}'s own apps, ${founder.firstName} built and shipped apps for his early personal projects and for clients. Client projects belong to their owners, and none of these apps are ${legalName} products.`;

export function PastWorkList({ items }: { items: PastWorkType[] }) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-start gap-4 border-t border-neutral-500/15 py-4"
        >
          <AppIcon app={item} className="h-12 w-12" />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold transition-colors hover:text-accent after:content-['_↗'] after:text-neutral-500"
                >
                  {item.title}
                </a>
              ) : (
                <span className="font-semibold">{item.title}</span>
              )}
              <span className="text-xs text-neutral-500">{item.platforms}</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function PastWork() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
        Before KreatorDev
      </h2>
      <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {pastWorkNote}
      </p>
      <PastWorkList items={pastWork.slice(0, visibleCount)} />
      {pastWork.length > visibleCount && (
        <details className="group">
          <summary className="w-fit cursor-pointer list-none py-2 text-sm font-medium transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">
              Show all {pastWork.length} projects ↓
            </span>
            <span className="hidden group-open:inline">Show fewer ↑</span>
          </summary>
          <PastWorkList items={pastWork.slice(visibleCount)} />
        </details>
      )}
    </section>
  );
}
