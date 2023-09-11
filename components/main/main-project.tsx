import { ProjectPreview } from "@/model/project";
import MainProjectList from "@/components/main/project/main-project-list";
import { Suwannaphum } from "next/font/google";

const suwannaphum = Suwannaphum({
  weight: "900",
  subsets: ["latin"],
});

type Props = {
  projectList: ProjectPreview[];
};

export default function MainProject(props: Props) {
  return (
    <div
      id={`main-project`}
      className="flex flex-col w-full max-w-screen-xl justify-start items-stretch"
    >
      <div
        id="main-project-section"
        className="flex flex-col px-9 py-24 gap-12"
      >
        <h3
          id="main-project-section-title"
          className={`${suwannaphum.className} text-blue text-center text-5xl leading-tight py-16`}
        >
          No One is Bigger than the Team
        </h3>
        <div
          id="main-project-header"
          className="w-full flex flex-row gap-6 items-center"
        >
          <hr className="border-base border-blue w-full" />
          <h2
            id="main-project-title"
            className="grow-0 shrink-0 flex flex-row gap-2 items-center text-2xl font-bold"
          >
            <span className="text-blue">03.</span>
            <span className="text-black">How I Developed?</span>
          </h2>
        </div>
        <p
          id="main-project-intro"
          className="text-lg font-bold text-black text-center"
        >
          &quot;같이&quot;의 가치를 압니다.
          <br />
          혼자 100을 할 수 있는 사람보다, 80을 하더라도
          <br />
          다른 이들로부터 40을 이끌어내는 사람이 되고 싶습니다.
          <br />
          <br /> 개인 작업보다는
          <span className="text-blue">팀 단위의 협업</span>
          으로 이루어지는 프로젝트를 선호합니다.
          <br />
          끊임없는 커뮤니케이션 속에서 언제나 최선의 결정을 하기 위해
          노력합니다.
        </p>
        <hr className="w-20 border-darkGray border-2 self-center" />
        <p className="text-base font-bold text-black text-center">
          {props.projectList.length}개의 프로젝트가 있습니다
        </p>
        {/* @ts-expect-error Async Server Component */}
        <MainProjectList projectList={props.projectList} />
      </div>
    </div>
  );
}
