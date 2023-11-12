import Image from "next/image";
import GeonhyoImage from "@/public/geonhyo.png";
import MainBannerDownButton from "./banner-down-button";

export default function MainBanner() {
  return (
    <div
      id="banner"
      className="w-screen h-screen flex flex-col justify-center items-center gap-2"
    >
      <h1 className="z-10 text-5xl md:text-6xl lg:text-7xl font-bold">
        GEONHYO.COM
      </h1>
      <h2 className="z-10 text-xl md:text-2xl lg:text-3xl font-light tracking-widest">
        Frontend Developer
      </h2>
      <MainBannerDownButton />
      <Image
        className="absolute z-0 top-0 left-0 w-screen h-screen object-cover bg-gradient-to-b from-black to-white/30"
        src={GeonhyoImage}
        alt="Banner Image"
        priority
        sizes="100vw"
        fill
      />
    </div>
  );
}
