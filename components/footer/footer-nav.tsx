import Link from "next/link";

export default function FooterNav() {
  return (
    <nav id="footer-nav" className="w-full">
      <ul
        id="footer-nav-list"
        className="w-full flex flex-row justify-start items-center gap-6 text-xs text-black font-normal"
      >
        <li>
          <Link href={"/"}>이용약관</Link>
        </li>
      </ul>
    </nav>
  );
}
