import { Skill } from "@/model/resume";

const mainSkills: Skill[] = [
  {
    title: "Flutter/Dart",
    description: "다양한 프로젝트 및 프로덕트에서 사용해보았습니다",
  },
  {
    title: "NEXT.JS / React",
    description: "최근 주로 사용하고 있는 프레임워크 및 라이브러리입니다",
  },
  {
    title: "Typescript",
    description: "항상 Typescript로 JS를 사용하였습니다",
  },
  {
    title: "Figma",
    description: "협업 뿐만 아니라 직접 디자인 용도로도 사용하였습니다",
  },
  {
    title: "Firebase",
    description: "소울유니버스 근무 시 주로 사용하였습니다",
  },
  {
    title: "TailwindCSS",
    description: "다양한 프로젝트에서 사용중입니다",
  },
];

const subSkills: Skill[] = [
  { title: "AWS", description: "주로 EC2 / RDS / S3 를 사용합니다" },
  {
    title: "SQL",
    description: "주로 MariaDB를 사용하며 기본적인 문법을 활용할 수 있습니다",
  },
  {
    title: "Express / Node.js",
    description: "직접 제작하는 서버에서 사용하였습니다",
  },
];

export default function ResumeSkill() {
  return (
    <div className="w-full max-w-full flex flex-col items-center sm:items-start">
      <h3 className="text-2xl font-black mb-6 text-neonLime"># 기술</h3>
      <div className="w-full max-w-full flex flex-col lg:flex-row gap-9 lg:gap-4">
        <div className="w-full max-w-full flex flex-col gap-4 divide-y-base">
          <p>
            <span className="text-2xl font-black">MAIN TECH</span>
            <br />
            <span className="text-white/70">
              주로 사용중이며 능숙하게 사용가능합니다
            </span>
          </p>
          <ul className="w-full max-w-full flex flex-col gap-3 pt-4">
            {mainSkills.map((skill, idx) => (
              <p key={idx}>
                <span className="font-bold">{skill.title}</span>
                <br />
                <span className="text-white/70">{skill.description}</span>
              </p>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-full flex flex-col gap-4 divide-y-base">
          <p>
            <span className="text-2xl font-black">SUB TECH</span>
            <br />
            <span className="text-white/70">필요 시에 자주 사용했습니다</span>
          </p>
          <ul className="w-full max-w-full flex flex-col gap-3 pt-4">
            {subSkills.map((skill, idx) => (
              <p key={idx}>
                <span className="font-bold">{skill.title}</span>
                <br />
                <span className="text-white/70">{skill.description}</span>
              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
