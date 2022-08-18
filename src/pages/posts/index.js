/* ui imports */
import { Box, Typography } from "@mui/material";

/* libraries imports */
import api from "../../api";

/* components imports */
import PostList from "../../components/PostList";

/* react component */
const PagePosts = ({ posts }) => (
  <Box className="page-posts">
    <Typography variant="h4" paragraph>
      Posts
    </Typography>
    <PostList list={posts} />
  </Box>
);

/* preload component props async */
PagePosts.getInitialProps = async () => {
  const posts = await api.posts.list();
  return { posts };
};

export default PagePosts;
