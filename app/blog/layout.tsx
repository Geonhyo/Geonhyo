import BlogHeader from "@/components/blog-header/blog-header";
import { PostSeries } from "@/model/post-series";

const getBlogCategoryList = async (): Promise<PostSeries[]> => {
  return [{ id: 1, label: "전체", value: "all", num: 0 }];
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryList = await getBlogCategoryList();
  return (
    <div className="bg-light pt-52 flex flex-col w-screen items-center">
      <BlogHeader categoryList={categoryList} />
      {children}
    </div>
  );
}
