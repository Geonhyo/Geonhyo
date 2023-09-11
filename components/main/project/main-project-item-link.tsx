import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  type: "github" | "url" | "appStore" | "googleStore";
  href: string;
};

const color = {
  dark: "#2A3545",
  light: "#F9F9F9",
};

const label = {
  github: "Github",
  appStore: "AppStore",
  googleStore: "GoogleStore",
  url: "Visit",
};

export default function MainProjectItemLink({ id, type, href }: Props) {
  const s3 = process.env.NEXT_PUBLIC_S3!;
  const buttonStyle = {
    backgroundColor: type === "github" ? color["dark"] : color["light"],
    color: type === "github" ? color["light"] : color["dark"],
  };
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={type}
      id={id}
      style={buttonStyle}
      className={`shrink-0 w-fit h-fit px-3 py-2 rounded-xl shadow-md flex flex-row gap-3 items-center`}
    >
      <Image src={`${s3}/logo/${type}.png`} alt={type} width={24} height={24} />
      <p className={`w-full text-lg font-bold`}>{label[type]}</p>
    </Link>
  );
}
