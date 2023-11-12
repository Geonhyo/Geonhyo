// import PostTagButton from "@/components/button/post-tag-button";
import { GetPostPreview } from "@/model/post";
import DateUtil from "@/utils/date-util";
import NumberUtil from "@/utils/number-util";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: GetPostPreview;
};

export default function BlogPreviewItem({ post }: Props) {
  const id = `blog-preview-item-${post.postId}`;
  return (
    <div id={id} className="w-full flex flex-col py-6 gap-3">
      <div
        id={`${id}-series`}
        className="flex flex-row gap-3 text-sm font-obld"
      >
        <button type="button">
          <p className="text-black">{post.series.label}</p>
        </button>
        <span className="text-darkGray">{`${post.seriesNum}번째 이야기`}</span>
      </div>
      <Link id={`${id}-title`} href={`/blog/${post.postId}`}>
        <p className="text-2xl font-bold text-black" title={post.title}>
          {post.title}
        </p>
      </Link>
      {post.thumbnailUrl && (
        <Link
          href={`/blog/${post.postId}`}
          id={`${id}-thumbnail-image`}
          className="my-3 rounded-xl w-full h-auto aspect-video"
        >
          <Image src={post.thumbnailUrl} alt="대표 이미지" />
        </Link>
      )}
      <p
        id={`${id}-content`}
        className="w-full text-base font-normal text-black line-clamp-2 text-ellipsis"
      >
        {post.content}
      </p>
      {post.tagList.length > 0 && (
        <div id={`${id}-tag-list`} className="mt-3 w-full flex flex-wrap gap-4">
          {/* {post.tagList.map((tag) => (
            <PostTagButton
              key={`${id}-tag-item-${tag.tagId}`}
              id={`${id}-tag-item-${tag.tagId}`}
              tag={tag}
            />
          ))} */}
        </div>
      )}
      <div
        id={`${id}-data`}
        className="w-full h-fit flex flex-row justify-between"
      >
        <p id={`${id}-date`} className="text-sm font-bold text-darkGray">
          {DateUtil.dateToElapsedString(post.createdAt)}
        </p>
        <div className="w-fit flex flex-row gap-3">
          <p id={`${id}-views`} className="text-sm font-bold text-black">
            {`${NumberUtil.numberToThreeDigits(post.viewNum)} Views`}
          </p>
          <p id={`${id}-likes`} className="text-sm font-bold text-black">
            {`${NumberUtil.numberToThreeDigits(post.likeNum)} Likes`}
          </p>
        </div>
      </div>
    </div>
  );
}
