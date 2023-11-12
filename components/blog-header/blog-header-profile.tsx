import Image from "next/image";

type Props = {
  imageUrl: string;
  username: string;
  description: string;
};

export default function BlogHeaderProfile(props: Props) {
  return (
    <div id="blog-header-profile" className="w-60 shrink-0 flex flex-row gap-3">
      <Image
        id="blog-header-profile-image"
        src={props.imageUrl}
        alt="Profile Image"
        width={64}
        height={64}
        style={{ objectFit: "contain" }}
        className="rounded-full w-16 h-16 bg-darkGray"
      />
      <div className="w-full flex flex-col">
        <p
          id="blog-header-profile-username"
          className="text-black text-lg font-bold"
        >
          {props.username}
        </p>
        <p
          id="blog-header-profile-description"
          className="text-black text-base font-normal"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
