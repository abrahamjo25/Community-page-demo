export const postsdata = [
  {
    id: 1,
    img: "https://picsum.photos/800/450?random=11",
    tag: "Photography",
    title: "Find Stunning Stock Photos for Your Blog",
    description:
      "Explore Pexels, a rich resource for free, high-quality images perfect for blogging. Elevate your posts with captivating visuals without breaking your budget.",
    authors: [
      { name: "Emily Carter", avatar: "/static/images/avatar/1.jpg", date: "July 14, 2021" },
    ],
  },
  {
    id: 2,
    img: "https://picsum.photos/800/450?random=12",
    tag: "Creative",
    title: "Level Up Your Blog with Unsplash Images",
    description:
      "Discover Unsplash, the go-to platform for free high-resolution images that add a professional touch to your blog posts.",
    authors: [
      { name: "John Miller", avatar: "/static/images/avatar/2.jpg", date: "July 14, 2021" },
    ],
  },
  {
    id: 3,
    img: "https://picsum.photos/800/450?random=13",
    tag: "Design",
    title: "Pixabay: The Best Images for Your Blog",
    description:
      "Find versatile and royalty-free images on Pixabay to enhance your blog's visual storytelling. Perfect for any niche or style.",
    authors: [
      { name: "Sophia Turner", avatar: "/static/images/avatar/3.jpg", date: "July 14, 2021" },
    ],
  },
  {
    id: 4,
    img: "https://picsum.photos/800/450?random=14",
    tag: "Graphic Design",
    title: "Freepik: Graphics and Stock Images for Blogs",
    description:
      "Leverage Freepik's wide range of free graphic resources, including stock photos, PSDs, and illustrations, to create stunning blog content.",
    authors: [
      { name: "Liam Brown", avatar: "/static/images/avatar/4.jpg", date: "July 14, 2021" },
    ],
  },
  {
    id: 5,
    img: "https://picsum.photos/800/450?random=15",
    tag: "Blogging Tips",
    title: "How to Choose the Best Images for Your Blog",
    description:
      "Learn how to select the most suitable visuals for your blog posts, ensuring they align with your content and engage your readers effectively.",
    authors: [
      { name: "Olivia Green", avatar: "/static/images/avatar/5.jpg", date: "July 14, 2021" },
    ],
  },
  {
    id: 6,
    img: "https://picsum.photos/800/450?random=16",
    tag: "Blogging Tips",
    title: "How to Choose the Best Images for Your Blog",
    description:
      "Learn how to select the most suitable visuals for your blog posts, ensuring they align with your content and engage your readers effectively.",
    authors: [
      { name: "Olivia Green", avatar: "/static/images/avatar/5.jpg", date: "July 14, 2021" },
    ],
  },
];

export const postComments = [
  {
    id: 1, 
    postId: 1, 
    author: {
      name: "Emily Carter",
      avatar: "/static/images/avatar/1.jpg",
    },
    commentText: "This is such an insightful post! I love the visuals you've used here.",
    date: "July 14, 2021",
    replies: [
      {
        id: 101,
        parentCommentId: 1, 
        author: {
          name: "John Miller",
          avatar: "/static/images/avatar/2.jpg",
        },
        commentText: "I completely agree with you, Emily. The visuals are stunning!",
        date: "July 15, 2021",
        replies: [
          {
            id: 201, 
            parentCommentId: 101, 
            author: {
              name: "Sophia Turner",
              avatar: "/static/images/avatar/3.jpg",
            },
            commentText: "Absolutely! It makes the post very engaging.",
            date: "July 16, 2021",
          },
          {
            id: 202,
            parentCommentId: 101,
            author: {
              name: "Liam Brown",
              avatar: "/static/images/avatar/4.jpg",
            },
            commentText: "I wonder where they got these visuals from.",
            date: "July 16, 2021",
          },
        ],
      },
      {
        id: 102,
        parentCommentId: 1,
        author: {
          name: "Olivia Green",
          avatar: "/static/images/avatar/5.jpg",
        },
        commentText: "Great point, Emily! This post is a treasure trove of useful tips.",
        date: "July 15, 2021",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    postId: 1,
    author: {
      name: "Sophia Turner",
      avatar: "/static/images/avatar/3.jpg",
    },
    commentText: "Thanks for sharing these resources! I've been looking for something like this.",
    date: "July 14, 2021",
    replies: [
      {
        id: 103,
        parentCommentId: 2,
        author: {
          name: "Emily Carter",
          avatar: "/static/images/avatar/1.jpg",
        },
        commentText: "You're welcome, Sophia! Let me know if you need more suggestions.",
        date: "July 15, 2021",
        replies: [
          {
            id: 203,
            parentCommentId: 103,
            author: {
              name: "John Miller",
              avatar: "/static/images/avatar/2.jpg",
            },
            commentText: "I’d also recommend checking out Freepik for additional resources.",
            date: "July 16, 2021",
          },
        ],
      },
    ],
  },
];
