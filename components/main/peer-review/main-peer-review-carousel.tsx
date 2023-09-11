"use client";
import { PeerReview } from "@/model/peer-review";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import ChevronRight from "@/public/icons/chevron-right.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  peerReviewList: PeerReview[];
};

export default function MainPeerReviewCarousel(props: Props) {
  const totalNum = props.peerReviewList.length;
  const peerReviewList = [...props.peerReviewList, props.peerReviewList[0]];
  const [currentIdx, setCurrentIdx] = useState(0);

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    if (currentIdx > totalNum) {
      carouselRef.current.style.transition = ``;
      carouselRef.current.style.transform = `translateX(0)`;
      setCurrentIdx(1);
      return;
    }

    if (currentIdx < 0) {
      carouselRef.current.style.transition = "";
      carouselRef.current.style.transform = `translateX(-${totalNum}00%)`;
      setCurrentIdx(totalNum - 1);
      return;
    }

    carouselRef.current.style.transition = `all 0.5s ease-in-out`;
    carouselRef.current.style.transform = `translateX(-${currentIdx}00%)`;
  }, [currentIdx, totalNum]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIdx, totalNum]);

  const nextButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIdx((prev) => prev + 1);
  };

  const prevButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIdx((prev) => prev - 1);
  };

  return (
    <div
      id="main-peer-reivew-carouel"
      className="relative w-screen max-w-screen-xl h-[480px] overflow-hidden"
    >
      <ul
        ref={carouselRef}
        id="main-peer-review-list"
        className="w-full h-full flex flex-row"
      >
        {peerReviewList.map((peerReview: PeerReview, idx: number) => (
          <li
            key={`${peerReview.peerReviewId}_${idx}`}
            id="main-peer-review-item"
            className="shrink-0 w-screen max-w-screen-xl h-full px-[120px] flex flex-col gap-6 justify-center items-center"
          >
            <p
              id="main-peer-review-content"
              className="w-full text-center text-lg font-normal text-black whitespace-pre-wrap"
            >
              {peerReview.content}
            </p>
            <p
              id="main-peer-review-peer-info"
              className="w-full text-center text-lg font-bold text-black"
            >{`${peerReview.description}, ${peerReview.name}`}</p>
          </li>
        ))}
      </ul>
      <div
        id="main-peer-review-left-section"
        className="absolute left-0 inset-y-0 h-full w-fit px-9 flex flex-col justify-center"
      >
        <button
          type="button"
          id="main-peer-review-previous-button"
          className="rounded-full border-base shadow-sm p-3 bg-white"
          onClick={prevButtonHandler}
        >
          <Image src={ChevronLeft} alt="이전으로" width={24} height={24} />
        </button>
      </div>
      <div
        id="main-peer-review-right-section"
        className="absolute right-0 inset-y-0 h-full w-fit px-9 flex flex-col justify-center"
      >
        <button
          type="button"
          id="main-peer-review-next-button"
          className="rounded-full border-base shadow-sm p-3 bg-white"
          onClick={nextButtonHandler}
        >
          <Image src={ChevronRight} alt="다음으로" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
