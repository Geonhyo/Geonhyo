import EmailIcon from "@/public/icons/email.svg";
import GithubIcon from "@/public/icons/github.svg";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="w-fit flex flex-row gap-4 items-center rounded-xl px-4 py-2 bg-black border-2 border-white/30">
      <Link
        href={"https://github.com/GeonhyoPark815"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon className={`w-8 h-8 fill-white hover:fill-neonGreen`} />
      </Link>
      <Link href={"mailto:rjsgy0815@yonsei.ac.kr"}>
        <EmailIcon className="w-8 h-8 fill-white hover:fill-neonGreen" />
      </Link>
    </nav>
  );
}
