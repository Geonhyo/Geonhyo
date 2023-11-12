"use client";
import ChevronDownIcon from "@/public/icons/chevron-down.svg";
import { animateScroll as scroll } from "react-scroll";

export default function MainBannerDownButton() {
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const targetDiv = document.getElementById("about-me");
    const targetDivY = targetDiv?.offsetTop;
    if (targetDivY === undefined) return;

    scroll.scrollTo(targetDivY, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <button
      onClick={onClickButton}
      className="z-10 absolute bottom-9 inset-auto w-8 h-8 fill-white hover:fill-neonGreen animate-bounce"
    >
      <ChevronDownIcon className="fill-inherit" />
    </button>
  );
}
