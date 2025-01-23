 interface CommentData  {
  id: number;
  postId?: number;
  display: string;
  author: string;
  commentedDate: string;
  children: CommentData[];
};

interface MatchParams {
  id?: string;
}
