"use client";

import MenuIcon from "@/assets/icons/menu";
import ThemeSwitcher from "@/components/cards/theme/theme-toggle";
import AppPaths from "@/constants/paths";
import Link from "next/link";
import { useState } from "react";
import useAppPathname from "../hooks/pathname";
import cardStyle from "../styles/card-style";
import useDropDownMenu from "./dropdowns/menu";

function Header() {
  const pathname = useAppPathname();
  const [path, setPath] = useState(pathname);
  const themeSwitcher = (
    <ThemeSwitcher
      className="hover:animate-none !w-[80px]"
      thumbClassName="h-7 w-7"
    />
  );

  const btnStyle =
    "py-4 px-6 sm:py-[8px] sm:px-4 dark:hover:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:text-white hover:text-black rounded-full ";
  const items = AppPaths.main.map((card) => {
    const isSelected = path.replace("#", "") === card.path.replace("#", "");
    return (
      <Link
        key={card.name}
        onClick={() => {
          setPath(card.path);
          if (dropDown.isOpen) dropDown.setOpen(false);
        }}
        href={card.path}
      >
        <div
          className={
            btnStyle +
            "text-base font-normal min-w-[200px] sm:min-w-0 text-start " +
            (isSelected ? "text-black dark:text-white" : "")
          }
        >
          {card.name}
        </div>
      </Link>
    );
  });

  const dropDown = useDropDownMenu({
    menu: <div className={cardStyle + "px-3 py-4 justify-start"}>{items}</div>,
  });

  return (
    <header
      className={
        cardStyle +
        "mt-8 sticky top-4 !z-50 !p-1 !flex-row items-center justify-between rounded-3xl w-full text-sm text-neutral-500 text-center sm:backdrop-blur-md sm:!bg-opacity-90"
      }
    >
      <div className="hidden sm:flex flex-wrap items-center w-full">
        {items}
      </div>
      <div>
        <button
          onClick={() => dropDown.setOpen(!dropDown.isOpen)}
          className={btnStyle + "flex sm:hidden !py-1.5 !px-4"}
        >
          <MenuIcon
            className="w-7 h-7 text-dark dark:text-neutral-200"
            strokeWidth={2}
          />
        </button>
        <div className="sm:hidden">{dropDown.dropdown}</div>
      </div>
      {themeSwitcher}
    </header>
  );
}

export default Header;
