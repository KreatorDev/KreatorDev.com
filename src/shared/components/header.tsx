"use client";

import LogoIcon from "@/assets/icons/logo";
import MenuIcon from "@/assets/icons/menu";
import ThemeSwitcher from "@/components/cards/theme/theme-toggle";
import AppPaths from "@/constants/paths";
import { brand } from "@/constants/strings";
import Link from "next/link";
import useAppPathname from "../hooks/pathname";
import cardStyle from "../styles/card";
import useDropDownMenu from "./dropdowns/menu";

function Header() {
  const pathname = useAppPathname();

  const items = (isMenu: boolean) =>
    AppPaths.main.map((item) => {
      const isSelected = pathname === item.path;
      return (
        <Link
          key={item.path}
          href={item.path}
          aria-current={isSelected ? "page" : undefined}
          onClick={() => dropDown.setOpen(false)}
          className={
            "rounded-full transition-colors hover:bg-neutral-500/10 hover:text-ink dark:hover:text-lighter " +
            (isMenu
              ? "block min-w-[200px] px-5 py-3.5 text-base"
              : "px-4 py-2 text-[15px]") +
            (isSelected
              ? " text-ink dark:text-lighter font-medium"
              : " text-neutral-500")
          }
        >
          {item.name}
        </Link>
      );
    });

  const dropDown = useDropDownMenu({
    menu: (
      <div
        className={cardStyle + "!p-2 shadow-lg -translate-x-[calc(100%-44px)]"}
      >
        {items(true)}
      </div>
    ),
  });

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="absolute inset-x-0 top-0 bottom-[calc(50%-8px)] -z-10 bg-lighter/80 backdrop-blur-md dark:bg-darker/80" />
      <nav
        aria-label="Main"
        className={cardStyle + "!flex-row !p-1 items-center rounded-full gap-2"}
      >
        <Link
          href="/"
          aria-label={brand + " home"}
          className="flex items-center gap-2.5 rounded-full py-1.5 pl-2.5 pr-4 transition-opacity hover:opacity-80"
        >
          <LogoIcon className="h-7 w-7 text-accent" />
          <span className="text-[17px] font-semibold tracking-tight">
            {brand}
          </span>
        </Link>
        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {items(false)}
        </div>
        <ThemeSwitcher
          className="hover:animate-none !w-[72px] ml-auto sm:ml-2 shrink-0"
          thumbClassName="h-7 w-7"
        />
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={dropDown.isOpen}
            onClick={() => dropDown.setOpen(!dropDown.isOpen)}
            className="flex rounded-full px-3 py-2 hover:bg-neutral-500/10"
          >
            <MenuIcon className="h-6 w-6" strokeWidth={2} />
          </button>
          {dropDown.dropdown}
        </div>
      </nav>
    </header>
  );
}

export default Header;
