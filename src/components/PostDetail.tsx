// PostDetail.js  
import React from 'react';  
import { useParams } from 'react-router-dom';  
import Card from '@mui/material/Card';  
import CardContent from '@mui/material/CardContent';  
import CardMedia from '@mui/material/CardMedia';  
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';  
import { postsdata } from '../data/mockData';

const PostDetail = () => {  
  const { id } = useParams();  // Get the post ID from the URL parameters  
  const postId = id ? parseInt(id) : -1; // Fallback to -1 or another way to handle  

  const post = postsdata.find((p) => p.id === postId); // Find the post by ID  

  if (!post) {  
    return <Typography variant="h6">Post not found</Typography>; // Handle the case where the post doesn't exist  
  }  

  return (  
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>  
      <Card sx={{ maxWidth: 600 }}>  
        <CardMedia  
          component="img"  
          height="300"  
          image={post.image}  
          alt={post.title}  
        />  
        <CardContent>  
          <Typography gutterBottom variant="h5" component="div">  
            {post.title}  
          </Typography>  
          <Typography variant="body2" color="text.secondary">  
            {post.content}  
          </Typography>  
        </CardContent>  
      </Card>  
    </Box>  
  );  
};  

export default PostDetail;