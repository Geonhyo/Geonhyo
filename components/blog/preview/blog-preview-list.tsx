"use client";

import { GetPostPreview } from "@/model/post";
import BlogPreviewItem from "@/components/blog/preview/blog-preview-item";
import Image from "next/image";
import { useState } from "react";

type Props = {
  postList: GetPostPreview[];
};

export default function BlogPreviewList(props: Props) {
  // const [order, setOrder] = useState<GetPostPreview[]>(props.postList);
  const [postList, setPostList] = useState<GetPostPreview[]>(props.postList);

  return (
    <div
      id="blog-preview-list"
      className="max-w-screen-md w-full flex flex-col"
    >
      {postList.map((post) => (
        <BlogPreviewItem key={`blog-post-item-${post.postId}`} post={post} />
      ))}
    </div>
  );
}
