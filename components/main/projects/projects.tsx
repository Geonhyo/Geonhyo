import { MainProject } from "@/model/main-project";
import MainProjectSlider from "./projects-slider";

export default function MainProjects() {
  return (
    <div
      id="projects"
      className="w-full max-w-screen-lg flex flex-col justify-center items-center pt-24 pb-8 px-9 gap-12 h-fit min-h-screen"
    >
      <h2 className="text-3xl font-black self-center mb-9">{`< WHAT I DID? >`}</h2>
      <MainProjectSlider projects={data} />
    </div>
  );
}

const data: MainProject[] = [
  {
    id: 1,
    title: "SoulTalk",
    description: `∙ 1:1 타로 상담 서비스\n∙ 현장실습 및 계약직으로 참여\n∙ 어플리케이션의 성능 개선 및 코드 리팩토링, 신규 기능의 기획 및 개발 진행\n∙ 서버리스 및 일부 마이크로 서비스 사용하여 풀스택 역할로 참여`,
    skills: ["어플리케이션", "Flutter", "Firebase", "Agora"],
    imageUrl: "/images/projects/1.png",
    iosUrl:
      "https://apps.apple.com/kr/app/%EC%86%8C%EC%9A%B8%ED%86%A1-1-1-%EC%B1%84%ED%8C%85-%ED%86%B5%ED%99%94-%ED%83%80%EB%A1%9C-%EC%83%81%EB%8B%B4/id6444065022",
    aosUrl:
      "https://play.google.com/store/apps/details?id=kr.co.soultalk.app&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "GEONHYO.COM",
    description: `∙ 개인 웹페이지 제작 프로젝트\n∙ 빠른 시간내에 높은 완성도를 위하여 TailwindCSS 적극 사용\n∙ 첫 페이지의 빠른 로드 및 검색엔진최적화를 위하여 Next.js를 활용한 SSR로 제작`,
    skills: ["기획/디자인", "반응형웹", "Next.js", "Typescript", "TailwindCSS"],
    imageUrl: "/images/projects/2.png",
    webUrl: "https://geonhyo.com",
  },
  {
    id: 3,
    title: "We Rule The World",
    description:
      "∙ 디자인과 졸업 전시 작품 의뢰 제작\n∙ 피그마에 구현된 디자인 100% 동일하게 반영\n∙ 첫 페이지 및 결과 페이지는 SSR, 나머지는 CSR를 활용하여 최적화",
    skills: ["모바일웹", "Next.js", "Typescript", "CSS Module"],
    imageUrl: "/images/projects/3.gif",
    webUrl: "https://we-rule-the-world.vercel.app",
  },
  {
    id: 4,
    title: "AppD",
    description:
      "∙ 앱으로 만드는 드라마 및 영상툰 제작 및 제공 플랫폼\n∙ 창업팀 어플리케이션 프론트엔드 개발 및 기획 참여\n∙ GetX를 사용한 상태관리 및 라우팅 관리\n∙ 3 Matrix를 활용한 화면 편집 기능 등 컨텐츠 제작 기능 메인 개발",
    skills: ["어플리케이션", "Flutter", "GetX", "Figma"],
    imageUrl: "/images/projects/4.gif",
    aosUrl:
      "https://play.google.com/store/apps/details?id=kr.co.appdrama.appdrama_front&pcampaignid=web_share",
    iosUrl: "https://apps.apple.com/kr/app/%EC%95%B1%EB%93%9C/id1620814487",
  },
];
