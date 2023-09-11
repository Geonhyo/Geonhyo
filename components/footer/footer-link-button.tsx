import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  label: string;
  href: string;
};

export default function FooterLinkButton(props: Props) {
  return (
    <div
      id="footer-link-button"
      className="flex flex-col justify-center items-center gap-2"
    >
      <Link
        href={props.href}
        id="footer-link-button-icon"
        className="rounded-full border-base border-black/70 shadow-sm p-4 bg-white"
      >
        <Image src={props.src} alt={props.label} width={32} height={32} />
      </Link>
      <p
        id="footer-link-button-label"
        className="text-center text-base font-bold text-black"
      >
        {props.label}
      </p>
    </div>
  );
}
