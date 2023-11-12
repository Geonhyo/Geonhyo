import Image from "next/image";
import GeonhyoProfile from "@/public/geonhyo-profile.png";

const tags = ["도전하기", "소통하기", "즐기기"];

export default function ResumeHeader() {
  return (
    <div className="w-full max-w-full flex flex-col">
      <h3 className="text-3xl font-medium tracking-widest text-center text-neonLime mb-6">
        WEB & APP DEVELOPER
      </h3>
      <div className="w-full max-w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-6">
        <div className="relative rounded-xl overflow-hidden w-48 h-auto aspect-square">
          <Image
            src={GeonhyoProfile}
            alt="Profile Image"
            fill
            className=" object-cover"
          />
        </div>
        <div className="flex flex-col text-center lg:text-start">
          <h2 className="text-xl font-bold mb-2 tracking-widest">
            PARK GEONHYO
          </h2>
          <h1 className="text-5xl font-black tracking-widest mb-2">박건효</h1>
          <p>서울, 대한민국</p>
        </div>
      </div>
      <p className="text-2xl font-black text-neonLime mb-4 text-center">
        # MY WORD
      </p>
      <ul className="w-full max-w-full flex flex-wrap justify-center gap-2 mb-12">
        {tags.map((tag, idx) => (
          <li
            key={idx}
            className="rounded-xl px-4 py-1 bg-neonLime text-black font-black"
          >
            #{tag}
          </li>
        ))}
      </ul>
      <ul className="w-full max-w-full flex flex-col gap-4 items-center text-start sm:text-center text-base">
        <p>
          개발 영역 뿐만 아니라 UX/UI 분야에도 관심이 많으며&nbsp;
          <br className="hidden sm:inline" />
          언제나 성장을 갈망하는 프론트앤드 개발자&nbsp;
          <span className="text-neonLime font-black">박건효</span>입니다
        </p>
        <p>
          혼자보다는 팀 단위의 협업으로 이루어지는 프로젝트를 선호하며,&nbsp;
          <br className="hidden sm:inline" />
          프로젝트에 대한 열정으로&nbsp;
          <span className="font-bold text-neonLime">
            새롭게 도전하고 끊임없이 소통하는 것
          </span>
          &nbsp;을 좋아합니다.
        </p>
        <p>
          우연히 Flutter를 통해 UX/UI 및 프론트앤드 개발을 접하고&nbsp;
          <br className="hidden sm:inline" />
          현재는 NEXT.JS 및 React를 활용한 웹 개발을 즐기는 중입니다
        </p>
      </ul>
    </div>
  );
}
