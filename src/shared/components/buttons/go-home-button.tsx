import Link from "next/link";

export default function GoHomeButton() {
  return (
    <Link href="/">
      <button className="border-3 py-2 px-8 rounded-full font-medium text-base border border-neutral-600/40 hover:bg-neutral-500/10 hover:animate-scale">
        Go Home
      </button>
    </Link>
  );
}
