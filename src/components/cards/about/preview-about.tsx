import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import Image from "next/image";
import Link from "next/link";

export default function PreviewAboutCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cardStyle + className}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          <CardTitle title="KREATORDEV" />
          <p className="text-xl font-normal mt-4">Ayoub Kremcht</p>
        </div>
        <Image
          className="hidden 2xs:block"
          src="/me/avatar.png"
          alt="Ayoub Kremcht"
          width={55}
          height={69}
        />
      </div>
      <p className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
        A software developer from Morocco interested in building apps as
        solutions.
      </p>
      <Link href="/about" className="hover:animate-scale">
        <CardButton title="LEARN MORE" />
      </Link>
    </div>
  );
}
