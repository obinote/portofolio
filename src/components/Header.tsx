"use client";

import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import { Nav, NavLink } from "./Navigation";
import Image from "next/image";

import robiWhite from "@/assets/image/whiteIcon.svg";
import robiBlack from "@/assets/image/blackIcon.svg";

const Header = () => {
  const navigations = [
    { id: "projects", title: "Projects" },
    { id: "about", title: "About" },
  ];
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="flex flex-row justify-between items-center gap-x-4 px-8 py-1 sticky top-0 z-50 dark:bg-[#020817] bg-[#ffffff] bg-opacity-50 dark:bg-opacity-50">
      <div className="flex flex-row items-center justify-start gap-x-2">
        <NavLink href={`/`}>
          <div className="relative">
            <Image
              src={isDark ? robiWhite : robiBlack}
              width={100}
              height={10}
              alt="upwork icon"
            />
          </div>
        </NavLink>
      </div>
      <div className="flex flex-row items-center gap-x-3">
        <Nav>
          {navigations.map((nav) => (
            <NavLink key={nav.id} href={`/${nav.id}`}>
              {nav.title}
            </NavLink>
          ))}
        </Nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
