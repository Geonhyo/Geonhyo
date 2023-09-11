"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ChevronDownIcon from "@/public/icons/chevron-down.svg";
import LocationIcon from "@/public/icons/location.svg";
import { Suwannaphum } from "next/font/google";

const suwannaphum = Suwannaphum({
  weight: "900",
  subsets: ["latin"],
});

export default function MainBanner() {
  const [isHidden, setIsHidden] = useState(true);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    setScrollRatio(window.scrollY / window.innerHeight);
    setIsHidden(false);
    const handleScroll = () => {
      setScrollRatio(window.scrollY / window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ opacity: isHidden ? 0 : 3.5 - scrollRatio }}
      id="main-banner"
      className="w-screen h-[400vh]"
    >
      <div
        id="main-banner-background"
        style={{ opacity: scrollRatio }}
        className={`sticky top-0 w-screen h-screen bg-blue ${
          scrollRatio > 3.5 ? "hidden" : ""
        }`}
      />
      {1.5 - scrollRatio > 0 && (
        <div
          id="main-banner-main"
          style={{ opacity: 1.5 - scrollRatio }}
          className={`fixed top-0 w-full h-screen  ${
            scrollRatio > 3.5 ? "hidden" : "flex"
          } flex-col justify-center items-center gap-16`}
        >
          <div
            id="main-banner-main-content"
            className="w-full h-fit flex flex-row px-32 justify-between"
          >
            <div
              id="main-banner-main-content-main"
              className="shrink-0 grow-0 flex flex-col gap-6 items-start"
            >
              <div
                id="main-banner-main-content-introduce"
                className="shrink-0 grow-0 flex flex-col gap-3 items-start"
              >
                <div
                  id="main-banner-main-content-introduce-location"
                  className="flex flex-row gap-2 items-center"
                >
                  <Image src={LocationIcon} alt="지역" width={24} height={24} />
                  <p className="text-base font-normal text-black">
                    Seoul, Korea
                  </p>
                </div>
                <h1
                  id="main-banner-main-content-introduce-main"
                  className="text-6xl leading-tight font-black text-black whitespace-pre-wrap"
                >
                  Hi, This is GEONHYO
                  <br />
                  I&apos;m&nbsp;
                  <span className="text-blue">
                    Frontend
                    <br />
                    Developer
                  </span>
                </h1>
                <p
                  id="main-banner-main-content-introduce-position"
                  className="text-xl font-bold text-black"
                >
                  I’m Interested in Various User Experience on Web and Mobile.
                  <br />
                  And I always love to talk about how to improve our service.
                </p>
              </div>
              <button
                style={{ opacity: 1.5 - 2 * scrollRatio }}
                type="button"
                className="rounded-full bg-orange px-6 py-4"
              >
                <span className="text-2xl font-black text-white cursor-pointer">
                  Get In Touch
                </span>
              </button>
            </div>

            <div
              id="main-banner-main-content-guest"
              className="w-full h-full flex flex-col justify-end"
            >
              <div
                id="main-banner-main-content-guest"
                className="w-full flex flex-col items-end gap-1"
              >
                <p id="main-banner-main-content-guest-nickname">{`@ 익명 123`}</p>
                <div
                  id="main-banner-main-content-guest-memo"
                  className="px-6 py-4 w-fit rounded-full border-base border-black/70"
                >
                  <p className="text-base font-normal text-ellipsis line-clamp-2">
                    멋있는 포트폴리오 공유해주셔서 감사해요!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            id="scroll-down-button"
            type="button"
            className="fixed bottom-6 animate-bounce"
          >
            <Image src={ChevronDownIcon} alt="내리기" width={24} height={24} />
          </button>
        </div>
      )}
      {scrollRatio - 1 > 0 && (
        <div
          id="main-banner-intro"
          style={{ opacity: scrollRatio - 1 }}
          className={`fixed top-0 w-full h-screen  ${
            scrollRatio > 3.5 ? "hidden" : "flex"
          } flex-col justify-center items-center gap-16`}
        >
          <div
            id="main-banner-intro-content"
            className="w-full h-fit flex flex-col px-32 justify-center items-center"
          >
            <h2
              className={`${suwannaphum.className} text-white text-center text-5xl leading-tight py-16`}
            >
              No&nbsp;
              <span className="text-yellow">Technology&nbsp;</span>
              is Bigger than the&nbsp;
              <span className="text-yellow">User</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
