import Image from "next/image";
import HeaderLogo from "@/public/logo/header-logo.svg";
import FooterNav from "@/components/footer/footer-nav";
import FooterLinkButton from "@/components/footer/footer-link-button";
import EmailIcon from "@/public/icons/email.svg";
import GithubIcon from "@/public/icons/github.svg";
import FooterGuestMemoInput from "@/components/footer/footer-guest-memo-input";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-screen flex flex-col items-center bg-background"
    >
      <div
        id="footer-contact"
        className="max-w-screen-xl h-[480px] px-9 flex flex-col justify-center items-center gap-6"
      >
        <p className="text-2xl font-bold text-center text-black">
          Get In Touch
        </p>
        <div
          id="footer-contact-link"
          className="flex flex-row justify-center items-center gap-6"
        >
          <FooterLinkButton
            src={EmailIcon}
            label="Email"
            href="https://www.naver.com"
          />
          <FooterLinkButton
            src={GithubIcon}
            label="Github"
            href="https://github.com/GeonhyoPark815"
          />
        </div>
        <p className="text-2xl font-bold text-center text-black">
          Geonhyo.com 에 방문해주셔서 감사합니다
        </p>

        <div
          id="footer-guset-memo"
          className="w-full flex flex-col items-center gap-2"
        >
          <FooterGuestMemoInput />
          <p className="text-sm font-normal text-black text-center">
            남겨주신 방명록 내용은 확인을 거쳐 배너에 노출됩니다
          </p>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="w-full px-9 py-4 flex flex-row items-center gap-10"
      >
        <Image
          id="main header-logo"
          src={HeaderLogo}
          alt="Geonhyo"
          title="박건효님의 개인 웹페이지입니다"
          className="w-25 h-full"
        />
        <FooterNav />
        <p className="shrink-0 text-xs font-normal text-black">
          Copyright 2023. 박건효 All pictures and contents cannot be copied
          without permission
        </p>
      </div>
    </footer>
  );
}
