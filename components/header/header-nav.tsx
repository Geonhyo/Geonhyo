import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav id="header-nav" className="w-full">
      <ul
        id="header-nav-list"
        className="flex flex-row justify-center items-center gap-2 text-base text-black font-bold"
      >
        <li className="rounded-full px-4 py-2 hover:border hover:border-black/70 hover:font-black cursor-pointer">
          <Link href={"/"}>About</Link>
        </li>
        <li className="rounded-full px-4 py-2 hover:border hover:border-black/70 hover:font-black cursor-pointer">
          <Link href={"/"}>Blog</Link>
        </li>
        <li className="rounded-full px-4 py-2 hover:border hover:border-black/70 hover:font-black cursor-pointer">
          <Link
            href={"https://github.com/GeonhyoPark815"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}
