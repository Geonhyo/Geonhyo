"use client";

import Image from "next/image";
// import OrderMoreIcon from "@/public/icons/order-more.svg";
import { useState } from "react";

type Props = {
  setOrderValue: (value: "recent" | "popular") => void;
};

type Order = {
  label: string;
  value: "recent" | "popular";
};

const orderList = [
  {
    label: "최신순",
    value: "recent",
  },
  {
    label: "인기순",
    value: "popular",
  },
] as Order[];

export default function BlogPreviewOrderButton(props: Props) {
  const [order, setOrder] = useState<Order>(orderList[0]);

  const changeOrder = (num: number) => {
    if (num < 0 || num >= orderList.length) return;
    setOrder(orderList[num]);
    props.setOrderValue(orderList[num].value);
  };

  return (
    <button
      type="button"
      id="blog-post-order"
      className="h-fit w-fit px-6 py-1 gap-2 flex flex-row items-center"
      // onClick={}
    >
      <p className="text-lightBlack text-base font-bold">{order.label}</p>
      {/* <Image src={OrderMoreIcon} alt="정렬 순서 선택" width={16} height={16} /> */}
    </button>
  );
}
