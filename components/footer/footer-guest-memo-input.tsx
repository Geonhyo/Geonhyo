"use client";
import SubmitIcon from "@/public/icons/submit.svg";
import Image from "next/image";
import { useState } from "react";

export default function FooterGuestMemoInput() {
  const [guestMemo, setGuestMemo] = useState<string>();
  const submit = () => {};
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setGuestMemo(e.target.value);
  };
  return (
    <div
      id="footer-guest-memo-input"
      className="w-[672px] rounded-full border-base border-black/70 bg-white pl-6 pr-3 py-2 flex flex-row gap-6"
    >
      <input
        id="footer-guest-memo-input-field"
        type="text"
        placeholder="방명록 작성하기"
        value={guestMemo}
        onChange={inputHandler}
        className="w-full text-sm font-normal text-black outline-none bg-transparent"
      />
      <button
        id="footer-guest-memo-input-submit"
        type="button"
        className="rounded-full bg-blue p-3"
        onClick={submit}
      >
        <Image src={SubmitIcon} alt="방명록 제출" width={16} height={16} />
      </button>
    </div>
  );
}
