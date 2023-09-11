import MainHistoryList from "@/components/main/history/main-history-list";

export default function MainHistory() {
  return (
    <div
      id={`main-history`}
      className="flex flex-col w-full max-w-screen-xl justify-start items-stretch px-9 py-24 gap-20"
    >
      <div
        id="main-history-section"
        className="flex flex-col gap-12 items-center"
      >
        <div
          id="main-history-header"
          className="w-full flex flex-row gap-6 items-center"
        >
          <hr className="border-base border-blue w-full" />
          <h2
            id="main-history-title"
            className="grow-0 shrink-0 flex flex-row gap-2 items-center text-2xl font-bold"
          >
            <span className="text-blue">02.</span>
            <span className="text-black">What I Did?</span>
          </h2>
          <hr className="border-base border-blue w-full" />
        </div>
        <MainHistoryList />
      </div>
    </div>
  );
}
