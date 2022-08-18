/* ui imports */
import { Box, Typography } from "@mui/material";

/* libraries imports */
import api from "../../api";

/* react component */
const PagePost = ({ post }) => (
  <Box className="page-post">
    <Typography variant="h4" paragraph>
      {post.title}
    </Typography>
    <Typography>{post.body}</Typography>
  </Box>
);

/* preload component props async */
PagePost.getInitialProps = async ({ query: { id } }) => {
  const post = await api.posts.get(id);
  return { post };
};

export default PagePost;
