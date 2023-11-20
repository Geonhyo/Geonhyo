"use client";
import Link from "next/link";
import EmailIcon from "@/public/icons/email.svg";
import GithubIcon from "@/public/icons/github.svg";
import NotionIcon from "@/public/icons/notion.svg";

export default function Footer() {
  return (
    <footer className="w-full max-w-full flex flex-col items-center px-9 py-8">
      <h3 className="font-bold text-xl text-white mb-2">Contact</h3>
      <div className="w-fit flex flex-row gap-2 lg:gap-4 mb-9">
        <Link
          href={"mailto:rjsgy0815@yonsei.ac.kr"}
          title="Send Email to ME"
          className="w-fit px-2 flex flex-row items-center gap-1 h-fit rounded-lg bg-white fill-black text-black border border-black hover:fill-neonGreen hover:text-neonGreen hover:bg-black hover:border-neonGreen"
        >
          <EmailIcon className="w-6 h-6 fill-inherit" />
          <p className="shrink-0 text-inherit font-bold">E-Mail</p>
        </Link>
        <Link
          href={
            "https://park-geonhyo.notion.site/4c07f6d33e924ab89ce10907cd3e75ea?pvs=4"
          }
          rel="noopener noreferrer"
          target="_blank"
          title="Visit My Notion Page"
          className="w-fit px-2 flex flex-row items-center gap-1 h-fit rounded-lg bg-white fill-black text-black border border-black hover:fill-neonGreen hover:text-neonGreen hover:bg-black hover:border-neonGreen"
        >
          <NotionIcon className="w-6 h-6 fill-inherit" />
          <p className="shrink-0 text-inherit font-bold">Notion</p>
        </Link>
        <Link
          href={"https://github.com/Geonhyo"}
          rel="noopener noreferrer"
          target="_blank"
          title="Visit My Github Page"
          className="w-fit px-2 flex flex-row items-center gap-1 h-fit rounded-lg bg-white fill-black text-black border border-black hover:fill-neonGreen hover:text-neonGreen hover:bg-black hover:border-neonGreen"
        >
          <GithubIcon className="w-6 h-6 fill-inherit" />
          <p className="shrink-0 text-inherit font-bold">Github</p>
        </Link>
      </div>
      <div className="w-full max-w-full flex flex-col md:flex-row gap-2 justify-between items-center">
        <Link href={"/"}>
          <p className="w-fit shrink-0 text-xs font-bold hover:text-neonGreen">
            GEONHYO.COM
          </p>
        </Link>
        <p className="w-fit shrink-0 text-xs text-center md:text-end">
          Copyright 2023. PARK GEONHYO.
          <br />
          All pictures and contents cannot be copied without permission
        </p>
      </div>
    </footer>
  );
}
