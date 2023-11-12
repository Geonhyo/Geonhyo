import { PostSeries } from "@/model/post-series";
import Image from "next/image";
// import SearchIcon from "@/public/icons/search.svg";
// import ChevronDownBlueIcon from "@/public/icons/chevron-down-blue.svg";

type Props = {
  categoryList: PostSeries[];
};

export default function BlogHeaderSearch(props: Props) {
  return (
    <div
      id="blog-header-profile"
      className="w-60 shrink-0 flex flex-row justify-end gap-3"
    >
      <button
        type="button"
        id="blog-search-button"
        className="w-10 h-10 p-2 rounded-xl bg-white border-2 border-darkGray"
      >
        {/* <Image src={SearchIcon} alt="Search" width={24} height={24} /> */}
      </button>

      <button
        type="button"
        id="blog-category-dropdown"
        className="h-fit shrink-0 px-3 py-2 rounded-xl inner-border-2 inner-border-blue flex flex-row gap-3"
      >
        <p className="w-24 shrink-0 text-base font-bold text-blue text-start">
          SERIES
        </p>
        {/* <Image src={ChevronDownBlueIcon} alt="Open" width={24} height={24} /> */}
      </button>
    </div>
  );
}
