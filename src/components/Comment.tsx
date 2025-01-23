import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { usePostContext } from "../context/PostContext";

export const Comment = ({ postId }: { postId: number | undefined }) => {
  const { postComments, addComment, addReply } = usePostContext();
  const [replyState, setReplyState] = useState<{
    commentId: number;
    text: string;
  } | null>(null);
  const [newCommentText, setNewCommentText] = useState("");

  const StyledTypography = styled(Typography)(({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  }));

  // Handle reply text change
  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (replyState) {
      setReplyState({ ...replyState, text: e.target.value });
    }
  };

  // Submit a new comment for a specific post
  const submitComment = () => {
    if (newCommentText.trim()) {
      addComment(postId!, newCommentText);  // Ensure `postId` is not `undefined`
      setNewCommentText("");  // Reset after submitting
    }
  };

  // Handle the reply action for a specific comment
  const handleReply = (commentId: number) => {
    setReplyState({ commentId, text: "" });
  };

  // Submit the reply to a comment
  const submitReply = (commentId: number) => {
    if (replyState?.text.trim()) {
      addReply(commentId, replyState.text);
      setReplyState(null);  // Reset reply state
    }
  };

  // Render replies recursively
  const renderReplies = (replies: any[], parentCommentId: number) => {
    return replies.map((reply) => (
      <Box key={reply.id} sx={{ ml: 3, borderLeft: "1px solid #ccc", pl: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
          <Avatar alt={reply.author.name} src={reply.author.avatar} sx={{ width: 24, height: 24 }} />
          <StyledTypography variant="body1" fontWeight="bold">
            {reply.author.name}
          </StyledTypography>
        </Box>
        <StyledTypography variant="body2" color="text.secondary" sx={{ padding: "6px" }}>
          {reply.commentText}
        </StyledTypography>
        <StyledTypography variant="caption" color="text.secondary">
          {reply.date}
        </StyledTypography>
        <Box mt={1}>
          <Button size="small" onClick={() => handleReply(reply.id)}>
            Reply
          </Button>
        </Box>
        {replyState?.commentId === reply.id && (
          <Box mt={1}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={replyState?.text}
              onChange={handleReplyChange}
              placeholder="Write your reply..."
            />
            <Button variant="contained" size="small" sx={{ mt: 1 }} onClick={() => submitReply(reply.id)}>
              Submit
            </Button>
          </Box>
        )}
        {reply.replies && renderReplies(reply.replies, reply.id)}
      </Box>
    ));
  };

  return (
    <Box>
      <StyledTypography variant="h4" gutterBottom>
        Comments
      </StyledTypography>

      {/* Comment Form */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a comment..."
        />
        <Button variant="contained" size="small" sx={{ mt: 1 }} onClick={submitComment}>
          Add Comment
        </Button>
      </Box>

      {/* Display Comments */}
      {postComments
        .filter((comment) => comment.postId === postId)
        .map((comment) => (
          <Card key={comment.id} variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                <Avatar alt={comment.author.name} src={comment.author.avatar} sx={{ width: 24, height: 24 }} />
                <StyledTypography variant="body1" fontWeight="bold">
                  {comment.author.name}
                </StyledTypography>
              </Box>
              <StyledTypography variant="body2" color="text.secondary" sx={{ padding: "6px" }}>
                {comment.commentText}
              </StyledTypography>
              <StyledTypography variant="caption" color="text.secondary">
                {comment.date}
              </StyledTypography>

              <Box mt={2}>
                <Button size="small" onClick={() => handleReply(comment.id)}>
                  Reply
                </Button>
              </Box>

              {replyState?.commentId === comment.id && (
                <Box mt={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={replyState?.text}
                    onChange={handleReplyChange}
                    placeholder="Write your reply..."
                  />
                  <Button variant="contained" size="small" sx={{ mt: 1 }} onClick={() => submitReply(comment.id)}>
                    Submit
                  </Button>
                </Box>
              )}

              <Divider sx={{ my: 2 }} />
              {comment.replies && renderReplies(comment.replies, comment.id)}
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};
