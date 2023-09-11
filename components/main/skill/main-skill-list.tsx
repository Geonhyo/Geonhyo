import MainSkillItem from "@/components/main/skill/main-skill-item";
import Skill from "@/model/skill";

type Props = {
  skillList: Skill[];
};

export default function MainSkillList({ skillList }: Props) {
  return (
    <div
      id="main-skill-carousel"
      className="w-full flex flex-col items-center gap-9"
    >
      {skillList.map((skill, idx) => (
        <MainSkillItem
          key={`main_skill_${idx}`}
          id={`main_skill_${idx}`}
          skill={skill}
        />
      ))}
    </div>
  );
}
