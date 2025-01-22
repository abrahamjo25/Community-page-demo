import React from 'react';

interface CommentProps {
  id: number;
  content: string;
  replies?: any[];
}

export const Comment: React.FC<CommentProps> = ({ content, replies }) => {
  return (
    <div className="comment">
      <p>{content}</p>
      <div className="replies">
        {replies?.map(reply => (
          <Comment key={reply.id} {...reply} />
        ))}
      </div>
    </div>
  );
};
