import MainSkillList from "@/components/main/skill/main-skill-list";
import Skill from "@/model/skill";

type Props = {
  skillList: Skill[];
};

export default function MainIntroduce({ skillList }: Props) {
  return (
    <div
      id={`main-introduce`}
      className="flex flex-col w-full max-w-screen-xl justify-start items-stretch px-9 py-24 gap-20"
    >
      <div id="main-introduce-section" className="flex flex-col gap-12">
        <div
          id="main-introduce-header"
          className="w-full flex flex-row gap-6 items-center"
        >
          <h2
            id="main-introduce-title"
            className="grow-0 shrink-0 flex flex-row gap-2 items-center text-2xl font-bold"
          >
            <span className="text-blue">01.</span>
            <span className="text-black">Who Am I?</span>
          </h2>
          <hr className="border-base border-blue w-full" />
        </div>
        <p
          id="main-introduce-content-introduce"
          className="text-lg font-bold text-black text-center"
        >
          <span className="text-xl font-bold">
            💬 넌 어떤 개발자야?
            <br />
            <br />
          </span>
          <span>
            개발자라면 기술적인 능력이 뛰어나며 기술적 관점에서 서비스를
            책임지는 사람들입니다.
            <br />
            그러나 제가 지향하는 뛰어난 개발자란,
            <br />
            기술을 먼저 생각하는 개발자가 아닌,
            <span className="text-blue">
              사용자를 위해 기술을 효과적으로 사용할 줄 아는
            </span>
            <br />
            바로 그런 개발자입니다.
            <br />
            <br />
          </span>
          <span>
            기술 뿐만 아니라 기획부터 서비스 운영까지 전반적인 부분에 관심을
            가지고
            <br />
            언제나 사용자를 위한 더 나은 방법을 찾기 위하여 성장하는
            <br />
            프론트엔드 개발자 박건효입니다.
          </span>
        </p>
      </div>
      <hr className="w-20 border-darkGray border-2 self-center" />
      <div id="main-skills" className="flex flex-col gap-12">
        <h2
          id="main-skills-title"
          className="w-full text-center grow-0 shrink-0 text-2xl font-bold"
        >
          Skills
        </h2>
        <MainSkillList skillList={skillList} />
      </div>
    </div>
  );
}
