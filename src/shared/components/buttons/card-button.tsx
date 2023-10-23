import LongRightArrowIcon from "@/assets/icons/long-right-arrow";

function CardButton({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex text-xs justify-center text-center items-center font-normal rounded-full bg-dark dark:bg-white text-white dark:text-dark px-6 py-3 hover:opacity-80 " +
        className
      }
    >
      {title}
      <span className="w-2" />
      <LongRightArrowIcon />
    </div>
  );
}

export default CardButton;
