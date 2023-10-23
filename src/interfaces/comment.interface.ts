import { LikeEntity } from "src/api/v1/likes/like.entity";
import { PostEntity } from "src/api/v1/posts/post.entity";

export interface UserComment {
  id: number;
  userId: number;
  postId: number;
  parentCommentId?: number;
  commentMessage: string;
  creationTime: string;
  post: PostEntity;
  likes: LikeEntity[];
}