import MainHistory from "@/components/main/main-history";
import MainIntroduce from "@/components/main/main-introduce";
import MainProject from "@/components/main/main-project";
import MainPeerReview from "@/components/main/main-peer-review";
import { PeerReview } from "@/model/peer-review";
import { ProjectPreview } from "@/model/project";
import MainBanner from "@/components/main/main-banner";
import Skill from "@/model/skill";

const getProjectPreviewList = async (): Promise<ProjectPreview[]> => {
  const data = [
    {
      projectId: 2,
      name: "photly",
      title: "Photly,\n커플 데일리 셀카 공유 서비스",
      thumbnailUrl: "image/project/photly_thumbnail.png",
      description:
        "매일 주어지는 미션에 맞는 각자의 셀카를 공유해보세요\n서로에 대해 더욱 잘 알아가는 시간을 가질 수 있게 될거에요",
      startedAt: new Date(2022, 3),
      endedAt: new Date(2022, 5),
      viewNum: 124,
      likeNum: 15,
      memberNum: 2,
      isOnService: true,
      isTeamLeader: true,
      appStoreUrl: "https://apps.apple.com/kr/app/photly/id1628693332",
      googleStoreUrl:
        "https://play.google.com/store/apps/details?id=com.zagmar.couple_seflie_app",
      githubUrl: "https://github.com/Zagmar/photly-client",
      url: "https://www.naver.com",
      tags: ["프론트엔드 개발", "디자인"],
      tasks: [
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
        "IOS/Andorid 배포",
      ],
      skills: [
        {
          skillId: 2,
          priority: 1,
          label: "Figma",
          value: "figma",
          isDark: true,
          colorHex: "#333333",
          score: 9,
          description:
            "피그마를 통해 사이드 프로젝트 디자인을 직접 진행하였습니다.",
        },
        {
          skillId: 1,
          priority: 2,
          label: "Flutter",
          value: "flutter",
          isDark: false,
          colorHex: "#F5F5F5",
          score: 9,
          description:
            "프로젝트 뿐만 아니라 창업 멤버, 스타트업에서도 사용한 경험이 있습니다.\n능숙하게 사용 가능합니다.",
        },
        {
          skillId: 3,
          priority: 3,
          label: "AWS",
          value: "aws",
          isDark: true,
          colorHex: "#2A3545",
          score: 6,
          description:
            "개인적인 프로젝트 용도로 주로 사용합니다.\nEC2, RDS, Cognito, S3 등의 기본적인 몇가지 기능을 사용할 수 있습니다.",
        },
        {
          skillId: 4,
          priority: 4,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
      ],
      roles: [
        {
          roleId: 1,
          priority: 1,
          label: "프론트엔드 개발",
          value: "frontend-develop",
          colorHex: "#D3E5EF",
        },
        {
          roleId: 2,
          priority: 2,
          label: "디자인",
          value: "design",
          colorHex: "#FFCDC7",
        },
      ],
    },
    {
      projectId: 1,
      name: "photly",
      title: "Photly, 커플 데일리 셀카 공유 서비스",
      thumbnailUrl: "image/project/photly_thumbnail.png",
      description:
        "매일 주어지는 미션에 맞는 각자의 셀카를 공유해보세요\n서로에 대해 더욱 잘 알아가는 시간을 가질 수 있게 될거에요",
      startedAt: new Date(2022, 3),
      endedAt: new Date(2022, 5),
      viewNum: 124,
      likeNum: 15,
      memberNum: 2,
      isOnService: true,
      isTeamLeader: false,
      githubUrl: "https://github.com/Zagmar/photly-client",
      tags: ["프론트엔드 개발", "디자인"],
      tasks: ["IOS/Andorid 배포", "IOS/Andorid 배포", "IOS/Andorid 배포"],
      skills: [
        {
          skillId: 2,
          priority: 1,
          label: "Figma",
          value: "figma",
          isDark: true,
          colorHex: "#333333",
          score: 9,
          description:
            "피그마를 통해 사이드 프로젝트 디자인을 직접 진행하였습니다.",
        },
        {
          skillId: 1,
          priority: 2,
          label: "Flutter",
          value: "flutter",
          isDark: false,
          colorHex: "#F5F5F5",
          score: 9,
          description:
            "프로젝트 뿐만 아니라 창업 멤버, 스타트업에서도 사용한 경험이 있습니다.\n능숙하게 사용 가능합니다.",
        },
        {
          skillId: 3,
          priority: 3,
          label: "AWS",
          value: "aws",
          isDark: true,
          colorHex: "#2A3545",
          score: 6,
          description:
            "개인적인 프로젝트 용도로 주로 사용합니다.\nEC2, RDS, Cognito, S3 등의 기본적인 몇가지 기능을 사용할 수 있습니다.",
        },
        {
          skillId: 4,
          priority: 4,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 5,
          priority: 5,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 6,
          priority: 6,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 7,
          priority: 7,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 8,
          priority: 8,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 9,
          priority: 9,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
      ],
      roles: [
        {
          roleId: 1,
          priority: 1,
          label: "프론트엔드 개발",
          value: "frontend-develop",
          colorHex: "#D3E5EF",
        },
        {
          roleId: 2,
          priority: 2,
          label: "디자인",
          value: "design",
          colorHex: "#FFCDC7",
        },
      ],
    },
    {
      projectId: 3,
      name: "photly",
      title: "Photly, 커플 데일리 셀카 공유 서비스",
      thumbnailUrl: "image/project/photly_thumbnail.png",
      description:
        "매일 주어지는 미션에 맞는 각자의 셀카를 공유해보세요\n서로에 대해 더욱 잘 알아가는 시간을 가질 수 있게 될거에요",
      startedAt: new Date(2022, 3),
      endedAt: new Date(2022, 5),
      viewNum: 124,
      likeNum: 15,
      memberNum: 2,
      isOnService: false,
      isTeamLeader: true,
      githubUrl: "https://github.com/Zagmar/photly-client",
      tags: ["프론트엔드 개발", "디자인"],
      tasks: ["IOS/Andorid 배포", "IOS/Andorid 배포", "IOS/Andorid 배포"],
      skills: [
        {
          skillId: 2,
          priority: 1,
          label: "Figma",
          value: "figma",
          isDark: true,
          colorHex: "#333333",
          score: 9,
          description:
            "피그마를 통해 사이드 프로젝트 디자인을 직접 진행하였습니다.",
        },
        {
          skillId: 1,
          priority: 2,
          label: "Flutter",
          value: "flutter",
          isDark: false,
          colorHex: "#F5F5F5",
          score: 9,
          description:
            "프로젝트 뿐만 아니라 창업 멤버, 스타트업에서도 사용한 경험이 있습니다.\n능숙하게 사용 가능합니다.",
        },
        {
          skillId: 3,
          priority: 3,
          label: "AWS",
          value: "aws",
          isDark: true,
          colorHex: "#2A3545",
          score: 6,
          description:
            "개인적인 프로젝트 용도로 주로 사용합니다.\nEC2, RDS, Cognito, S3 등의 기본적인 몇가지 기능을 사용할 수 있습니다.",
        },
        {
          skillId: 4,
          priority: 4,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 5,
          priority: 5,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
        {
          skillId: 6,
          priority: 6,
          label: "Firebase",
          value: "firebase",
          isDark: false,
          colorHex: "#FFFFFF",
          score: 10,
          description:
            "스타트업에서 소울톡을 개발할 당시에 백엔드로 사용하였습니다.\nFirestore 뿐만 아니라 Functions, Authentication, FCM 등을 능숙하게 사용할 수 있습니다.",
        },
      ],
      roles: [
        {
          roleId: 1,
          priority: 1,
          label: "프론트엔드 개발",
          value: "frontend-develop",
          colorHex: "#D3E5EF",
        },
        {
          roleId: 2,
          priority: 2,
          label: "디자인",
          value: "design",
          colorHex: "#FFCDC7",
        },
      ],
    },
  ];

  return data;
};

const getPeerReviewList = async (): Promise<PeerReview[]> => {
  const data = [
    {
      peerReviewId: 1,
      priority: 1,
      content:
        "건효님은 무엇보다 성실하고 창의적인 개발자입니다.\n6개월이라는 짧은 시간동안 매우 많이 성장하며 저희 서비스에 좋은 영향을 남기고 갔습니다.\n건강한 QA 문화를 심어주었고 사용자 중심적인 사고로 많은 기여를 하였습니다.",
      description: "소울유니버스 CEO",
      name: "김수영",
    },
    {
      peerReviewId: 2,
      priority: 2,
      content:
        "건효님은 무엇보다 성실하고 창의적인 개발자입니다.\n6개월이라는 짧은 시간동안 매우 많이 성장하며 저희 서비스에 좋은 영향을 남기고 갔습니다.\n건강한 QA 문화를 심어주었고 사용자 중심적인 사고로 많은 기여를 하였습니다.",
      description: "소울유니버스 CPO",
      name: "안지환",
    },
  ];

  return data;
};

const getSkillList = async (): Promise<Skill[]> => {
  const data = [
    {
      skillId: 2,
      priority: 1,
      label: "Figma",
      value: "figma",
      isDark: true,
      colorHex: "#333333",
      score: 9,
      description:
        "Figma 의 디자인 시안을 해석하고 구현하는 작업 능숙\nAutoLayout을 활용하여 개발 친화적인 디자인 능숙",
    },
    {
      skillId: 1,
      priority: 2,
      label: "Flutter",
      value: "flutter",
      isDark: false,
      colorHex: "#F5F5F5",
      score: 9,
      description:
        "다양한 플랫폼의 어플리케이션을 제작하기 위해 매우 능숙하게 사용 가능\nProvider, GetX 등의 상태 관리를 통해 데이터의 동기화 및 사용성 개선\n코드의 재사용성을 높이고 테스트 코드 작성을 위해 MVVM 아키텍처를 선호",
    },
    {
      skillId: 3,
      priority: 3,
      label: "AWS",
      value: "aws",
      isDark: true,
      colorHex: "#2A3545",
      score: 6,
      description:
        "EC2를 통한 클라이언트 및 서버 배포 경험 有\nRDS, S3를 통한 클라우드 환경에서의 데이터 관리 능숙\nCognito와 Amplify를 통해 사용자 권한 관리 경험 有\n다양한 AWS의 기능을 활용하기 위하여 노력",
    },
    {
      skillId: 4,
      priority: 4,
      label: "Firebase",
      value: "firebase",
      isDark: false,
      colorHex: "#FFFFFF",
      score: 10,
      description:
        "Firebase의 Firestore와 Storage 등의 클라우드 DB의 사용에 능숙\nFunctions를 통한 마이크로 서비스 개발 경험 有\nFCM, Dynamic Link 등의 부가 서비스 사용 경험 有",
    },
  ];

  return data;
};

export default async function MainPage() {
  const projectList = await getProjectPreviewList();
  const peerReviewList = await getPeerReviewList();
  const skillList = await getSkillList();

  return (
    <main
      id="main"
      className="w-full bg-white flex flex-col justify-start items-center h-fit"
    >
      <MainBanner />
      <MainIntroduce skillList={skillList} />
      <MainHistory />
      <MainPeerReview peerReviewList={peerReviewList} />
      <MainProject projectList={projectList} />
    </main>
  );
}
