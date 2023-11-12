"use client";

import BlogHeaderProfile from "@/components/blog-header/blog-header-profile";
import BlogHeaderSearch from "@/components/blog-header/blog-header-search";
import { useParams, useSearchParams } from "next/navigation";
import BlogHeaderCategory from "./blog-header-category";
import { PostSeries } from "@/model/post-series";
import { useEffect, useState } from "react";

type Props = {
  categoryList: PostSeries[];
};

export default function BlogHeader({ categoryList }: Props) {
  const searchParams = useSearchParams();
  const categoryValue = searchParams.get("category");
  const params = useParams();
  const postId = params.postId;

  const [category, setCategory] = useState<PostSeries | undefined>(undefined);

  useEffect(() => {
    if (postId) {
      setCategory(undefined);
      return;
    }

    const newCategory = categoryValue
      ? categoryList.find((category) => category.value === categoryValue!)
      : categoryList.find((category) => category.value === "all");
    setCategory(newCategory);
  }, [categoryValue, postId, categoryList]);

  return (
    <header
      id="blog-header"
      className="fixed z-10 top-0 pt-[88px] pb-6 my-auto px-9 h-52 shrink-0 w-screen flex flex-row justify-between bg-light border-b border-lightGray"
    >
      <BlogHeaderProfile
        username="GeonhyoPark"
        description="Frontend Developer"
        imageUrl={`${process.env.NEXT_PUBLIC_S3}/image/profile/geonhyo.png`}
      />
      {category && <BlogHeaderCategory category={category} />}
      <BlogHeaderSearch categoryList={categoryList} />
    </header>
  );
}
