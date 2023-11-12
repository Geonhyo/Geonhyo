import BlogPreviewList from "@/components/blog/preview/blog-preview-list";
import { GetPostPreview } from "@/model/post";

const getPostList = async (): Promise<GetPostPreview[]> => {
  const data = [] as GetPostPreview[];
  return data;
};

export default async function Blog() {
  const postList = await getPostList();
  return (
    <main className="flex flex-col items-center px-6 py-16">
      <BlogPreviewList postList={postList} />
    </main>
  );
}
