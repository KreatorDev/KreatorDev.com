"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";

type Tab = {
  id: string;
  label: string;
  count: number;
  content: React.ReactNode;
};

export default function AppsTabs({ tabs }: { tabs: Tab[] }) {
  const [selected, setSelected] = useState(tabs[0].id);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const syncWithHash = () => {
      const id = window.location.hash.slice(1);
      if (tabs.some((tab) => tab.id === id)) setSelected(id);
    };
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, [tabs]);

  const select = (id: string) => {
    setSelected(id);
    window.history.replaceState(null, "", "#" + id);
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    const next = (index + step + tabs.length) % tabs.length;
    select(tabs[next].id);
    buttons.current[next]?.focus();
  };

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="App categories"
        className="grid grid-cols-3 gap-1 rounded-2xl border border-neutral-400/20 bg-surface p-1 dark:border-neutral-600/10 dark:bg-dark sm:flex sm:w-fit sm:rounded-full"
      >
        {tabs.map((tab, index) => {
          const isSelected = tab.id === selected;
          return (
            <button
              key={tab.id}
              ref={(element) => {
                buttons.current[index] = element;
              }}
              id={"tab-" + tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={"panel-" + tab.id}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => select(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={
                "flex flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-2 text-center text-[13px] font-medium leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex-row sm:gap-2 sm:whitespace-nowrap sm:rounded-full sm:px-4 sm:text-sm " +
                (isSelected
                  ? "bg-ink text-lighter dark:bg-lighter dark:text-ink"
                  : "text-neutral-500 hover:text-ink dark:hover:text-lighter")
              }
            >
              {tab.label}
              <span className={"text-xs " + (isSelected ? "opacity-60" : "opacity-70")}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={"panel-" + tab.id}
          role="tabpanel"
          aria-labelledby={"tab-" + tab.id}
          hidden={tab.id !== selected}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
