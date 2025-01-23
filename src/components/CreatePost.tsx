import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  TextField,
} from "@mui/material";

const CreatePost = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 4, minHeight: "100vh" }}>
      <Container maxWidth="md">
        {/* Blog Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Create Your Blog Post
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Share your thoughts with the world! Add an image and your text
            content below.
          </Typography>
        </Box>

        {/* Blog Form */}
        <Card sx={{ p: 2, boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={3}>
              {/* Image Upload */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Upload Image
                </Typography>
                <Button variant="contained" component="label">
                  Upload Image
                  <input type="file" hidden />
                </Button>
              </Grid>

              {/* Blog Title */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Blog Title
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your blog title here"
                  variant="outlined"
                />
              </Grid>

              {/* Blog Content */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Blog Content
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  placeholder="Write your blog content here..."
                  variant="outlined"
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} textAlign="center">
                <Button variant="contained" size="large">
                  Publish Blog
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Blog Preview
          </Typography>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              image="https://via.placeholder.com/800x400" // Placeholder image
              alt="Blog Post Image"
              sx={{ height: 400 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Blog Title Goes Here
              </Typography>
              <Typography variant="body1" color="text.secondary">
                This is where the blog content will be previewed. The content
                will be shown here after submission or while editing.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default CreatePost;
