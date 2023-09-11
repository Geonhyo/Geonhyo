import SkillButton from "@/components/button/skill-button";
import Skill from "@/model/skill";

type Props = {
  id: string;
  skill: Skill;
};

export default function MainSkillItem({ id, skill }: Props) {
  return (
    <div id={id} className="w-full flex flex-col items-center gap-4">
      <SkillButton id={`${id}_button`} skill={skill} className="shadow-md" />
      <p
        id={`${id}_description`}
        className="text-center text-black text-base font-medium whitespace-pre-wrap leading-loose"
      >
        {skill.description}
      </p>
    </div>
  );
}
