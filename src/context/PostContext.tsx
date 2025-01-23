import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface Author {
  name: string;
  avatar: string;
}

interface Reply {
  id: number;
  parentCommentId: number;
  author: Author;
  commentText: string;
  date: string;
}

interface Comment {
  id: number;
  postId: number;
  author: Author;
  commentText: string;
  date: string;
  replies: Reply[];
}

interface Post {
  id: number;
  img: string;
  tag: string;
  title: string;
  description: string;
  authors: Author[];
}

interface PostContextType {
  posts: Post[];
  postComments: Comment[];
  getCommentById: (id: number) => Comment | undefined;
  addComment: (postId: number, commentText: string) => void;
  addReply: (commentId: number, replyText: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postComments, setPostComments] = useState<Comment[]>([]);

  const getCommentById = (id: number): Comment | undefined => {
    return postComments.find((comment) => comment.id === id);
  };

  const addComment = (postId: number, commentText: string) => {
    const newComment: Comment = {
      id: Date.now(),
      postId,
      author: {
        name: 'New User', 
        avatar: '/static/images/avatar/default.jpg', 
      },
      commentText,
      date: new Date().toLocaleDateString(),
      replies: [],
    };

    setPostComments((prevComments) => [...prevComments, newComment]);
  };

  const addReply = (commentId: number, replyText: string) => {
    const newReply: Reply = {
      id: Date.now(),
      parentCommentId: commentId,
      author: {
        name: 'New User', 
        avatar: '/static/images/avatar/default.jpg', 
      },
      commentText: replyText,
      date: new Date().toLocaleDateString(),
    };

    setPostComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, postComments, getCommentById, addComment, addReply }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
