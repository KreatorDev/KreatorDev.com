import cardStyle from "@/shared/styles/card";
import Image from "next/image";

export default function FullAboutCard() {
  return (
    <div className={cardStyle + "!py-12 !px-4"}>
      <div className="w-full flex flex-col items-center justify-center text-center gap-3">
        <Image
          className="rounded-full p-3 bg-teal-100/40 dark:bg-slate-500/20"
          src="/me/smile-square.png"
          alt="Ayoub Kremcht"
          width={150}
          height={150}
        />
        <p className="text-xl font-bold py-4">
          <a className="opacity-70">Hi, I{"'"}m Ayoub </a>👋
        </p>
        <p className="opacity-90 text-3xl font-bold">
          Passionate about building{" "}
          <a href="/work" className="underline underline-offset-4">
            Apps
          </a>
          .
        </p>
        <p className="text-lg text-neutral-500 py-3">
          a{" "}
          <a className="font-semibold text-dark dark:text-light/80">
            software developer
          </a>{" "}
          based in Morocco.
        </p>
        <p className="text-[17px] text-neutral-500 2xs:px-2 xs:px-5 leading-relaxed">
          Currently interested on developing quality applications as solutions
          that effectively solve problems, rather than just providing solutions.
        </p>
      </div>
    </div>
  );
}
