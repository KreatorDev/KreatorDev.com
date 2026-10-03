import Image from "next/image";
import AppItemType from "./data/app";

function AppIcon({
  app,
  className,
  priority,
}: {
  app: Pick<AppItemType, "title" | "image" | "hasBorder">;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={app.image}
      alt={app.title}
      width={200}
      height={200}
      priority={priority}
      className={
        "shrink-0 rounded-[22%] bg-neutral-500/10 object-cover " +
        (app.hasBorder ? "border border-neutral-500/15 " : "") +
        className
      }
    />
  );
}

export default AppIcon;
