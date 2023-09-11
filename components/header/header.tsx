"use client";
import HeaderLogo from "@/public/logo/header-logo.svg";
import Image from "next/image";
import HeaderToday from "@/components/header/header-today-num";
import HeaderNav from "./header-nav";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  todayNum: number;
};

export default function Header(props: Props) {
  const [isFilled, setIsFilled] = useState(true);

  const checkIsFilled = () => {
    if (window.scrollY > 4 * window.innerHeight) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  useEffect(() => {
    checkIsFilled();
    const handleScroll = () => {
      checkIsFilled();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed z-10 top-0 w-screen h-16 px-9 flex flex-row justify-between items-center ${
        isFilled ? "bg-white" : "bg-transparent"
      }`}
    >
      <Link
        id="header-logo"
        href={"/"}
        className="w-20 h-full flex flex-col justify-center cursor-pointer"
      >
        <Image
          src={HeaderLogo}
          alt="Geonhyo"
          title="박건효님의 개인 웹페이지입니다"
          className="w-full h-auto"
        />
      </Link>
      <HeaderNav />
      <div
        id="header-today"
        className="w-20 h-fit flex flex-row justify-end items-center gap-2 text-base font-normal"
      >
        <p>Today</p>
        <HeaderToday todayNum={props.todayNum} />
      </div>
    </header>
  );
}
