"use client";
import HeaderNav from "./header-nav";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`fixed z-20 top-0 w-screen h-16 px-9 flex flex-row justify-between items-end bg-transparent`}
    >
      <Link
        href={"/"}
        className="cursor-pointer font-black text-white text-xl rounded-xl px-4 py-2 bg-black border-2 border-white/30  hover:text-neonGreen hover:border-neonGreen"
      >
        <p className="hidden sm:inline text-inherit font-black">GEONHYO.COM</p>
        <p className="inline sm:hidden text-inherit font-black">GH</p>
      </Link>
      <HeaderNav />
    </header>
  );
}
