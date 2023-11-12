export default function MainSkills() {
  return (
    <div
      id="skills"
      className="w-full max-w-screen-lg flex flex-col pt-24 pb-8 px-9 gap-12 h-fit min-h-screen"
    >
      <div className="w-full max-w-full flex flex-col gap-4">
        <h2 className="text-3xl font-black self-center mb-9">{`< MAIN SKILL >`}</h2>
        <div className="w-full max-w-full flex flex-col gap-2">
          <p>
            <Dash />
            다양한 플랫폼에서의 개발 경험을 통해 서비스의 목적에 맞게 웹,
            어플리케이션 등의 적절한 형태로 구현할 수 있습니다
          </p>
          <p>
            <Dash />
            단순히 기획 및 디자인을 적용하는 것에 그치지 않고, 변수 발생 가능성
            등에 대해 고민하고 역으로 제안하며 협업을 진행합니다
          </p>
          <p>
            <Dash />
            언제나 디자이너 뿐만 아니라 다른 직군의 팀원들과의 소통에 적극적으로
            의견을 제시하며 서비스 개발에 참여합니다
          </p>
          <p>
            <Dash />
            적절한 라이브러리나 자체 함수를 활용하여 최적의 사용자 경험을
            제공하기 위해 많은 고민과 기술 습득 등의 공부를 하고 있습니다
          </p>
          <p>
            <Dash />
            협업이나 유지보수의 생산성 향상을 위해 클린 코드를 작성하기 위해
            노력합니다
          </p>
        </div>
      </div>
      <SkillItem
        title="WEB"
        contents={[
          <>
            <span className="font-bold">React / Next.js / Typescript</span>
            &nbsp;등, 서비스의 특성에 맞게 CSR/SSR을 적절하게 조합하여 개발을
            진행합니다
          </>,
          <>
            <span className="font-bold">
              CSS Module / StyledComponent / TailwindCSS
            </span>
            &nbsp;등, 협업 환경과 개발 일정 등을 고려하여 스타일링을 진행합니다
          </>,
          <>
            모바일 어플리케이션 개발 경험을 기반으로 일반적인 웹 뿐만 아니라,
            반응형 혹은 모바일 웹 등&nbsp;
            <span className="font-bold">디바이스 환경에 맞게</span>&nbsp;개발할
            수 있습니다
          </>,
        ]}
        labels={["HTML/CSS", "Typescript", "React", "NEXT.JS", "TailwindCSS"]}
      />
      <SkillItem
        title="MOBILE"
        contents={[
          <>
            크로스 플랫폼 프레임워크&nbsp;
            <span className="font-bold">Flutter</span>
            &nbsp;를 사용한 IOS/Andorid/Web 환경에서의 개발 경험이 있습니다
          </>,
          <>
            각 운영체제별 정책이나 권한, 보안 등을 대응하며 실제 운영 중인
            유지∙보수를 진행한 경험이 있습니다
          </>,
          <>
            Provider/GetX 상태관리 툴을 활용한 MVVM 아키텍처로의 운영 중인
            프로덕트의 리팩토링 경험이 있습니다
          </>,
          <>
            클래스의 분리를 통한 재사용성을 높이고 적절한 ViewModel의 관리를
            통한 성능 향상 경험이 있습니다
          </>,
        ]}
        labels={["Flutter", "AWS", "Firebase"]}
      />
      <SkillItem
        title="SERVER/DB"
        contents={[
          <>
            최적의 API를 설계하기 위해 적극적으로 백엔드 개발자와의 소통을
            참여합니다
          </>,
          <>
            Express / AWS / Firebase 를 활용한 간단한 백엔드 서버 및 SQL/NoSQL
            데이터베이스를 직접 구축하여 사용한 경험이 있습니다
          </>,
          <>
            인증 절차나 보안 등 사용자에게 좋은 서비스를 제공하기 위해 새로운
            지식을 적극적으로 습득하고 있습니다
          </>,
        ]}
        labels={[
          "MySQL",
          "Node.js",
          "Express",
          "AWS EC2/RDS",
          "Firebase Firestore/Functions",
        ]}
      />
      <SkillItem
        title="DESIGN"
        contents={[
          <>Figma를 통한 디자인 시안을 보고 동일하게 구현을 할 수 있습니다</>,
          <>
            Figma를 통해 직접 디자인을 진행해본 경험이 있으며, 그 경험을
            바탕으로 디자이너와 디자인 시스템 구축을 적극적으로 진행합니다
          </>,
        ]}
        labels={["Figma"]}
      />
    </div>
  );
}

type SkillItemProps = {
  title: string;
  contents: React.ReactNode[];
  labels: string[];
};

function SkillItem({ title, contents, labels }: SkillItemProps) {
  return (
    <div className="relative w-full max-w-full flex flex-col gap-2 px-6 pt-8 pb-4 rounded-3xl border border-white m-4">
      <p className="absolute top-[-21px] left-[-16px] w-fit pr-2 py-1 font-black text-2xl bg-black text-neonLime">
        {`< ${title} />`}
      </p>
      {contents.map((content, idx) => (
        <p key={idx}>
          <Dash />
          {content}
        </p>
      ))}
      <ul className="w-full h-fit max-w-full flex flex-wrap gap-2 mt-1 mb-3">
        {labels.map((label, idx) => (
          <li
            key={idx}
            className="rounded-lg px-4 py-1 border border-neonLime text-neonLime text-sm cursor-default hover:bg-neonLime hover:text-black"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dash() {
  return <span className="font-black text-neonLime">-&nbsp;&nbsp;</span>;
}
