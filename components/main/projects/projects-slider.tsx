"use client";
import { MainProject } from "@/model/main-project";
import Image from "next/image";
import { useState } from "react";
import ChevronLeftIcon from "@/public/icons/chevron-left.svg";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import Link from "next/link";
import UrlIosIcon from "@/public/icons/url-ios.png";
import UrlAosIcon from "@/public/icons/url-aos.png";
import UrlWebIcon from "@/public/icons/url-web.png";

export default function MainProjectSlider({
  projects,
}: {
  projects: MainProject[];
}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const setPrevProject = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e && e.preventDefault();
    setCurrentIdx(
      (idx) => (idx === 0 ? projects.length - 1 : idx - 1) % projects.length
    );
  };

  const setNextProject = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e && e.preventDefault();
    setCurrentIdx(
      (idx) => (idx === projects.length - 1 ? 0 : idx + 1) % projects.length
    );
  };

  const setClickedProject = (
    idx: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    e && e.preventDefault();
    setCurrentIdx(idx);
  };

  let startX: number;

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startX = e.clientX;
  };

  const mouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startX === undefined) return;
    if (e.clientX - startX < -100) {
      setNextProject();
      return;
    }

    if (e.clientX - startX > 100) {
      setPrevProject();
      return;
    }
  };

  return (
    <div className="relative w-full max-w-full flex flex-col lg:flex-col-reverse gap-6 justify-center items-center">
      <button
        className="hidden lg:block absolute z-10 left-[-44px] xl:left-[-64px] top-auto fill-white animate-pulse hover:fill-neonGreen hover:animate-none"
        onClick={setPrevProject}
      >
        <ChevronLeftIcon className="w-12 h-12 fill-inherit" />
      </button>
      <button
        className="hidden lg:block absolute z-10 right-[-44px] xl:right-[-64px] top-auto fill-white animate-pulse hover:fill-neonGreen hover:animate-none"
        onClick={setNextProject}
      >
        <ChevronRightIcon className="w-12 h-12 fill-inherit" />
      </button>
      <div className="w-fit flex flex-row gap-1">
        {projects.map((e, idx) => (
          <button
            key={idx}
            className={`rounded-full ${
              idx === currentIdx ? "w-6 bg-white" : "w-2 bg-white/30"
            } h-2 hover:bg-neonGreen`}
            onClick={(e) => setClickedProject(idx, e)}
          />
        ))}
      </div>
      <div
        className={`w-full max-w-screen-lg flex flex-col lg:flex-row gap-9 h-fit`}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
      >
        <div className="relative shrink-0 rounded-xl overflow-hidden aspect-video w-full h-auto lg:w-1/2 lg:h-auto">
          <Image
            src={projects[currentIdx].imageUrl}
            alt="thumbnail"
            className="object-contain shrink-0 rounded-xl overflow-hidden bg-white/5"
            priority={false}
            sizes="m"
            draggable={false}
            fill
          />
        </div>
        <div className="w-full max-w-full flex flex-col">
          <h3 className="whitespace-pre-wrap mb-4 text-2xl font-black w-fit hover:text-neonGreen cursor-pointer">
            {projects[currentIdx].title}
          </h3>
          <p className="whitespace-pre-wrap w-full max-w-full mb-2">
            {projects[currentIdx].description}
          </p>
          <ul className="w-full max-w-full flex flex-wrap gap-2 mb-4">
            {projects[currentIdx].skills.map((skill, idx) => (
              <li
                key={idx}
                className="rounded-lg border border-neonLime text-neonLime text-sm w-fit h-fit px-2 cursor-default hover:bg-neonLime hover:text-black"
              >
                #&nbsp;{skill}
              </li>
            ))}
          </ul>
          <ul className="w-full max-w-full flex flex-row gap-2">
            {projects[currentIdx].webUrl && (
              <Link
                className="rounded-lg px-3 py-1 bg-white flex flex-row items-center gap-1"
                href={projects[currentIdx].webUrl!}
              >
                <Image src={UrlWebIcon} alt="URL" width={16} height={16} />
                <p className="text-black text-sm">WEB</p>
              </Link>
            )}
            {projects[currentIdx].iosUrl && (
              <Link
                className="rounded-lg px-3 py-1 bg-white flex flex-row items-center gap-1"
                href={projects[currentIdx].iosUrl!}
              >
                <Image src={UrlIosIcon} alt="AppStore" width={16} height={16} />
                <p className="text-black text-sm">IOS</p>
              </Link>
            )}
            {projects[currentIdx].aosUrl && (
              <Link
                className="rounded-lg px-3 py-1 bg-white flex flex-row items-center gap-1"
                href={projects[currentIdx].aosUrl!}
              >
                <Image
                  src={UrlAosIcon}
                  alt="GooglePlay"
                  width={16}
                  height={16}
                />
                <p className="text-black text-sm">Android</p>
              </Link>
            )}
          </ul>
          {/* <Link href={}>Detail</Link> */}
        </div>
      </div>
    </div>
  );
}
