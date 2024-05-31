"use client";

import { ModeToggle } from "./ModeToggle";
import { Nav, NavLink } from "./Navigation";

const Header = () => {
  const navigations = [
    { id: "projects", title: "Projects" },
    { id: "about", title: "About" },
  ];
  return (
    <header className="flex flex-row justify-between items-center gap-x-4 px-8 py-6 sticky top-0 z-50 dark:bg-[#020817] bg-[#ffffff] bg-opacity-50 dark:bg-opacity-50">
      <div className="flex flex-row items-center justify-start gap-x-2">
        <ModeToggle />
        <NavLink href={`/`}>
          Home
        </NavLink>
      </div>
      <Nav>
        {navigations.map((nav) => (
          <NavLink key={nav.id} href={`/${nav.id}`}>
            {nav.title}
          </NavLink>
        ))}
      </Nav>
    </header>
  );
};

export default Header;
