import { PostSeries } from "@/model/post-series";
import { PostTag } from "@/model/post-tag";
// import { PostComment } from "@/model/post-comment";

export interface GetPostPreview {
  postId: number;
  series: PostSeries;
  seriesNum: number;
  title: string;
  description: string;
  content: string;
  thumbnailUrl?: string;
  createdAt: Date;
  viewNum: number;
  likeNum: number;
  tagList: PostTag[];
}

export interface GetPostDetail extends GetPostPreview {
  content: string;
  // commentList: PostComment[];
}
