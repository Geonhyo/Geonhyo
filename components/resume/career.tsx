import { Career } from "@/model/resume";

const careers: Career[] = [
  {
    year: 2022,
    service: "앱드",
    company: "스타트업 크리에이틱",
    role: "창업팀 팀원",
    descriptions: [
      "∙ 앱드 어플리케이션 프론트엔드 개발 담당",
      "∙ 2022.09 ~ 2023.02 (5개월)",
      "∙ 앱드라마 및 영상툰 제작 및 제공 플랫폼 어플리케이션 서비스",
      "∙ 누적 사용자 약 300명의 초기 단계에서의 기획 및 개발 참여",
      // "∙ 3D Matrix를 활용한 앱드라마 편집 기능 개발",
    ],
  },
  {
    year: 2023,
    service: "소울톡",
    company: "(주) 소울유니버스",
    role: "현장실습 및 계약직 ",
    descriptions: [
      "∙ 소울톡 어플리케이션 프론트엔드 개발 담당",
      "∙ 2023.03 ~ 2023.08 (6개월)",
      "∙ 일대일 타로 채팅 및 음성 상담 어플리케이션 서비스",
      "∙ 어플리케이션의 성능 개선 및 코드 리팩토링, 신규 기능의 기획 및 개발 진행",
    ],
  },
];

export default function ResumeCareer() {
  return (
    <div className="w-full max-w-full flex flex-col items-center sm:items-start">
      <h3 className="text-2xl font-black mb-6 text-neonLime"># 경력</h3>
      <ul className="w-full max-w-full flex flex-col gap-8">
        {careers.map((career, idx) => (
          <li
            key={idx}
            className="w-full max-w-full flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
          >
            <p className="w-fit h-fit rounded-xl px-2 bg-white text-black font-bold">
              {career.year}
            </p>
            <div className="w-full flex flex-col gap-4 items-start">
              <div className="w-full max-w-full flex flex-col lg:flex-row gap-1 lg:gap-4 items-center sm:items-start lg:items-end">
                <p className="text-xl font-bold">{career.service}</p>
                <p className="font-medium text-lg">
                  <span className="hidden lg:inline">∙ </span>
                  {career.company} ∙ {career.role}
                </p>
              </div>
              <ul className="w-full max-w-full flex-col items-start rounded-xl px-6 py-4 border border-white">
                {career.descriptions.map((description, idx) => (
                  <p key={idx} className="text-white">
                    {description}
                  </p>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
