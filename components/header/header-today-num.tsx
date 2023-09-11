"use client";

import { useEffect, useState } from "react";

type Props = {
  todayNum: number;
};

export default function HeaderToday(props: Props) {
  const [todayNum, setTodayNum] = useState(props.todayNum);
  useEffect(() => {
    // 1. 초기 랜더링 시 카운트 증가하는 함수 구현할 것
    // 2. 초기 랜더링 이후 IP 확인하고 DB에서 오늘의 방문자 Tabel에서 일치하는 IP를 찾고
    // 3. 없다면 1을 증가시키고, 있다면 또 방문하셨네요라는 알림 뜨도록 하기
    // 3. 1이 증가되면 숫자가 흔들리며 변하는 애니메이션 구현
  }, []);
  return <p>{todayNum}</p>;
}
