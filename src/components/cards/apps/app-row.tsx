import Link from "next/link";
import AppIcon from "./app-icon";
import AppItemType from "./data/app";

function AppRow({ app }: { app: AppItemType }) {
  const href = app.path ?? app.appstore ?? app.playstore ?? "/apps";
  const isExternal = !app.path;
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className="group flex items-center gap-4 border-t border-neutral-500/15 py-5"
    >
      <AppIcon
        app={app}
        className="h-16 w-16 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="truncate text-base font-semibold group-hover:text-accent transition-colors">
          {app.title}
        </p>
        <p className="text-sm text-neutral-500">{app.category}</p>
        <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400 sm:line-clamp-1">
          {app.description}
        </p>
      </div>
    </Link>
  );
}

export default AppRow;
