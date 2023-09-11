"use client";

import DateUtil from "@/utils/date-util";
import { useEffect, useState } from "react";
import MainHistoryItemCircle from "@/components/main/history/main-history-item-circle";

type Props = {
  historyNum: number;
  title: string;
  subtitle: string;
  startedAt: Date;
  endedAt?: Date;
  hidePeriod?: boolean;
  content: string;
};

export default function MainHistoryItem(props: Props) {
  // const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "-40% 0% -60%",
  //   };

  //   const observer = new IntersectionObserver((items) => {
  //     if (items.length === 0) return;
  //     const item = items[0];

  //     if (item.isIntersecting) {
  //       setIsActive(true);
  //     } else {
  //       setIsActive(false);
  //     }
  //   }, observerOptions);

  //   const item = document.getElementById(
  //     `main-history_${props.historyNum}-divider-circle`
  //   );

  //   item && observer.observe(item);

  //   return () => {
  //     item && observer.unobserve(item);
  //   };
  // }, [props.historyNum]);
  return (
    <div
      id={`main-history_${props.historyNum}-item`}
      className="w-full h-fit flex flex-row justify-start items-stretch gap-8"
    >
      <div
        id={`main-history_${props.historyNum}-year`}
        className="w-20 h-fit px-3 py-1 bg-black rounded-xl"
      >
        <p className="text-base font-bold text-white text-center">
          {props.startedAt.getFullYear()}
        </p>
      </div>
      <div
        id={`main-history_${props.historyNum}-divider`}
        className="flex flex-col items-center"
      >
        <MainHistoryItemCircle
          id={`main-history_${props.historyNum}-divider-circle`}
          isActive={false}
          className={`my-1 w-6 h-6`}
        />
        <div
          id={`main-history_${props.historyNum}-divider-stroke`}
          className="w-1 h-full grow rounded-full bg-lightGray"
        />
      </div>
      <div
        id={`main-history_${props.historyNum}-main`}
        className="w-full h-full flex flex-col justify-start items-stretch gap-3 pb-9"
      >
        <p
          id={`main-history_${props.historyNum}-title`}
          className="text-2xl font-bold text-black"
        >
          {props.title}
        </p>
        <p
          id={`main-history_${props.historyNum}-subtitle`}
          className="text-base font-bold text-black"
        >
          {props.subtitle}
        </p>
        <p
          id={`main-history_${props.historyNum}-period`}
          className="w-full flex flex-row justify-start items-center text-base font-normal text-black"
        >
          {DateUtil.dateToYMString(props.startedAt)}&nbsp;~&nbsp;
          {props.endedAt
            ? `${DateUtil.dateToYMString(props.endedAt!)}`
            : `진행 중`}
          &nbsp;
          {!props.hidePeriod &&
            `(${DateUtil.getYMDiff(props.startedAt, props.endedAt)})`}
        </p>
        <p
          id={`main-history_${props.historyNum}-content`}
          className="px-4 py-3 w-full text-base font-medium text-black whitespace-pre-wrap leading-loose"
        >
          {props.content}
        </p>
      </div>
      {/* {isMount && (
        <div
          className={`w-full px-9 
            ${isMount ? "animate-fadeIn" : "animate-fadeOut"}`}
        >
          <p
            id={`main-history_${props.historyNum}-content`}
            className={`px-6 py-6 border-base border-black/70 
            rounded-3xl w-full text-sm font-normal 
            text-black text-center bg-white whitespace-pre-line
            `}
          >
            <span>{props.content}</span>
          </p>
        </div>
      )} */}
    </div>

    // <div
    //   id={`main-history_${props.historyNum}-item`}
    //   className="w-full flex flex-col items-center gap-12"
    // >
    //   <div
    //     id={`main-history_${props.historyNum}-header`}
    //     className="w-full h-fit flex flex-col items-center gap-2"
    //   >
    //     <h3
    //       id={`main-history_${props.historyNum}-title`}
    //       className="w-full flex flex-row gap-2 justify-center items-center text-lg font-bold"
    //     >
    //       <span className="text-blue">{props.title}</span>
    //       <span className="text-black">{props.subtitle}</span>
    //     </h3>
    //     <p
    //       id={`main-history_${props.historyNum}-period`}
    //       className="w-full flex flex-row justify-center items-center text-base font-normal text-black"
    //     >
    //       {DateUtil.dateToYMString(props.startedAt)}&nbsp;~&nbsp;
    //       {props.endedAt
    //         ? `${DateUtil.dateToYMString(props.endedAt!)}`
    //         : `진행 중`}
    //       &nbsp;
    //       {!props.hidePeriod &&
    //         `(${DateUtil.getYMDiff(props.startedAt, props.endedAt)})`}
    //     </p>
    //   </div>
    //   {isMount && (
    //     <div
    //       className={`w-full px-9
    //         ${isMount ? "animate-fadeIn" : "animate-fadeOut"}`}
    //     >
    //       <p
    //         id={`main-history_${props.historyNum}-content`}
    //         className={`px-6 py-6 border-base border-black/70
    //         rounded-3xl w-full text-sm font-normal
    //         text-black text-center bg-white whitespace-pre-line
    //         `}
    //       >
    //         <span>{props.content}</span>
    //       </p>
    //     </div>
    //   )}
    // </div>
  );
}
