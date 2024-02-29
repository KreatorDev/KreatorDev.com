import { sourceCode } from "@/metadata/links";
import GoHomeButton from "@/shared/components/buttons/go-home-button";
import cardStyle from "@/shared/styles/card";

export default function Blog() {
  return (
    <div className={cardStyle + "items-center text-center py-14"}>
      <label className="text-7xl font-semibold text-neutral-700 dark:text-neutral-500">
        OOPS!
      </label>
      <div className="h-6" />
      <label className="text-lg font-light text-neutral-500 mx-10">
        Not implemented yet,{" "}
        <span className="text-black dark:text-white opacity-80 hover:!opacity-100 underline">
          <a href={sourceCode}>PRs are welcome!</a>
        </span>
      </label>
      <div className="h-10" />
      <GoHomeButton />
    </div>
  );
}
