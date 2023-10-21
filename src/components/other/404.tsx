import GoHomeButton from "@/shared/components/buttons/go-home-button";
import cardStyle from "@/shared/styles/card-style";

export default function NotFound({ err }: { err?: string }) {
  return (
    <div className={cardStyle + "items-center text-center py-14"}>
      <label className="text-7xl font-semibold text-neutral-700 dark:text-neutral-500">
        404
      </label>
      <div className="h-6" />
      <label className="text-lg font-light text-neutral-500 mx-10">
        {err || "We couldn't find the page you're looking for."}
      </label>
      <div className="h-10" />
      <GoHomeButton />
    </div>
  );
}
