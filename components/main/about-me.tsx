import Image from "next/image";
import GeonhyoProfileImage from "@/public/geonhyo-profile.png";
import Link from "next/link";

export default function MainAboutMe() {
  return (
    <div
      id="about-me"
      className="w-full max-w-screen-lg min-h-screen h-fit flex flex-col items-center justify-center pt-24 pb-8 px-9"
    >
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start lg:items-end gap-9">
        <Image
          className="w-full h-auto max-w-[120px] lg:max-w-[300px] aspect-[3/4] object-cover rounded-lg"
          src={GeonhyoProfileImage}
          alt="Profile"
          priority={false}
          sizes="l"
        />
        <div className="w-full lg:w-fit flex flex-col gap-8">
          <h1 className="text-3xl font-black">{`" 나 또한 사용자임을 잊지 않기 "`}</h1>
          <p className="leading-relaxed break-words">
            제가 지향하는 뛰어난 개발자란,
            <br />
            최고의 기술만을 우선적으로 생각하는 개발자가 아닌
            <br />
            <span className="text-neonLime font-black tracking-wide">
              사용자를 위해 최선의 기술을 사용할 줄 아는
            </span>
            &nbsp;개발자입니다.
            <br />
            <br />
            안녕하세요,&nbsp;
            <span className="font-black">WEB & MOBILE FRONTEND</span>
            &nbsp;개발자 박건효입니다.
            <br />저 또한 한 명의 사용자임을 잊지 않고,&nbsp;
            <span className="font-black">사용자에게 최고의 서비스를 제공</span>
            할 것입니다.
            <br />
            <br />
            최고의 서비스를 제공하기 위해서는 최고의 팀이 필요하다고 생각합니다.
            <br />
            저는 혼자 120을 할 수 있는 사람보다,
            <br />
            <span className="text-neonLime font-black tracking-wide">
              소통과 이해
            </span>
            를 통해 모든 이들에게서 100 이상을 이끌어낼 수 있는 사람이 되고
            싶습니다.
            <br />
          </p>
          <Link
            className="rounded-full bg-neonLime w-fit px-6 py-2"
            href={"/resume"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="font-black text-black">이력 및 경력 보기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
