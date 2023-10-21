import LongRightArrowIcon from "@/assets/icons/long-right-arrow";

function CardButton({ title }: { title: string }) {
  return (
    <div
      className="flex text-xs justify-center text-center items-center font-normal rounded-full bg-dark dark:bg-white 
	text-white dark:text-dark px-5 py-3 hover:opacity-80"
    >
      {title}
      <span className="w-2" />
      <LongRightArrowIcon />
    </div>
  );
}

export default CardButton;
