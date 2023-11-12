import { Education } from "@/model/resume";

const educations: Education[] = [
  {
    year: 2014,
    main: "대구과학영재학교 고등학교",
    sub: "2017.02 졸업",
  },
  {
    year: 2017,
    main: "연세대학교 전기전자공학부",
    sub: "2024.06 졸업 예정",
  },
];

export default function ResumeEducation() {
  return (
    <div className="w-full max-w-full flex flex-col items-center sm:items-start">
      <h3 className="text-2xl font-black mb-6 text-neonLime"># 학력</h3>
      <ul className="w-full max-w-full flex flex-col gap-8">
        {educations.map((education, idx) => (
          <li
            key={idx}
            className="w-full max-w-full flex flex-col sm:flex-row items-center sm:items-start gap-6"
          >
            <p className="w-fit h-fit rounded-xl px-2 bg-white text-black font-bold">
              {education.year}
            </p>
            <div className="w-full flex flex-col lg:flex-row gap-1 lg:gap-4 items-center sm:items-start lg:items-center">
              <p className="text-xl font-bold">{education.main}</p>
              <p>
                <span className="hidden lg:inline">∙ </span>
                {education.sub}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
