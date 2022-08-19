import { Box } from "@mui/material";
import Post from "@/post";

const PagePostView = ({ post }) => (
  <Box bgcolor="white" p={2}>
    <Post.View post={post} />
  </Box>
);

PagePostView.getInitialProps = async ({ query: { id } }) => {
  const post = await Post.api.read(id);
  return { post };
};

export default PagePostView;
