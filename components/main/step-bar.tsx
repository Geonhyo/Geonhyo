"use client";

import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const ids = ["banner", "about-me", "skills", "projects"];

export default function MainStepBar() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const currentY = window.scrollY;
    console.log(currentY);
    function scrollEventListener() {
      console.log("hello");
      const y2 = document.getElementById(ids[1])?.offsetTop ?? 0;
      const y3 = document.getElementById(ids[2])?.offsetTop ?? 0;
      const y4 = document.getElementById(ids[3])?.offsetTop ?? 0;
      const currentY = window.scrollY;
      console.log(currentY);
      if (currentY >= y4) {
        setCurrentIdx(3);
      } else if (currentY >= y3) {
        setCurrentIdx(2);
      } else if (currentY >= y2) {
        setCurrentIdx(1);
      } else {
        setCurrentIdx(0);
      }
    }

    window.addEventListener("scroll", scrollEventListener);

    return () => window.removeEventListener("scroll", scrollEventListener);
  }, []);

  const setSelectedIdx = (
    idx: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    e?.preventDefault();
    const targetDiv = document.getElementById(ids[idx]);
    const targetDivY = targetDiv?.offsetTop;
    if (targetDivY === undefined) return;

    scroll.scrollTo(targetDivY, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <ul className="hidden sm:flex fixed top-8 right-[50vw] lg:top-[50vh] lg:right-9 z-50 flex-row lg:flex-col items-center gap-2 -translate-y-1/2 translate-x-1/2">
      {ids.map((id, idx) => (
        <button
          className={`rounded-full border border-white ${
            idx === currentIdx
              ? "w-6 h-3 lg:w-3 lg:h-6 bg-neonGreen border-neonGreen"
              : "w-2 h-2 hover:w-3 hover:h-3 hover:bg-white"
          }`}
          key={id}
          onClick={(e) => setSelectedIdx(idx, e)}
        />
      ))}
    </ul>
  );
}
