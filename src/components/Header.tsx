"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import ChangeLocale from "./ChangeLocale";

const Header = () => {
  const pathName = usePathname();
  const locale = useParams()?.locale;

  return (
    <header className="flex flex-row justify-between items-center gap-x-4 px-8 py-6">
      <ModeToggle />
      {/* <nav className="flex gap-2 mb-2">
        <Link
          href={`/${locale}`}
          className={pathName === `/${locale}` ? "text-blue-700" : ""}>
          Home
        </Link> */}
      {/* <Link
          href={`/${locale}/about`}
          className={pathName === `/${locale}/about` ? 'text-blue-700' : ''}
        >
          About
        </Link> */}
      {/* </nav> */}
      <ChangeLocale />
    </header>
  );
};

export default Header;
