import { Box, Typography } from "@mui/material";
import Post from "../../modules/post";

const PagePosts = ({ posts }) => (
  <Box bgcolor="white" p={2}>
    <Typography variant="h4" paragraph>
      Posts
    </Typography>

    <Post.List list={posts} />
  </Box>
);

PagePosts.getInitialProps = async () => {
  const posts = await Post.api.list();
  return { posts };
};

export default PagePosts;
