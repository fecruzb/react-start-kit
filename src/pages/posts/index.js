import { Typography } from "@mui/material";
import Post from "../../modules/post";

const PagePosts = ({ posts }) => (
  <>
    <Typography variant="h4" paragraph>
      Posts
    </Typography>

    <Post.List list={posts} />
  </>
);

PagePosts.getInitialProps = async () => {
  const posts = await Post.api.list();
  return { posts };
};

export default PagePosts;
