import MainHistoryItem from "@/components/main/history/main-history-item";

export default function MainHistoryList() {
  const example = "테스트입니다\n\n\nhello\n\n\n\n\nBye";
  return (
    <div
      id="main-history-content"
      className="w-full max-w-screen-md flex flex-col items-center"
    >
      <MainHistoryItem
        historyNum={0}
        title="연세대학교"
        subtitle="전기전자공학부"
        startedAt={new Date(2017, 2)}
        hidePeriod
        content={`연세대학교 전기전자공학부에 압학하여 코딩에 처음 흥미를 느끼게 되었습니다.`}
      />
      <MainHistoryItem
        historyNum={1}
        title="내 손안의 앱드라마, Appd"
        subtitle={`창업팀 “크리에이틱" Flutter 앱 개발자`}
        startedAt={new Date(2022, 8)}
        endedAt={new Date(2023, 1)}
        content={` • API 명세서 작성을 통한 백엔드 개발자와의 협업\n • 활용한 MVVM 디자인 패턴으로의 리팩토링\n • Matrix 연산을 이용하여 등장 인물 및 아이템 등을 자유롭게 배치하고 편집할 수 있는 편집기 개발\n • 로컬 DB를 활용한 임시 저장 기능 등 신기능 개발\n • 디자이너 및 기획자와의 주 1회 정기 회의를 통한 UX/UI 개선`}
      />
      <MainHistoryItem
        historyNum={2}
        title="1:1 타로 상담 서비스, 소울톡 "
        subtitle={`스타트업 “소울 유니버스" Flutter 앱 개발자`}
        startedAt={new Date(2023, 2)}
        endedAt={new Date(2023, 7)}
        content={`현장 실습 프로그램을 통해 처음으로 학기 중 인턴을 하게 되었고, 해당 기간을 마치고 추가 근무 제의를 받아 방학까지 연장하여
          총 6개월 동안 Flutter 를 활용하여 앱의 프론트엔드 전반 및 백엔드 개발을 담당하였습니다.
          IOS 출시를 앞두고 많은 오류로 출시가 미뤄지고 있을 당시에 합류하여,
          앱의 초기 구동 및 로그인 과정, 홈화면 등에서 상태관리가 전혀 이루어지지 않아 리소스가 낭비되고 있던 레거시 코드를 제거하고
          적절한 실시간 데이터베이스 연동 및 상태관리를 통한 데이터 관리를 통해 성능을 개선하여 무사히 IOS 출시를 마쳤습니다.
          이후에는 실시간 상담을 위한 채팅방의 성능을 개선하기 위해 DB 구조를 개선하고, 사용자 경험을 높이기 위해 UX/UI의 개선하여 새롭게 개발하였습니다.
          DAU 수백-수천 명의 실제 운영되는 서비스를 직접 관리할 수 있었던 소중한 경험이었습니다.`}
      />
    </div>
  );
}
