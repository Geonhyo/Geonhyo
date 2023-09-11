import Skill from "@/model/skill";
import Image from "next/image";

type Props = {
  id: string;
  skill: Skill;
  className?: string;
};

export default function SkillButton({ id, skill, className }: Props) {
  const s3 = process.env.NEXT_PUBLIC_S3!;
  const buttonStyle = {
    backgroundColor: skill.colorHex,
  };
  return (
    <button
      type="button"
      title={skill.label}
      id={id}
      style={buttonStyle}
      className={`${className} shrink-0 w-fit h-fit px-4 py-1 rounded-lg flex flex-row gap-2 items-center`}
    >
      <Image
        src={`${s3}/logo/${skill.value}.png`}
        alt={skill.label}
        width={24}
        height={24}
      />
      <p
        className={`w-full text-base font-normal ${
          skill.isDark ? "text-white" : "text-black"
        }`}
      >
        {skill.label}
      </p>
    </button>
  );
}
