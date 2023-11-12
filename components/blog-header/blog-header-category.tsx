import { PostSeries } from "@/model/post-series";

type Props = {
  category: PostSeries;
};

export default function BlogHeaderCategory({ category }: Props) {
  return (
    <div
      id="blog-header-category"
      className="w-full flex flex-col gap-3 items-center"
    >
      <h2
        id="blog-header-category-label"
        className="text-center text-black text-4xl font-bold"
      >
        {category.label}
      </h2>
      <p
        id="blog-header-category-label"
        className="text-center text-darkGray text-base font-bold"
      >{`${category.num}개의 게시물이 있습니다`}</p>
    </div>
  );
}
