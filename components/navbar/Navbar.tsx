import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  {
    path: "/about",
    text: "About",
  },

  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon />
        <span>home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        // <Link key={item.path} href={item.path} className="p-2">
        //   {item.text}
        // </Link>
        <ActiveLink key={item.path} path={item.path} text={item.text} />
      ))}
    </nav>
  );
}
